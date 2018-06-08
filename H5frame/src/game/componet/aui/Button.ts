
module aui {
		/** 
		 * eui button的简单扩展
		 * @author yangxiao
		 * */
		export class Button extends eui.Button {

			public static OpenPanelEvent = "game.component.ui.Button.OpenPanel";


			constructor() {
				super();
				this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
			}

			private img_disabled:eui.Image;
			private img_down:eui.Image;
			private img_up:eui.Image;
			//设定开放等级
			private _panelOpenLv:number;
			private _data:any;
			private _panelClass:string;
			private _panelParam:any;

			private _touchTapCallbackFunc:Function
			private _touchTapCallbackThis:any;
			private _touchTapCallbackParams:any[];

			/** 设置按钮皮肤 */
			public setButtonSkin(up:any="",down:any="",dis:any=""){

				let pro:eui.SetProperty;
				if(up!=""){
					pro  = new eui.SetProperty("_Image1","source",up);
					this.skin.states[0].overrides = [];
					this.skin.states[0].overrides.push(pro);   		        
					this.skin["_Image1"].source = up;
				}
	
				if(down!=""){
					pro  = new eui.SetProperty("_Image1","source",down);
					this.skin.states[1].overrides = [];
					this.skin.states[1].overrides.push(pro);  
				}

				if(dis!=""){
					pro  = new eui.SetProperty("_Image1","source",dis);
					this.skin.states[2].overrides = [];
					this.skin.states[2].overrides.push(pro);  
				}
				this.validateNow();

			}

			public set panelOpenLv(value:number){
				this._panelOpenLv = value;
			}
			public get panelOpenLv(){
				return this._panelOpenLv;
			}

			public set data(value:any){
				this._data = value;
			}
			public get data(){
				return this._data;
			}

			public set panelClass(value:string){
				this._panelClass = value;
			}
			public get panelClass(){
				return this._panelClass;
			}

			public set panelParam(value:any){
				this._panelParam = value;
			}
			public get panelParam(){
				return this._panelParam;
			}

            protected createChildren():void {
                super.createChildren();
            } 

			protected partAdded(partName:string, instance:any):void {
				super.partAdded(partName,instance);
			}

			private onTouchTap(e:egret.TouchEvent){
				
				fw.audio.AudioManager.playSound(game.common.GameSound.SoundList.SOUND_BTN);
				if(this._panelOpenLv){
					// if(game.classData.User.User().info.level < this._panelOpenLv){
					// 	e.stopImmediatePropagation();
					// 	game.ui.alert.FloatUI.Ins.addIdByText(10, [this._panelOpenLv]);
					// 	return;
					// }
				}
				if(this._panelClass){
					fw.core.Controller.SendName(Button.OpenPanelEvent,[this._panelClass,this.panelParam]);
				}
			}

			/** 添加 Tap 事件快捷操作，可携带添加参数 */
			public addTouchTapListener(listener: Function, thisObject: any, ...params):void
			{
				this._touchTapCallbackFunc = listener;
				this._touchTapCallbackThis = thisObject;
				this._touchTapCallbackParams = params;
				this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapListener, this);
			}

			private onTouchTapListener(evt: TouchEvent): void
			{
				if (this._touchTapCallbackFunc)
				{
					this._touchTapCallbackFunc.apply(this._touchTapCallbackThis, this._touchTapCallbackParams);
				}
			}

			/** 添加 Tap 事件快捷操作 */
			public removeTouchTapListener(listener: Function, thisObject: any): void
			{
				this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapListener, this);
				this._touchTapCallbackFunc = null;
				this._touchTapCallbackThis = null;
				this._touchTapCallbackParams = null;
			}
		}

}

