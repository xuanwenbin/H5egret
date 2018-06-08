module game.common{

    /**
     * 获取游戏的各种网络数据。
     * @author 杨啸 
     */
    export class GameData{

      constructor(){
            this._configList = new fw.data.Dictionary();
        }
        private _configList:fw.data.Dictionary<any>;

        public push(key,value){
            this._configList.push(key,value);
        }

        /** 获取通信数据类 */
        public getValue<A,B,C>(msgHead:{id:A,name:B,clz:C}):C{
            if(typeof(msgHead)=="string"){
                return this.getClassData(msgHead);
            }
            return this._configList.getValue(msgHead.id.toString());
        }

        /** 获取普通存储的类 */
        public getClassData(key:string){
            return this._configList.getValue(key);
        }

		public containsKey(key:string|number):boolean {
            return this._configList.containsKey(key);
		}
    }
}