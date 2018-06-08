module game.classData.User {

    export interface UserData {
        info: protoTS.IPlayerBaseInfo;
        currency: protoTS.IPlayerCurrency;
        levelData: LevelData;
    }

    export interface LevelData {
        json: JsonTs.level_data;
        spiritMaxLevel: number;
        equipMaxLevel: number;
        imgArray: Array<string>;
    }

    /** 用户UID */
    export let Uid: string = "";

    export function User(): UserData {
        let info = Game.GameData.getValue(MsgHead.DseUserInfo).info;
        let currency = Game.GameData.getValue(MsgHead.DseUserInfo).currency;
        let levelData = getLevelData(info.level);
        return { info, currency, levelData };
    }

    export let cacheUser: UserData;

    export function setCacheUser(dseUserInfo_: protoTS.DseUserInfo): void {
        let cacheData = cacheUser;
        let userData = User();
        // if (cacheData) {
        //     if (cacheData.info.level < userData.info.level) {
        //         let userLevelup = Game.Module.Get(game.ui.user.UserLevelup);
        //         userLevelup.cacheUser = getCacheUser();
        //         userLevelup.Load();
        //     }
        // }

        cacheUser = {} as UserData;
        cacheUser.info = dseUserInfo_.info;
        cacheUser.currency = dseUserInfo_.currency;
    }

    export function isLevelup(): boolean {
        let bool: boolean = false;

        if (cacheUser.info.level < User().info.level) {
            bool = true;
        }

        return bool;
    }

    export function getCacheUser(): UserData {
        cacheUser.levelData = getLevelData(cacheUser.info.level);

        return cacheUser;
    }

    export function getLevelData(level_: number): LevelData {
        let levelData: LevelData = {} as LevelData;
        levelData.json = Game.ConfigData.getValue(CfgHead.level_data, level_);
        levelData.spiritMaxLevel = level_;
        levelData.equipMaxLevel = level_ * 3;

        levelData.imgArray = new Array<string>();
        if (levelData.json.desc_img != null &&  levelData.json.desc_img) {

            let imgUrlArray: Array<string> = levelData.json.desc_img.split("|");
            for (let index: number = 0; index < imgUrlArray.length; index++) {
                levelData.imgArray.push(fw.Path.getUrlVer("assets/ui/upgrade/" + imgUrlArray[index] + ".png"));
            }
        }


        return levelData;
    }


}