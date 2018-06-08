/**
 * 公共参数区，可以放置各种参数（参数可能是一个对象）
 * “_”开始的方法请不要调用，私有方法
 * @author 杨啸
 */
module fw.Config
{

    /** 私有 */
    export let _rootContainer:egret.Stage;
    /** 私有，设置游戏舞台，游戏初始化设置 */
    export function $setGameStage(value:egret.Stage){
        if(_rootContainer==null)
            _rootContainer=value;
        if(value!=null){
            GameWidth = value.$stageWidth;
            GameHeight = value.$stageHeight;
            //Config.GameScale = Config.GameWidth/1080;
        }
    }
    /** 获取根显示容器 */
    export function getRootContainer():egret.Stage{
        return _rootContainer;
    }
    /** 游戏宽高，将影响主窗体的客户区域大小等*/		
    export let GameWidth=0;  
    /** 游戏宽高，将影响主窗体的客户区域大小等*/	
    export let GameHeight=0;
    /**  接受到服务器的开始时间戳（客户端时间戳） */	
	export let StartGameTimer=0;		
    /**  服务器时间，用来校正客户端时间的（单位秒） */	
	export let ServerTimer=0;
    /** 服务器时区 */
	export let ServerZone=0;;
    /** 帧率 */
    export let Frame = 24; 
    /** 调试模式 */
    export let IsDebug = true;
    /** 服务器名/区 */
    export let ServerArea:string="1";
    /** 用户名暂存 */
    export let UserName:string="";

    /** 版本号,不能使用“.”，“/” */
	export function V(){
        if(GetQueryString("gameVersion")){
            return GetQueryString("gameVersion");
        }
        return Math.random();
    };
    /** 获取window对象 */
    export function GetQueryString(str:string){
        return window[str];
    }

    export function requestFullScreen(){
        if(egret.Capabilities.runtimeType==egret.RuntimeType.NATIVE){
            return;
        }
        if(!egret.Capabilities.isMobile){
            return;
        }
        return window["requestFullScreen"]();
    }

} 