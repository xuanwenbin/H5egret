
module aui {
		/** 
		 * 可拖动摆放的例子组建
		 * @author yangxiao
		 * */
		export class Particle extends aui.Component {

            private particleSystem:particle.GravityParticleSystem;

            private _openPanelPlay = false;
            private _resName:string;
            private _configResName:string;

			constructor() {
				super();
			}

            public get openPanelPlay():boolean{
                return this._openPanelPlay;
            }

            public set openPanelPlay(value:boolean){
                this._openPanelPlay = value;
            }
            public get resName():string{
                return this._resName;
            }

            public set resName(value:string){
                if(value.indexOf("_png")!==-1){
                    value = value.replace("_png","");
                }
                this._resName = value;
            }

            public get resConfigName(){
                return this._resName + "_plist";
            }

            public get resTextureName(){
                return this._resName + "_png";
            }

            public Load(){
                this.createChildren();
            }
            protected createChildren():void {
                super.createChildren();

                let isRes = true;
                if(!RES.getRes(this.resTextureName)){
                    RES.getResAsync(this.resTextureName,this.getResAsyncComplete,this);
                    isRes = false;
                }

                if(!RES.getRes(this.resConfigName)){
                    RES.getResAsync(this.resConfigName,this.getResAsyncComplete,this);
                    isRes = false;
                }
                if(isRes){
                    this.newParticle();
                }
            }

            private getResAsyncComplete(e:any){
                if(RES.getRes(this.resConfigName) && RES.getRes(this.resTextureName)){
                    this.newParticle();
                }
            }

            private newParticle(){
                if(this.particleSystem){
                    this.particleSystem.stop();
                    this.particleSystem.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddedToStage,this);
                    this.particleSystem.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemovedFromStage,this);
                    if(this.particleSystem.parent){
                        this.particleSystem.parent.removeChild(this.particleSystem);
                    }
                }

                this.particleSystem = game.common.GlobalSystem.getParticle(this.resName);
                this.particleSystem.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddedToStage,this);
                this.particleSystem.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemovedFromStage,this);
                this.addChild(this.particleSystem);
            }

            private onAddedToStage(e:egret.Event){
                if(this._openPanelPlay){
                    this.particleSystem.start();
                }
            }

            private onRemovedFromStage(e:egret.Event){
                this.particleSystem.stop();
            }

            public start(duration?: number){
                this.particleSystem.start(duration);
            }

            public stop(){
                this.particleSystem.stop();
            }

		}
}
