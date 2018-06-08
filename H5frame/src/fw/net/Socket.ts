module fw.net{
    /**
     * 通信类，由于考虑服务器可能只是一个socket的代理，所以这里处理了粘包。
     * 一般情况下，上层业务逻辑不应该直接监听  Socket.SocketMessageEvent 事件，而应该在游戏中实现一个代理
	 *  @author 杨啸 
     */
    export class Socket{
        constructor(){
    
        }

        public static SocketMessageEvent:string="SocketMessageEvent";
        public static SocketCONNECT:string="SocketCONNECT";
        public static SocketIO_ERROR:string="SocketIO_ERROR";
        public static SocketClose:string="SocketClose";


        private socket:egret.WebSocket;

		private _portNumber :number;
		private _serverURL:string;

		private _messageId = -1;
		private _messageLength = -1;
        private _recvCache:egret.ByteArray = new egret.ByteArray();
        private _time:egret.Sprite=new egret.Sprite();

        public Connect(ip:string,port:number){

            this._portNumber = port;
            this._serverURL = ip;
            //创建 WebSocket 对象
            this.socket = new egret.WebSocket();
            //设置数据格式为二进制，默认为字符串
            this.socket.type = egret.WebSocket.TYPE_BINARY;
            //添加收到数据侦听，收到数据会调用此方法
            this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, (e:egret.Event)=>{
                // let byte = new egret.ByteArray();
                // this.socket.readBytes(byte);
                // console.log(byte.length);
                // byte.position = 0;
                // byte.readBytes(this._recvCache, this._recvCache.length);
                this.socket.readBytes(this._recvCache, this._recvCache.length);
            }, this);

            //添加链接打开侦听，连接成功会调用此方法
            this.socket.addEventListener(egret.Event.CONNECT,(e:egret.Event)=>{
                this.trace("WebSocketOpen");
                this._time.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame,this);
                core.Controller.SendName(Socket.SocketCONNECT);
            }, this);

            //添加链接关闭侦听，手动关闭或者服务器关闭连接会调用此方法
            this.socket.addEventListener(egret.Event.CLOSE,(e:egret.Event)=>{
                core.Controller.SendName(Socket.SocketClose);
                this.trace("WebSocketClose");
            }, this);

            //添加异常侦听，出现异常会调用此方法
            this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, (e:egret.Event)=>{
                this.trace("WebSocketError");
                core.Controller.SendName(Socket.SocketIO_ERROR);
            }, this);

            //连接服务器
            this.socket.connect(ip, port);
        }


        public SendString(id:number,str:string){

            let body = new egret.ByteArray();
            body.writeUTFBytes(str);
            body.position = 0;
            let msg  = new egret.ByteArray();

            msg.writeShort(body.length);
            msg.writeBytes(body)
 
            var len: number = body.length;

            if(len > 0){ 
                this.socket.writeBytes(msg);
                this.socket.flush();
            }
        }

        /**
         *  发送结构体，结构体不包含任何属性
         *  如果refresh为false，并且调用多次SendMsgHead，消息会判断本地是否存在数据，不存在请求服务器，存在直接返回消息。这里就会涉及到一个问题，消息可能并不能按预计顺序收到。
         *  你可以自己设定最后一个发送的消息refresh = true 或 通过其他方式判断。
         */
        public SendMsgHead(MsgHeadName,refresh=false){

            let msg = fw.net.Protobuf.Ins.GetClass(MsgHeadName);
            if(refresh){
                msg["send"](); 
            }else{
                let bodyName = String(MsgHeadName.name).replace("Dce","Dse");
                let msgBody = MsgHead[bodyName];
                if(msgBody){
                    let data = Game.GameData.getValue(msgBody);
                    if(data){
                        fw.core.Controller.SendName(msgBody.id,data);
                    }else{
                        msg["send"](); 
                    }
                }else{
                     msg["send"](); 
                }
            }
        }
        
        public Send(id:number,protobufMsg:any){
            
            if(Config.IsDebug)
                console.warn("send message:",id,protobufMsg.$type.name);
            let body = new egret.ByteArray(protobufMsg.constructor.encode(protobufMsg).finish());
            body.position = 0;
            let body2 = fw.net.Protobuf.Ins.GetIdByClass(id.toString(),body);
            body.position = 0;
            let msg  = new egret.ByteArray();
            msg.writeShort(body.length+6);
            msg.writeShort(id);
            msg.writeInt(1);
            msg.writeBytes(body);
 
            var len: number = msg.length;

            if(len > 0){ 
                this.socket.writeBytes(msg);
                this.socket.flush();
            }

        }

        public Add(msgHead:{id,name,clz},listener:Function,thisObj:any){
            core.Controller.Add(msgHead.id,listener,thisObj);
        }

        public Once(msgHead:{id,name,clz}|string,listener:Function,thisObj:any){
            if(typeof msgHead  == "string"){
                core.Controller.EventDispatcher.once(msgHead,listener,thisObj);
            }else{
                core.Controller.EventDispatcher.once(msgHead.id,listener,thisObj);
            }   
        }

        public Remove(msgHead:{id,name,clz},listener:Function,thisObj:any){
            core.Controller.Remove(msgHead.id,listener,thisObj);
        }

		/**
		 *	定时读取缓存数据 
		 */		
		private onEnterFrame(event:egret.Event):void{
			if(this.socket.connected){
				this.handler();
			}
		}
		
		private handler():void{

			if(this._recvCache.length == 0){
				return;
			}
			
			var startTime:number = egret.getTimer();
			
			while(this._recvCache.bytesAvailable >= 6){

				//var endTime:number = egret.getTimer();	
				//if(endTime - startTime > 25){
					//egret.log("Break when time out");
					//break;
				//}
            
                if(this._messageLength == -1){
                    this._messageLength = this._recvCache.readUnsignedInt()-2;
                } 
                if(this._messageId == -1){
                    this._messageId = this._recvCache.readUnsignedShort();
                }

                if(this._messageLength <= this._recvCache.bytesAvailable){
                    if(this._messageLength==0){
                        this.parseData(this._messageId , null);
                    }else{
                        let _data = new egret.ByteArray();
                        this._recvCache.readBytes(_data, 0, this._messageLength);
                        this.parseData(this._messageId , _data);
                    }

                    this._messageId = -1;
                    this._messageLength = -1;
                } 
                else{
                    //egret.log("Break when message length is " + this._messageLength + " and receive array bytes " + this._recvCache.bytesAvailable + " and receive array length is " + this._recvCache.length);
                    break;
                }
			}
			
			if(this._recvCache.position == this._recvCache.length){
				this._recvCache.clear();
			}
		}

        private _msgCount:number=0;
		private parseData(ID:number,messageByte:egret.ByteArray) : void{

			if(ID<=0){
				console.log("webSocket 错误！parseData：messageID < =0");
				return;
			}
            
            //根据消息获取数据具体类型
            
            var clazzs:any = fw.net.Protobuf.Ins.GetIdByClass(ID.toString(),messageByte);

            if(Config.IsDebug)
                console.log("handler message type:",ID,"clsss:",clazzs[0]," index:",this._msgCount++);

            core.Controller.SendName(Socket.SocketMessageEvent,[ID.toString(),clazzs[0],clazzs[1]]);
			return;
		}
		

        private trace(msg:any):void {
            // console.log(msg);
        }

    }

}