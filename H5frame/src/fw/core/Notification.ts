module fw.core
{
	/**
	 *	全局游戏的一些加载进度 
	 * @author 杨啸
	 * 
	 */	
	export class Notification extends egret.Event
	{
		private static CurrentToken=0;

        /**
         * 内部使用的令牌号
         */
		private Token=0

		/**
		 *	类型的另外一个别名（type==Type==Name） 
		 * @return 
		 * 
		 */		
		public get Name():string{
			return this.type;
		}
		/**
		 *	具体内容，可以是任何对象 
		 */		
		public Body:any=null;

		constructor(types:string, bodys?:any){
            super(types);
			this.Body=bodys;
			//静态自增消息变了，创建一次这个类，增加一次
			this.Token=Notification.CurrentToken++;
			
		}
	}
}