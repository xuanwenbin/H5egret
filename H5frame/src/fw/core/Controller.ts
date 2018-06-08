/**
 * 前端控制器，作为系统内部唯一的全局通知分发器
 * 主要功能包括
 * 1 配置并解析每种Notification的处理流程
 * 2 支持method,notification,http这几种固有处理方式，同时支持各种自定义处理方式
 * 3 模块可以通过控制器直接发送通知和接收通知
 * @author yangxiao
 */
module fw.core.Controller{

    /**
    *	事件处理 
    * 	将game中的dispatcher移动到此,通过controller中的eventdispatcher对象
    * 	进行对全局事件的管理,Game中依然保存内容,只是在Game调用本类中的方法
    */		
    export let  EventDispatcher = new egret.EventDispatcher();

    export function SendName(name:string|number, body?:any){
        Send(new Notification(name.toString(),body));
    }

    export function Send(notification:Notification){
        EventDispatcher.dispatchEvent(notification);
    }

    export function Add(name:string|number,listener:Function,thisObj:any){
        EventDispatcher.addEventListener(name.toString(),listener,thisObj);
    }

    export function Remove(name:string|number,listener:Function,thisObj:any){
        EventDispatcher.removeEventListener(name.toString(),listener,thisObj);
    }

}