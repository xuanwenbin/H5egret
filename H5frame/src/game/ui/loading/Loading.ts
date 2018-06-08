
/**
 * 普通的加载，显示一个loadin，没有任何背景
 * @author yangxiao
 * 
 */
module game.ui.loading {
    export class Loading{

        
		private static _ins:any;
		public static get Ins():Loading{
            if (Loading._ins == null) 
                Loading._ins = new Loading();
            return Loading._ins;
            
		}

		private loadingDB: fw.display.DragonBones;
		private _state:number = 0; // 表示当前状态 0未开始loading  1loading中

		constructor() {}

		public getState(){
			return this._state;
		}

		public async playLoading(){

			if(this._state == fw.enums.ObjectState.Ready){
				return;
			}
			this._state = fw.enums.ObjectState.Ready;

			if(this.loadingDB == null){
				this.loadingDB = new fw.display.DragonBones();
				this.loadingDB.x = Game.Config.GameWidth/2 ;
				this.loadingDB.y = Game.Config.GameHeight/2 ;
				this.loadingDB.touchEnabled = true;
				await this.loadingDB.Load("loading");
			}
			if(!Game.Layer.LoadIconLayout.contains(this.loadingDB))
		        Game.Layer.LoadIconLayout.addChildAt(this.loadingDB,0);
			await this.loadingDB.play("normal",0);
		}


		public stopLoading():void{
			if(this._state == fw.enums.ObjectState.Initial){
				return;
			}
			this._state = fw.enums.ObjectState.Initial;
			this.loadingDB.stop();
			if(Game.Layer.LoadIconLayout.contains(this.loadingDB))
		        Game.Layer.LoadIconLayout.removeChild(this.loadingDB);
		}
	}

}

