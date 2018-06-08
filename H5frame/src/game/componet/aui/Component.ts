module aui {
    /** 
     * eui Component的扩展，使其支持exml的动态创建
     * @author yangxiao
     * */
    export class Component extends eui.Component {

        private _touchTapCallbackFunc: Function
        private _touchTapCallbackThis: any;
        private _touchTapCallbackParams: any[];

        constructor() {
            super();
        }

        public data: any;

        public get skinName(): any {
            return this.$Component[eui.sys.ComponentKeys.skinName];
        }


        public set skinName(value: any) {
            let values = this.$Component;
            values[eui.sys.ComponentKeys.skinNameExplicitlySet] = true;
            if (values[eui.sys.ComponentKeys.skinName] == value)
                return;
            if (value) {
                if (typeof (value) == "string" && value.charAt(0) !== "<") {
                    let fileName = fw.Path.getUrlVer(value);
                    if (Game.Loader.hasRes(fileName)) {
                        value = Game.Loader.getRes(fileName);
                    }
                }
                values[eui.sys.ComponentKeys.skinName] = value;
            } else {
                let theme = egret.getImplementation("eui.Theme");
                if (theme) {
                    let skinName = theme.getSkinName(this);
                    if (skinName) {
                        values[eui.sys.ComponentKeys.skinName] = skinName;
                    }
                }
            }
            this.$parseSkinName();
        }
        public Release(): void { }

        // /**
        //  * @private
        //  * 解析skinName
        //  */
        // $parseSkinName():void {
        //     let skinName = this.skinName;
        //     let skin:any;
        //     if (skinName) {
        //         if (skinName.prototype) {
        //             skin = new skinName();
        //         }
        //         else if (typeof(skinName) == "string") {
        //             let clazz:any;
        //             let text:string = skinName.trim();
        //             if (text.charAt(0) == "<") {
        //                 clazz = EXML.parse(text);
        //             }
        //             else {
        //                 clazz = egret.getDefinitionByName(skinName);
        //                 if (!clazz && text.toLowerCase().indexOf(".exml") != -1) {
        //                     EXML.load(skinName, this["onExmlLoaded"], this, true);
        //                     return;
        //                 }
        //             }
        //             if (clazz) {
        //                 skin = new clazz();
        //             }
        //         }
        //         else {
        //             skin = skinName;
        //         }
        //     }
        //     this.setSkin(skin);
        // }

        /** 添加 Tap 事件快捷操作，可携带添加参数 */
        public addTouchTapListener(listener: Function, thisObject: any, ...params): void {
            this._touchTapCallbackFunc = listener;
            this._touchTapCallbackThis = thisObject;
            this._touchTapCallbackParams = params;
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapListener, this);
        }

        private onTouchTapListener(evt: TouchEvent): void {
            if (this._touchTapCallbackFunc) {
                this._touchTapCallbackFunc.apply(this._touchTapCallbackThis, this._touchTapCallbackParams);
            }
        }

        /** 添加 Tap 事件快捷操作 */
        public removeTouchTapListener(listener: Function, thisObject: any): void {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapListener, this);
            this._touchTapCallbackFunc = null;
            this._touchTapCallbackThis = null;
            this._touchTapCallbackParams = null;
        }
    }
}