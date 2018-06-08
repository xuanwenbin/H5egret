/**
 * 消息初始化消息，一些消息可能做持久化的处理，可以把需要持久化的数据处理方法写入本类
 * 示例DseAuthState 。 “”开始，后面是具体消息名。
 * @author yangxiao 
 */
module game.common.GameMessage{

    export function Init(){
        Game.Controll.Add(fw.net.Socket.SocketMessageEvent,Message,this);
    }

    //游戏服务器
    export function Message(n:fw.core.Notification){

        let array = n.Body;
        let fun:Function = game.common.GameMessage[array[1]];
    
        Game.GameData.push(array[0],array[2]);
        
        if(fun){        
            fun(array[0],array[2]);
        }
        fw.core.Controller.SendName(array[0],array[2]);
    }

    // export function DseAuthState(msg:string, body:protoTS.DseAuthState){
    //     if(body.pass){   
    //         Game.Config.StartGameTimer = egret.getTimer();
    //         Game.Config.ServerTimer = body.time;
    //         Game.Config.ServerZone = body.zone;
    //         game.classData.User.Uid = body.uid;
            
    //         // setInterval(()=>{
    //         //     Game.SocketC.SendMsgHead(MsgHead.DceHeartbeat,true);
    //         // },20000);
    //     }else{    
    //         game.ui.alert.FloatUI.Ins.addIdByText(body.type,[body.leftMin]);
    //     }

    // } 
  
}
