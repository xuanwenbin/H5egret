/**
 * 公处理各种路径的类
 * @author 杨啸
 */
module fw.Path{

    /** 存放所有文件列表 */
    export let _fileList:any={}; 
    /** 获得游戏根路径 */
    export function getRoot(eof:string = "/"){
        let root = Config.GetQueryString("gameResource");
        if(root==null){
            root = "resource";
        }
        return root+eof;
    }
    /** 获取带版本号的标准路径 */
    export function getUrlVer(url:string,isShowVer:boolean = true){
        if(url.indexOf(".exml")!==-1){
            url = getRoot()+"skins/"+url;
        }else{
            url = getRoot()+url;
        }
        if(!isShowVer){
            return url;
        }
        let item = _fileList[url];
        if(item){
            return url+"?v="+item.v;
        }
        return url+"?v="+Config.V();
    }

    /** 获取皮肤的URL地址 */
    export function getSkinUrl(fileName: string) {
        if (fileName.indexOf("?") != -1) {
            return fileName;
        }
        if (fileName.indexOf(".exml") == -1) {
            fileName = fileName + ".exml";
        }
        return getUrlVer(fileName);
    }

    export function defaultSkinUrl(url:string){
        url = getRoot()+"eui_skins/"+url;
        let item = _fileList[url];
        if(item){
            return url+"?v="+item.v;
        }
        return url+"?v="+Config.V();
    }

}