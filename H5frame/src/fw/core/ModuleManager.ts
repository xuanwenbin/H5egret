module fw.core{
	/*
	 * 基于名字的模块管理器，管理系统中所有长生命周期（long-living object）的功能模块
	 * 从某种程度上类似于PureMVC中的Model<->Proxy架构，具体模块相当于Proxy，
	 * 当对象被标志为AutoRegisterToModuleManager==true，则该对象在Load时被自动加入名字管理器
	 * 这样其它需调用该类型对象的模块可以先查询模块管理器，如果发现该类型对象已经存在可直接使用
	 * 该管理器保存的是对象的实例而不是类型
	 * @author 杨啸
	 */
	export class ModuleManager{


		//单例的Game对象
		private static _ins:ModuleManager;

		public static get Ins():ModuleManager{
            if (this._ins == null) 
                this._ins = new ModuleManager();
            return this._ins;
		}
		
        private _dicData:data.Dictionary<any>;//存放所有模块
		
		public  constructor(){
			this._dicData = new data.Dictionary();
		}
		
		//向模块管理器注册一个新对象
		//UserdefinedName为空则使用对象的全限定名注册
		public RegisterModule(object:any,UserDefinedName?:string):void{
			var name:string;
			if(UserDefinedName==null){
				name=egret.getQualifiedClassName(object);
			}
			else{
				name=UserDefinedName;				
			}
			
			if(!this._dicData.containsKey(name)){
				this._dicData.push(name,object);
			}
		}
		
		/**
		 * 销毁类对象 销毁resGroupArr里的资源 然后释放引用
		 */
		public destroyModule(object:any):void
		{
			var name:string=egret.getQualifiedClassName(object);
			if(!this._dicData.containsKey(name))
				return;
			var obj = this._dicData.getValue(name);
			obj.resGroupArr.forEach((value)=>{
				fw.Load.Ins().remove(value);
            })
			this._dicData.remove(name);
		}

		/**
		 * 根据传入对象类型，卸载注册的对象
		 */
		public UnRegisterModule(object:any):void
		{
			var name:string=egret.getQualifiedClassName(object);
			
			this.doUnRegisterModule(name,object);
		}
		
		public UnRegisterModuleByName(name:string):void
		{			
			this.doUnRegisterModule(name,null);
		}
		
		private doUnRegisterModule(name:string,object?:any):void
		{
			if(!this._dicData.containsKey(name))
				return;
			var obj = this._dicData.getValue(name);
			obj.Release();
		}
		

		public GetAllModule():data.Dictionary<any>{
			return this._dicData
		}
		/**
		 * 通过全名称返回模块管理器中的组件
		 * @param name
		 * @return 
		 */		
		public GetModule(name:string):core.BaseControl{
			if(this._dicData.containsKey(name)){
				return  this._dicData.getValue(name);
			}
			let cls:any = egret.getDefinitionByName(name);
			let s = new cls();
			return s;
		}
		/**
		 * 通过类型返回模块管理器中的组件
		 * @param cls
		 * @return 
		 */		
		public Get<T>(c: {new(): T; }):T{
			return this.GetModuleOfClass(c);
		}
		/**
		 * 通过类型返回模块管理器中的组件
		 * @param cls
		 * @return 
		 */		
		public GetModuleOfClass<T>(c: {new(): T; }):T{

 			let name = egret.getQualifiedClassName(c);

			if(this._dicData.containsKey(name)){
					return  this._dicData.getValue(name);
			}
			return new c();
		}

		public closeModule(){
			let dic = this._dicData;
			for(let i =0;i<dic.length;i++){
				let item : BaseControl =dic.getIndexValue(i);
				if( item.State == fw.enums.ObjectState.Ready){
					item.Release();
				}
			}
		}
		
	}
}