/**
 * 全局加载类
 * @yangxiao
 */
module fw.Load {

    /** 私有 */
    export let $ins:fw.Load.LoadManager;

    export function Ins(){

        if($ins){
            return $ins;
        }
        $ins = new fw.Load.LoadManager();
        return $ins;
    }
    export function getExtension(k:string){

            k = k.split("?")[0];
            let type = "";
            let extensions = k.split(".");
            let extension = extensions[extensions.length-1];
            if(k.indexOf(".jpg")!=-1){
                type = RES.ResourceItem.TYPE_IMAGE;
            }else if(k.indexOf(".png")!=-1){
                type = RES.ResourceItem.TYPE_IMAGE;
            }else if(k.indexOf(".fnt")!=-1){
                type = RES.ResourceItem.TYPE_FONT;
            }else if(k.indexOf(".json")!=-1){
                type = RES.ResourceItem.TYPE_JSON;
            }else if(k.indexOf(".exml")!=-1){
                type = RES.ResourceItem.TYPE_TEXT;
            }else if(k.indexOf(".map3")!=-1){
                type = RES.ResourceItem.TYPE_SOUND;
            }else{
                type = RES.ResourceItem.TYPE_BIN;
                console.log("未知的资源格式,注意大小写,路径:",k);
            }
            return {type,extension};
    }

    class LoadItem extends egret.EventDispatcher{
        public thisObj:any;
        public tasks = {};
        public callBack:Function;
        public dic:fw.data.Dictionary<any>;

        constructor(tasks:any,thisObj:any,callBack:Function,dic:fw.data.Dictionary<any>){
            super();
            this.thisObj = thisObj;
            this.tasks = tasks;
            this.callBack = callBack;
            this.dic = dic;
        }

        public Load(){
            
            for(let k in this.tasks){
                if(this.tasks[k]==1){
                    RES.getResAsync(k,this.onCompFunc,this); 
                    continue;
                }else if(this.tasks[k]==2){
                    RES.getResByUrl(k,this.onCompFunc,this,getExtension(k).type); 
                }
            }
        }

        /**
         * 加载任务完成后的回调方法
         */
        private onCompFunc(data:any,url:string) {

            let type = this.tasks[url];
            delete this.tasks[url];
            
            if(data==null){
                console.log("资源加载错误,路径:",url);
            }else{
                if(type==2){//1 = RES.getResAsync 加载,2 = RES.getResByUrl 加载
                    if(getExtension(url).extension=="exml"){
                        EXML.parse(data);
                    }
                    this.dic.push(url,data);
                }
            }

            let len = 0;
            for(let k in this.tasks){
                len++;
            }

            if(len==0){
                if(this.callBack){
                    this.callBack.apply(this.thisObj);
                    this.dispatchEventWith(egret.Event.COMPLETE,false,this);
                    this.Release();
                }
            }
        }

		/** 
		 * 清楚或关闭对象 
		 */
		private Release():void{
            this.thisObj = null;
            this.tasks = null;
            this.callBack =null;
            this.dic = null;
		}

    }

    export class LoadManager {

        /**
         * 用来存放不在配置文件中加载的数据
         */
        private dic = new fw.data.Dictionary();
        private taskList:LoadItem[] = [];
        public loading: game.ui.loading.Loading;

        constructor(){
             this.loading = new game.ui.loading.Loading();
        }

        public get canList(){
            return this.dic;
        }

        public remove(key:string){
            let item = this.dic.remove(key);
            item = null;
            RES.destroyRes(key);
        }

        /**
         * 通过key判断RES和字典中是否包含相关的已下载的资源
         */
        public hasRes(key: string): boolean {

            if (this.dic.containsKey(key)) {
                return true;
            }

            if(RES.getRes(key)){
                return true;
            }

            return false;
        }

        /**
         * 根据key从字典中获取下载到的资源
         */
        public getRes(key: string): any {

            if (this.dic && this.dic.containsKey(key)) {
                return this.dic.getValue(key);
            }
            
            if(RES.hasRes(key)){
                return RES.getRes(key);
            }

            return null;
        }
        

        public load(keys:string|string[],callBack:Function,thisObj:any,isShowLoading:boolean = true){

            if(keys=="" || keys==null){
                callBack.apply(thisObj);
                return;
            }

            if (isShowLoading && this.loading.getState() == 0) { // 当 loading UI 状态为 0 时，播放loading动画
                this.loading.playLoading();
            }

            let templists:string[] = [];
            let list = [];
            if(typeof(keys)=="string"){
                templists.push(keys);
            }
            if(keys instanceof Array){
                while(keys.length>0){
                    let pop = keys.pop();
                    if(pop)
                        templists.push(pop);
                }
            }
            
            //1 = RES.getResAsync 加载,2 = RES.getResByUrl 加载
            templists.forEach(value=>{
                if(RES.config.config.groups[value]){
                    RES.getGroupByName(value).forEach(groupvalue=>{
                        list[groupvalue.name] = 1;
                    });
                }else if(RES.hasRes(value)){
                    list[value] = 1;
                }else{
                    list[value] = 2;
                }
            });

            let list2=[];//处理已经存在的资源，避免加载
            let count = 0;
            for(let k in list){
                if(!this.dic.containsKey(k)){
                    if(k=="" || k==null){
                        continue;
                    }
                    count++;
                    list2[k]=list[k];
                } 
            }
            list = null;
            if(count>0){
                let loadItem = new LoadItem(list2,thisObj,callBack,this.dic);
                this.taskList.push(loadItem);
                loadItem.once(egret.Event.COMPLETE,this.onLoadItemComplete,this);
                loadItem.Load();
            }else{
                if(this.taskList.length<=0){
                    this.loading.stopLoading();
                } 
                callBack.apply(thisObj);
            }

        }
        /**
         * 加载任务完成后的回调方法
         */
        private onLoadItemComplete(e:egret.Event) {
            this.taskList.pop();
            let item = e.data as LoadItem;
            item.removeEventListener(egret.Event.COMPLETE,this.onLoadItemComplete,this);
            item = null;
            e.data = null;     

            if(this.taskList.length<=0){
                this.loading.stopLoading();
            }  
        }
    }
}
