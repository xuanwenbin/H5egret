module fw.display {

    /**
     * 龙骨的封装类
	 *  @author 杨啸 
     */
    export class DragonBonesEvent extends egret.Event{
        constructor(EventObject:dragonBones.EventObject){
            super(EventObject.type);
            this.EventObject = EventObject;
        }

        public EventObject:dragonBones.EventObject;

        public static LOOP_COMPLETE = dragonBones.EventObject.LOOP_COMPLETE;
        public static FRAME_EVENT = dragonBones.EventObject.FRAME_EVENT;
    }
    /**
     * 龙骨的封装类
	 *  @author 杨啸 
     */
    export class DragonBones extends egret.DisplayObjectContainer {

        constructor() {
            super();
            if(DragonBones._factory==null)
                DragonBones._factory = new dragonBones.EgretFactory();    
            //dragonBones.WorldClock.clock.advanceTime(fw.data.Config.Frame);
            this.isDebugDraw();
        }

        private static _factory:dragonBones.EgretFactory;
        private _ar:dragonBones.EgretArmatureDisplay;

        public isDebugDraw(){
            if(Game.Config.IsDebug){
                var shape:egret.Shape = new egret.Shape();
                shape.graphics.beginFill(0xffffff);
                shape.graphics.drawCircle(0, 0, 2);
                shape.graphics.endFill();
                this.addChild(shape);
            }
        }

        private resName;
        private texNum; 
		private _state=0;
        private animationName:string = null;
        private playTimes:number;
        private _timeScale = 1;

        /**
         * 创建龙骨
         * resName 资源的名称
         * isCenter 锚点是否剧中，true居中，flase为左上角为坐标点
         * callFunc 加载完资源的回调函数
         */
        public Load(resName,texNum = 1,callFunc?:Function,thisObject?:any) {

            this._state = fw.enums.ObjectState.Loading;
            this.resName = resName;
            this.texNum = texNum;

            let resURLArr = DragonBones.getLoadResGroup(resName);

            let noRes = false;
            resURLArr.forEach((value,index)=>{
                if(!Game.Loader.getRes(value)) noRes = true;
            });

            return new Promise((resolve, reject) => {
                if(noRes){
                    Game.Loader.load(resURLArr,()=> {    
                        this.createDragonBones();
                        if(callFunc) callFunc.apply(thisObject);
                        resolve();
                    },this,false);
                }else{
                    this.createDragonBones();
                    if(callFunc) callFunc.apply(thisObject);
                    resolve();
                }
            }); 

        }

        /**
         * 播放龙骨
         */
        public play(animationName?: string, playTimes?: number){
            if(this._state != fw.enums.ObjectState.Ready){
                fw.Console.error("error dragonBones play, db state = "+ this._state);
                return;
            }
            if(animationName == null){
                animationName = "normal";    
            }
            this.animationName = animationName;
            return new Promise((resolve, reject) => {
                this.playTimes = playTimes;
                this._ar.animation.timeScale = this._timeScale;
                this._ar.animation.play(animationName,playTimes);
                resolve();
            }); 
        }


        private createDragonBones():void{

            this._state = fw.enums.ObjectState.Ready;    
            let  _factory = DragonBones._factory;

            this._ar = this.getArmatureDisplay(this.resName);

            if(!this._ar){
                //读取一个骨骼数据,并创建实例显示到舞台
                var skeletonData = Game.Loader.getRes(fw.Path.getUrlVer("assets/db/"+this.resName+"_ske.json"));
                if(!skeletonData){
                    if(Game.Config.IsDebug)console.log("error 资源组不存在名为：",this.resName," 资源！");
                }
                //定义dragonBones.EgretFactory对象
                _factory.parseDragonBonesData(skeletonData);
                let textureData = null;
                let texture = null;
                if(this.texNum==1){
                    textureData = Game.Loader.getRes(fw.Path.getUrlVer("assets/db/"+this.resName+"_tex.json"));
                    texture = Game.Loader.getRes(fw.Path.getUrlVer("assets/db/"+this.resName+"_tex.png"));
                    _factory.parseTextureAtlasData(textureData,texture);
                }else{
                    for(let i=0;i<this.texNum;i++){
                        textureData = Game.Loader.getRes(fw.Path.getUrlVer("assets/db/"+"_tex_"+i+".json"));
                        texture = Game.Loader.getRes(fw.Path.getUrlVer("assets/db/"+"_tex_"+i+".png"));
                        _factory.parseTextureAtlasData(textureData,texture);
                    }
                }
                this._ar = this.getArmatureDisplay(this.resName);
            }
            if(this._ar.parent){
                this._ar.parent.removeChild(this._ar);
            }
            this.addChild(this._ar);
            this._ar.addEventListener(dragonBones.EventObject.LOOP_COMPLETE,this.loopComplete,this);
            this._ar.addEventListener(dragonBones.EventObject.FRAME_EVENT,this.frameEvent,this);
        }

        public getArmatureDisplay(resName:string){

            let factory = DragonBones._factory;
            let ar:dragonBones.EgretArmatureDisplay = null;
            if(!factory.getDragonBonesData(resName)){
                return ar;
            }
            if(factory.getDragonBonesData(resName).armatures["Sprite"]){
                ar = factory.buildArmatureDisplay("Sprite",resName);  
            }else if(factory.getDragonBonesData(resName).armatures["MovieClip"]){
                ar = factory.buildArmatureDisplay("MovieClip",resName);
            }else{
                ar = factory.buildArmatureDisplay(resName,resName); 
            }
            //ar.disableBatch();
            return ar;
        }

        private loopComplete(e:dragonBones.EventObject){
            this.dispatchEvent(new DragonBonesEvent(e));
        }

        private frameEvent(e:dragonBones.EventObject){
            this.dispatchEvent(new DragonBonesEvent(e));
        }

        /** 设置帧率， 前进的时间。 (以秒为单位，当设置为 -1 时将自动计算当前帧与上一帧的时间差) */
        public timeScale(f: number){
            
            this._timeScale = f;
            if(this._ar){
                this._ar.animation.timeScale =f;
            }       
        }

        /**
         * 播放龙骨,播放到特定帧
         */
        public gotoAndStopByFrame(animationName?: string, frame?: number){
            if(this._state != fw.enums.ObjectState.Ready){
                fw.Console.error("error dragonBones gotoAndStopByFrame, db state = "+ this._state);
                return;
            }
            this._ar.animation.gotoAndStopByFrame(animationName,frame);
        }

        /**
         * 播放龙骨,从指定帧开始播放指定的动画
         */
        public gotoAndPlayByFrame(animationName?: string,frame?: number){
            if(this._state != fw.enums.ObjectState.Ready){
                fw.Console.error("error dragonBones gotoAndPlayByFrame, db state = "+ this._state);
                return;
            }
            this._ar.animation.gotoAndPlayByFrame(animationName,frame);
        }

        /** 播放到最后一帧 */
        public gotoAndEnd(animationName?: string){
            if(this._state != fw.enums.ObjectState.Ready){
                fw.Console.error("error dragonBones gotoAndEnd, db state = "+ this._state);
                return;
            }
            let count = this.frameCount(animationName).frameCount;
            this._ar.animation.gotoAndStopByFrame(animationName,count);
        }

        /** 播放到第一帧 */
        public gotoAndOne(animationName?: string){
            if(this._state != fw.enums.ObjectState.Ready){
                fw.Console.error("error dragonBones gotoAndOne, db state = "+ this._state);
                return;
            }
            this._ar.animation.gotoAndStopByFrame(animationName,0);
        }

        public frameRate(animationName?: string){
            if(animationName == null){
                animationName = this.animationName; 
            }
            let frameCount = 0;
            for(let i=0;i<this._ar.animation.animationDataList.length;i++){
                if(this._ar.animation.animationDataList[i].name == animationName){
                    frameCount = this._ar.animation.animationDataList[i].parent.frameRate;
                }
            }
            return frameCount;
        }
        /** 获取动画帧数 */
        public frameCount(animationName: string){
            if(this._state != fw.enums.ObjectState.Ready){
                fw.Console.error("error dragonBones frameCount, db state = "+ this._state);
                return;
            }
            let frameCount = 0;
            let duration = 0;
            for(let i=0;i<this._ar.animation.animationDataList.length;i++){
                if(this._ar.animation.animationDataList[i].name == animationName){
                    frameCount =  this._ar.animation.animationDataList[i].frameCount;
                    duration =  this._ar.animation.animationDataList[i].duration;
                }
            }
            return {frameCount,duration};
        }

        private stopTime = 0;
        public stop(bool = true){
            if(this._state != fw.enums.ObjectState.Ready){
                fw.Console.error("error dragonBones stop, db state = "+ this._state);
                return;
            }
            if(bool){
                this.stopTime = this._ar.animation.getState(this.animationName).currentTime;
                if(this._ar.animation.isPlaying)
                    this._ar.animation.stop(this.animationName);  
            }else{
                this._ar.animation.gotoAndPlayByTime(this.animationName,this.stopTime,this.playTimes);
                this.stopTime = 0;
            }    
        }

        public get isPlaying(){
            if(!this._ar){
                return false;
            }
            return this._ar.animation.isPlaying;
        }

        /** 用指定资源替换插槽的显示对象,只有DB动画可以 MC不可用 */
        public replaceSlotDisplay(slotName :string, display:egret.DisplayObject){
            if(this._state != fw.enums.ObjectState.Ready){
                fw.Console.error("error dragonBones replaceSlotDisplay, db state = "+ this._state);
                return;
            }
            this._ar.armature.getSlot(slotName).display = display;
        }

        public getSlot(slotName :string):any{
            if(this._state != fw.enums.ObjectState.Ready){
                fw.Console.error("error dragonBones getSlot, db state = "+ this._state);
                return;
            }
            return this._ar.armature.getSlot(slotName).display;
        }

        /**
         * 获取龙骨显示对象
         */
        public get egretArmatureDisplay():dragonBones.EgretArmatureDisplay{
            if(this._state != fw.enums.ObjectState.Ready){
                fw.Console.error("error dragonBones egretArmatureDisplay, db state = "+ this._state);
                return;
            }
            return this._ar;
        }

        /**
         * 移除龙骨
         * isRemoveAtlas 是否删除资源 如果删除 在下一次调用龙骨时 请侦听Load的回调方法 然后再播放或者设置动画
         * 例如 this.db = new fw.display.DragonBones();
         *      this.db.Load("shilianchou",1,()=>{
         *          this.db.play("normal",1);
         *      },this);
         */
        public Release(isRemoveAtlas = false,isRemveEvent = true){

            this._state = fw.enums.ObjectState.Disabled;    
            if(this._ar!=null){
                if(this._ar.parent){
                    this._ar.animation.reset();
                    this._ar.parent.removeChild(this._ar);
                    if(isRemveEvent){
                        this._ar.removeEventListener(dragonBones.EventObject.LOOP_COMPLETE,this.loopComplete,this);
                        this._ar.removeEventListener(dragonBones.EventObject.FRAME_EVENT,this.frameEvent,this);
                    }
                }

                let dragonName = this._ar.armature.name;
                this._ar.armature.dispose();
                this._ar.dispose(true);
                this._ar = null;

                if(isRemoveAtlas == true){

                    let  _factory = DragonBones._factory;
                    _factory.removeTextureAtlasData(dragonName,true);
                    _factory.removeDragonBonesData(dragonName,true);

                    Game.Loader.remove(fw.Path.getUrlVer("assets/db/"+this.resName+"_ske.json",false));
                    if(this.texNum == 1){

                        Game.Loader.remove(fw.Path.getUrlVer("assets/db/"+this.resName+"_tex.png",false));
                        Game.Loader.remove(fw.Path.getUrlVer("assets/db/"+this.resName+"_tex.json",false));
                    }
                    else{
                        for(let i=0;i<this.texNum;i++){
                            Game.Loader.remove(fw.Path.getUrlVer("assets/db/"+"_tex_"+i+".png",false));
                            Game.Loader.remove(fw.Path.getUrlVer("assets/db/"+"_tex_"+i+".json",false));
                        }
                    }
                }
            }
            if(this.parent){
                 this.parent.removeChild(this);
            }
        }

        /** 获取要加载的资源组 */
        public static getLoadResGroup(resName:string,texNum = 1){

            fw.Path.getUrlVer(resName+"_ske.json")
            let root = fw.Path.getRoot() + "assets/db/";
            let resURLArr = [fw.Path.getUrlVer("assets/db/"+resName+"_ske.json")];
            if(texNum == 1){
                resURLArr.push(fw.Path.getUrlVer("assets/db/"+resName+"_tex.png"));
                resURLArr.push(fw.Path.getUrlVer("assets/db/"+resName+"_tex.json"));
            }
            else{
               for(let i=0;i<texNum;i++){

                   resURLArr.push(fw.Path.getUrlVer("assets/db/"+"_tex_"+i+".png"));
                   resURLArr.push(fw.Path.getUrlVer("assets/db/"+"_tex_"+i+".json"));
               }
            }
            return resURLArr;
        }

    }
}