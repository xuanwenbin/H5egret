module fw.net{

    /**
     * 消息结构的处理类
	 *  @author 杨啸 
     */
    export class Protobuf{
        constructor(){
           
        }

		private static _ins:any;

		public static get Ins():Protobuf{
            if (Protobuf._ins == null) 
                Protobuf._ins = new Protobuf();
            return Protobuf._ins;
            
		}

        private _protobuff:protobuf.Root;

        private get protobuff():protobuf.Root{
            if(this._protobuff==null){
                let str=RES.getRes("common_json");
                this._protobuff = protobuf.Root.fromJSON(str);
            }
            return this._protobuff;
        }

        /**
         * 根据类名，获取具体的消息类
         */
        public GetEnum(className:string):any{
            return this.protobuff.lookupEnum(className);
        }

        /**
         * 根据类名，获取具体的消息实类
         */  
        public GetNewClass(className:string):any{      
            let cls = this.protobuff.lookupType(className); 
            return cls.create();
        }

        public GetByteArray(obj:any){
            //this.protobuff.e
        }

        /**
         * 获取具体的消息实类,并封装一个发送方法
         */  
        public GetClass<A,B,C>(msgHead:{id:A,name:B,clz:C}):C{
            let cls = this.protobuff.lookupType(msgHead.name as any); 
            let clz = cls.create();
            let ID:any = msgHead.id;
            clz["send"] = function(){
                Game.SocketC.Send(ID,this);
            }
            return clz as any;
        }

        /**
         * 根据ID，获取具体的消息实类
         */  
        public GetIdByNewClass(ID:string|number):any{
            let className:string =this.IdByClassName(ID.toString());
            let cls = this.protobuff.lookupType(className); 
            let clz = cls.create();
            clz["send"] = function(){
                Game.SocketC.Send((ID as number),this);
            }
            return clz;
        }

        /**
         * 根据消息ID，以及流数据，创建具体实类
         */  
        public GetIdByClass(ID:string,message:egret.ByteArray){

            let className:string =this.IdByClassName(ID);
            let cls = this.protobuff.lookupType(className);  
            if(message == null){
                return [className,cls.create()];
            }
            if(!className){
                if(Game.Config.IsDebug)console.log("错误,无法解析消息，消息ID：",ID);
            }
            let uint8Array = new Uint8Array(message.buffer);
            return [className,cls.decode(uint8Array)];
        }

        public IdByClassName(ID:string){
            return MsgHead["z"+ID];
        }

        /**
         * 客户端发送的消息列表
         */
        public get MsgHead(){
            return MsgHead;
        }

    }
}