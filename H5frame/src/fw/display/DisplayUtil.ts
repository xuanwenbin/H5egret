module fw.display.DisplayUtil {

	/** 获取有效全局范围，主要用于捕捉对象的全局坐标 */
	export function getGlobalBounds(target: egret.DisplayObject): egret.Rectangle {
		if ("validateNow" in target)
			target["validateNow"]();

		let bound:egret.Rectangle = new egret.Rectangle();
		var globalPointTl: egret.Point = target.localToGlobal(bound.x, bound.y);
		var globalPointRb: egret.Point = target.localToGlobal(bound.right, bound.bottom);
		bound.x = globalPointTl.x;
		bound.y = globalPointTl.y;
		bound.width = globalPointRb.x - globalPointTl.x;
		bound.height = globalPointRb.y - globalPointTl.y;
		return bound;
	}

	/** 全屏居中，相对居中
	 * @param target 需要居中的对象
	 * @param spaceWidth 容器宽
	 * @param spaceHeight 容器高
	 * @param intact true不足留空 false超出裁剪
	 */
	export function fillCenter(target: egret.DisplayObject, spaceWidth: number, spaceHeight: number, intact: boolean = true): void {
		var widthRatio: number = spaceWidth / target.width;
		var heightRatio: number = spaceHeight / target.height;
		var scale: number = intact ? Math.min(widthRatio, heightRatio) : Math.max(widthRatio, heightRatio);
		target.scaleX = scale;
		target.scaleY = scale;
		target.x = (spaceWidth - target.width * target.scaleX) >> 1;
		target.y = (spaceHeight - target.height * target.scaleY) >> 1;
	}


	export function fillScale(target: egret.DisplayObject, spaceWidth: number, spaceHeight: number): void {
		var widthRatio: number = spaceWidth / target.width;
		var heightRatio: number = spaceHeight / target.height;
		target.scaleX = widthRatio;
		target.scaleY = heightRatio;
		target.x = (spaceWidth - target.width * target.scaleX) >> 1;
		target.y = (spaceHeight - target.height * target.scaleY) >> 1;
	}


	/** 从父类移除子对象 */
	export function RemoveFromParent(child:egret.DisplayObject):void
	{
		child && child.parent && child.parent.removeChild(child);
	}

	/** 检测某点是否在某矩形内 */
	export function PointInRect(point: egret.Point, rect: egret.Rectangle): boolean
	{
		return point.x > rect.x && point.x < rect.x + rect.width && point.y > rect.y && point.y < rect.y + rect.height
	}

}