module fw.core {

	/** 设置BaseControl - > UI的一些常规属性 ，通过执行SetValue(UIValueType.xxx) */
	export class UIValueType {
		public static alignType: { id: number, clz: fw.display.ResizeManager.ResizeAlign } = { id: 1, clz: null }; //对齐方式
		public static fadeInEffect: { id: number, clz: (target: BaseControl, onFinished: ()=>void) => void } = { id: 2, clz: null }; //淡入效果
		public static fadeOutEffect: { id: number, clz: (target: BaseControl, onFinished: ()=>void) => void } = { id: 3, clz: null }; //淡出效果
		public static openLevel: { id: number, clz: any } = { id: 4, clz: null }; //是否根据特定等级开启
		public static data: { id: number, clz: any } = { id: 5, clz: null }; //自定义数据
		public static panelType: { id: number, clz: number[] } = { id: 6, clz: null }; //自定义数据
		public static channel: { id: number, clz: number } = { id: 7, clz: null }; //加载所使用的渠道
	}
	
    /**
     * 基础接口 - 用于UI模块的基类,下次改进框架，可以引入未打开界面时的界面等级判定，用来预判，以及预判后的回调
	 * @author 杨啸
     */
    export class BaseControl extends aui.Component implements IBaseObject{

        constructor() {
            super();
        }

		private _skinNameStr:string;
		protected resGroupArr:string[]=[];
		protected btnClose:aui.Button;  /** 默认关闭按钮，需要做到UI中，并且与这里命名保持一致 */
		protected datas:any = {};
		private _state=0; 				/** 当前的状态 */
		private _isInit:boolean = false;
		private _registerMode=1; 		/** 是否注册到模块管理器中 如果注册的话 将成为单例  默认值1  0不自动注册 2表示已经注册上了，此时无法修改状态,注销也只能返回1状态！*/

		/** 数据枚举的格式可以参考：game.scene.SpriteDataEnum */
        public GetValue<A,B>(key:{id:A,clz:B}):B{
			if(this.datas[key.id.toString()] != null){
				return this.datas[key.id.toString()];
			}
			return null;     
        }

		/** 根据传入的ID，获取数据表的具体单条数据 */
        public SetValue<A,B>(key:{id:A,clz:B},value:B):B{
			this.datas[key.id.toString()] = value;
			return value;   
        }

		public ClaerValue(){
			this.datas = {};
		}

		public get skinNameStr(){
			return this._skinNameStr;
		}

		/** 必须是完整的文件名带有.exml */
		public set skinNameStr(value:string){
			this._skinNameStr = Path.getSkinUrl(value);
		}

		public Load():void{

			//确保Load方法只能在Initial状态下被调用
			if(this._state!=enums.ObjectState.Initial)	return;
			//修改状态为加载
			this.State=enums.ObjectState.Loading;
			//判断自身是否需要注册到管理器中
			if(this._registerMode==1){
				this._registerMode=2;
				ModuleManager.Ins.RegisterModule(this);
			}
			if(!this.skinName)
				fw.Load.Ins().load([this.skinNameStr].concat(this.resGroupArr),this.onSkinCallBackFun,this);
			else
				this.OnLoad();
		}
		
		public onSkinCallBackFun():void{
			this.skinName = fw.Load.Ins().getRes(this.skinNameStr);
			//fw.Load.Ins().remove(this.skinNameStr); 暂时感觉没有移除的必要
			if(this._state==enums.ObjectState.Initial){
				return;
			}
			this.OnLoad();
		}

		//初始化 只调用一次
		protected init():void{

		}

		//需要overridecca
		protected OnLoad():void{
		
			if(!this._isInit){
				this._isInit = true;
				this.init();
			}

			if (this.GetValue(UIValueType.alignType) != null) {
				display.ResizeManager.Add(this, this.GetValue(UIValueType.alignType), this.OnResize);
			}
			
			if (this.GetValue(UIValueType.fadeInEffect) != null) {
				egret.Tween.removeTweens(this);
				this.GetValue(UIValueType.fadeInEffect).call(this, this, this.OnOpen);
			}
			else {
				this.OnOpen();
			}
		}

		protected OnOpen(): void {
			this.State=enums.ObjectState.Ready;

			if(this.btnClose)
				this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Release,this);

			let types = this['__types__']; /** 获取当前类名以及继承类、接口等 */
			if(types.indexOf("fw.core.IUpdates")!==-1){
				egret.startTick(this.OnUpdate,this);
			}

			if(Config.IsDebug){
				let type = this['__types__'][0]; /** 获取当前的类名，包含包名的 */
				console.log("open panel:",type);
			}
		}

		/** 定时器，界面如果扩展接口fw.core.IUpdates后，界面打开会自动调用本方法 */
		public OnUpdate(timeStamp: number):boolean{

			return false;
		}

		/** 如果设置了 alignType 属性，窗口重新布局时调用的方法 */
		protected OnResize(): void {
			
		}

		public Release(): void {
			//如果已经是Disabled状态则无法再次释放
			if (this._state != enums.ObjectState.Initial) {
				this.State = enums.ObjectState.Initial;

				if (this._registerMode == 2) {
					ModuleManager.Ins.UnRegisterModule(this);
					this._registerMode = 1;
				}

				display.ResizeManager.Remove(this);

				if (this.btnClose) {
					this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.Release, this);
				}

				this.OnClose();
			}
		}

		protected OnClose(): void {
			if (this.GetValue(UIValueType.fadeOutEffect) != null) {
				egret.Tween.removeTweens(this);
				this.GetValue(UIValueType.fadeOutEffect).call(this, this, this.OnRelease);
			}
			else {
				this.OnRelease();
			}
		}
		
		//需要override
		protected OnRelease(): void {
			this.State = enums.ObjectState.Initial;
			egret.stopTick(this.OnUpdate,this);
			if (this.parent) {
				this.parent.removeChild(this);
			}
		}

        /**
         * 外部不要进行设置State
         */
		public get State():number{
			return this._state;
		}
		public set State(value:number){
			//要设置的状态已经是当前状态，返回
			if(this._state==value)return;
			
			//先记录下之前状态c
			var previousState=this._state;
			
			//新状态
			this._state=value;
			
			//触发子类虚方法
			this.OnStateChange(this._state,previousState);
		}
		
		/**
		 * 模块状态改变时候触发
		 * @param newState
		 * @param oldState
		 */		
		protected OnStateChange(newState:number,oldState:number){
		}
		
        /**
         * 模块管理器相关函数区
		 * 是否在调用Load方法后将自己注册到ModuleManager上
		 * 如果设置为true，则初始化后将自身注册到ModuleManager
		 * 这样需要调用本对象时可以从ModuleManager直接获取对象引用，而不需要再次new出  
         */
		public get AutoRegisterToModuleManager():boolean{
			return this._registerMode==0?false:true;
		}
		
		/**
         * 是否已经被注册在ModuleManager上
         */
		public get HasRegistered():Boolean{
			return this._registerMode==2?true:false
		}
		
        /**
         * 只有状态为0,1才可以设置，因为2表示已经注册到名字管理器，此时属性变为只读
         */
		public set AutoRegisterToModuleManager(value:boolean){
			if(this._registerMode<=1){
				this._registerMode = value?1:0;
			}
			else{
				console.log("BaseControl.AutoRegisterToModuleManager",this._registerMode);
			}
		}

    }

}