/**
 * 游戏核心类，一些共享类，功能类，从这里调用
 * @author yangxiao
 */
module Game{
	/** 网络数据 */
	export let GameData:game.common.GameData;
	/** 配置表 */
	export let ConfigData:game.common.GameConfigData;
	export let SocketC:fw.net.Socket;
	export let Loader:fw.Load.LoadManager;
	export let Layer:game.common.MainWindow;
	export let language:any;
	/** 游戏配置 */
	export let Config = fw.Config;
	/** 模块管理 */
	export let Module = fw.core.ModuleManager.Ins;
	/** 事件控制器 */
	export let Controll = fw.core.Controller;

	export let _lstUpdateObjects;
	export let _lastGameLoopTimer:number;

	export function Load(stage:egret.Stage){

		if(stage==null){
			console.log("Stage object must be existed!");
			return;	
		}
		//更新的队列
		_lstUpdateObjects=new fw.data.Dictionary()		
		//向Config上设置几个基础的必要参数
		fw.Config.$setGameStage(stage);	
		GameData = new game.common.GameData();
		ConfigData = new game.common.GameConfigData();
		Loader = fw.Load.Ins();
		SocketC = new fw.net.Socket();
		Layer = new game.common.MainWindow();
		fw.Config.getRootContainer().addChild(Layer);

		stage.addEventListener(egret.Event.ENTER_FRAME,onGameLoop,this);

		stage.addEventListener(egret.Event.RESIZE,(e:egret.Event)=>{
			Config.GameHeight = stage.stageHeight;
			Config.GameWidth = stage.stageWidth;
		},this);

		//监听按钮，设置过点击自动打开的按钮。
		fw.core.Controller.Add(aui.Button.OpenPanelEvent,onButtonOpen,this);	
		fw.core.Controller.Add(fw.net.Socket.SocketClose,onSocketClose,this);	
		fw.display.ResizeManager.Start(stage);
	}

	/** 获取一个新的消息 */
	export function getNewMsg<A,B,C>(msgHead:{id:A,name:B,clz:C}):C{
		return fw.net.Protobuf.Ins.GetClass(msgHead);
	}

	/** 返回场景方法 */
	export function Scene(){
		//return game.scene;
	}
	/*
		* 主游戏循环(虚方法，可以重写,但不建议这样做）
		* 这里是游戏最核心的方法和推动力，目前先简单实现更新
		* 没有考虑丢帧，超时，变频等各种问题，也没有在这里进行逻辑和渲染的分别处理
		* 和渲染相关的操作直接由Scene对象负责，而Scene从层次上说属于game->MainWindow->Scene
		* 是Game的“孙子”一级，层次不高，但一般功能复杂
		* 因为Scene虽然是RPG游戏的核心界面，但不一定是每种游戏均需要的，所以从层次上说较低
		* 例如SLG有可能只有MainWindow上边挂很多的Part弹出很多的Dialog就可以了
		*/
	export function onGameLoop(timeStamp:number):boolean{
		for(let i=0;i<this._lstUpdateObjects.length;i++){
			let updateObject=this._lstUpdateObjects.getIndexValue(i) as fw.core.IUpdates;
			if(updateObject){
				updateObject.OnUpdate(this._lastGameLoopTimer);
			}
		}
		//额外记录下本次游戏循环结束时的时间戳（单位毫秒）
		this._lastGameLoopTimer=egret.getTimer();
		return;
	}
	
	export function onButtonOpen(n:fw.core.Notification){

		let arr:string[] = n.Body;
		// let panel:fw.core.BaseControl = Game.Module.GetModule(arr[0]);
		// panel.SetValue(fw.core.UIValueType.panelType,[parseInt(arr[1])]);
		// panel.Load();
	}

	export function onSocketClose(){
		// let panel = Game.Module.GetModuleOfClass(game.ui.alert.ConfirmUI);
		// panel.setContent(this,Game.language.common.conifrm_socketClose,null,()=>{
		// 	Game.OnRelease();
		// },()=>{
		// 	Game.OnRelease();
		// });
		// panel.Load();
	}
	/**
	 *	这个方法，可有可无，一直不会执行。 
		* 
		*/		
	export function OnRelease():void{
		fw.display.ResizeManager.Stop();
		//game.ui.tips.TipManager.Release();
		location.reload(); 
	}
}
