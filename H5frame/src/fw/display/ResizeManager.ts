module fw.display.ResizeManager {

	let _stage: egret.Stage;
	let _map: fw.data.Dictionary<ResizeProperty>;

	export function Start(stage: egret.Stage): void {
		_map = new fw.data.Dictionary<ResizeProperty>();
		_stage = stage;
		stage.addEventListener(egret.Event.RESIZE, _onStageResize, ResizeManager);
	}

	export function Stop(): void {
		if (_stage)
			_stage.removeEventListener(egret.Event.RESIZE, _onStageResize, ResizeManager);
	}

	export function Refresh(): void {
		/*
		for (let index:number = 0; index < _map.length; index++)
		{
			let prop:ResizeProperty = _map.getValue(_map.getKey(index));
			_excuteResize(prop);
		}
		*/
		_map.forEachValue(prop => {_excuteResize(prop);}, this);
	}

	export function Add(target: egret.DisplayObjectContainer, align:ResizeAlign, alignlistener?: () => void, ): void {
		let clzName:string = egret.getQualifiedClassName(target);
		if (!clzName)
			return;
		let prop:ResizeProperty = {target: target, align:align, callback:alignlistener, bound:null};
		_map.push(clzName, prop);
		_excuteResize(prop);
	}

	export function Remove(target: egret.DisplayObjectContainer): void {
		let clzName:string = egret.getQualifiedClassName(target);
		if (!clzName)
			return;
		if (_map.containsKey(clzName))
			_map.remove(clzName);
	}

	function _onStageResize(evt?: egret.Event): void {
		Refresh();
	}

	function _excuteResize(prop:ResizeProperty): void {
		if (prop.target["validateNow"] != null)
			prop.target["validateNow"]();

		prop.bound = {x:prop.target.x, y:prop.target.y, width:prop.target.width, height:prop.target.height};
		// fw.Console.log("ResizeManager", fw.Strings.Format("x:{0} y:{1} w:{2} h:{3}", prop.bound.x, prop.bound.y, prop.bound.width, prop.bound.height));
		// fw.Console.log("ResizeManager", _stage.stageWidth, _stage.stageHeight);
		switch (prop.align)
		{
			case ResizeAlign.CENTER:
				let posX:number = _stage.stageWidth - prop.bound.width >> 1;
				let posY:number = _stage.stageHeight - prop.bound.height >> 1;
				prop.target.x = posX + prop.target.width * prop.target.anchorOffsetX;
				prop.target.y = posY + prop.target.height * prop.target.anchorOffsetY;
				break;
			case ResizeAlign.FILL:
				prop.target.x = prop.target.y = 0;
				prop.target.width = _stage.stageWidth;
				prop.target.height = _stage.stageHeight;
				break;
			case ResizeAlign.SCALE_INTACT:
				DisplayUtil.fillCenter(prop.target, _stage.stageWidth, _stage.stageHeight, true);
				break;
			case ResizeAlign.SCALE_CLIP:
				DisplayUtil.fillCenter(prop.target, _stage.stageWidth, _stage.stageHeight, false);
				break;
			case ResizeAlign.SCALE_FILL:
				DisplayUtil.fillScale(prop.target, _stage.stageWidth, _stage.stageHeight);
				break;
		}
		if (prop.callback)
		{
			prop.callback.call(prop.target);
		}
	}


	export enum ResizeAlign {
		/** 居中 */
		CENTER = 1, 
		/** 不保持比例铺满 */
		FILL = 2,
		/** 缩放并保持显示完整 */
		SCALE_INTACT = 3,
		/** 缩放并保持充满屏幕 */
		SCALE_CLIP = 4,
		/** 缩放并保持充满父容器 */
		SCALE_FILL = 5,

	}
	export interface ResizeProperty {
		target: egret.DisplayObjectContainer;
		align: ResizeAlign;
		callback: () => void;
		bound: {x:number, y:number, width:number, height:number};
	}
}