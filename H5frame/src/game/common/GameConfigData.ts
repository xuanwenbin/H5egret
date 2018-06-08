module game.common{

    /**
     * 获取游戏的各种配置表数据。
     * 获取技能数据示例：let skill:Json2Typescript.skillData = Game.ConfigData.getValue("skillData",43);
     * @author 杨啸 
     */
    export class GameConfigData{

        constructor(){
            this._configList = new fw.data.Dictionary();
        }
        private _configList:fw.data.Dictionary<any>;

        async init(){
            let JSZip = window["JSZip"];
            let downzip = await JSZip.loadAsync(RES.getRes("config_cfg")).then((zip)=>{
                return  zip;
            });
            for(let key in downzip.files){
                await downzip.file(key).async("string").then(function (text) {
                    let configName = key.replace(".json","");
                    Game.ConfigData.addConfig(configName,JSON.parse(text));
                });   
            }
        }
        public addConfig(key,value){
            this._configList.push(key,value);
        }

        /** 判断主键的值是否存在 */
        public contains<A,B>(cfgHead:{name:A,clz:B},id:string|number){
            let item = this._configList.getValue(cfgHead.name.toString());
            if(item && item[id]){
                return true;
            }
            return false;
        }

        /** 根据传入的ID，获取数据表的具体单条数据 */
        public getValue<A,B>(cfgHead:{name:A,clz:B},id:string|number):B{
            let item = this._configList.getValue(cfgHead.name.toString());
            return item[id];       
        }

        /** 获取整个数据表，对象 */
        public getTable(tableName:{name,clz}){
            let item = this._configList.getValue(tableName.name);
            return item;
        }

        /**获取整个数据表，数组 */
        public getTableArray<A,B>(tableName:{name:A,clz:B}):B[]{
            let item = this._configList.getValue(tableName.name.toString());
            let array = [];
            for(let k in item){
                array.push(item[k]);
            }
            return array;
        }

        /** 查找特定字段的值，只返回第一条数据 */
        public getValueByKey<A,B>(tableName:{name:A,clz:B},key:string,value:string|number):B{
            let table = this._configList.getValue(tableName.name.toString());
            for(let item in table){
                if(table[item] && table[item][key] == value){
                    return table[item];
                }
            }
            return null;
        }

        /** 查找特定字段的值，返回查找的相关数据 多条，数组 */
        public getValueByKeys<A,B>(tableName:{name:A,clz:B},key:string,value:string|number):B[]{
            let table = this._configList.getValue(tableName.name.toString());
            let list:B[] = [];
            for(let item in table){
                if(table[item] && table[item][key] == value){
                    list.push(table[item]);
                }
            }
            return list;
        }

    }
}