/**
 * 常用的公告方法
 * @author 杨啸 
 */
module game.common.GlobalSystem {

    /**
     * 获取技能名字
     * @param skillName
     * @return 返回技能名字Node
     */
    export function getSkillNameSprite(skillName: string): egret.DisplayObjectContainer {
        let names = skillName.split("|");
        let display = new egret.DisplayObjectContainer();
        let char: egret.Bitmap;
        for (let i = 1; i <= names.length; ++i) {
            char = new egret.Bitmap(RES.getRes(names[i] + "_png"));
            display.addChild(char);
            char.x = -names.length * char.width / 2 + char.width / 2 + (i - 1) * char.width;
            char.y = 0;
        }
        return display;
    }

    /**
     *  获得单暴击数字图片
     *  @param 数字（0-9），-1表示“-”号
     */
    export function getNumberCriBitmap(number) {

        let bitmap = new egret.Bitmap();
        if (number !== -1) {
            bitmap.texture = RES.getRes("battle_crit_" + number + "_png");
        } else {
            bitmap.texture = RES.getRes("battle_crit_minus_png");
        }

        return bitmap
    }

    /**
     *  获得单数字图片
     *  @param 数字（0-9），-1表示“-”号
     */
    export function getNumberBitmap(number: number) {

        let bitmap = new egret.Bitmap();
        if (number !== -1) {
            bitmap.texture = RES.getRes("battle_damage_" + number + "_png");
        } else {
            bitmap.texture = RES.getRes("battle_damage_minus_png");
        }

        return bitmap
    }

    /**
     * 获取完整的数字容器
     */
    export function getNumberSprite(damage: string, isCri: boolean) {
        let str = damage.toString();
        let count = str.length;
        let container = new egret.DisplayObjectContainer();
        let bitmapNum: egret.Bitmap;
        if (isCri) {
            bitmapNum = common.GlobalSystem.getNumberCriBitmap(-1);
        } else {
            bitmapNum = common.GlobalSystem.getNumberBitmap(-1);
        }
        let spriteWidth = bitmapNum.width;
        let spriteHeight = bitmapNum.height;
        let startX = -count * spriteWidth * 0.5;
        let num = null;
        bitmapNum.x = startX - spriteWidth;
        bitmapNum.y = -spriteHeight >> 1;
        container.addChild(bitmapNum);
        for (let i = 0; i < count; i++) {
            num = str[i];
            if (isCri) {
                bitmapNum = common.GlobalSystem.getNumberCriBitmap(num);
            } else {
                bitmapNum = common.GlobalSystem.getNumberBitmap(num);
            }
            bitmapNum.x = startX + i * spriteWidth;
            bitmapNum.y = -spriteHeight >> 1;
            container.addChild(bitmapNum);
        }

        // var shape:egret.Shape = new egret.Shape();
        
        // shape.graphics.beginFill(0xff0000);
        // shape.graphics.drawCircle(0, 0, 2);
        // shape.graphics.endFill();
        // container.addChild(shape);

        return container;
    }

    /** 获取粒子，资源与配置必须已经存在RES中，不需要写_png与_plist,只需写文件名 */
    export function getParticle(textureResName: string, configResName?: string) {

        let _config = configResName;
        if (_config == null) {
            _config = textureResName;
        }
        let texture = RES.getRes(textureResName + "_png");
        let config = RES.getRes(_config + "_plist");
        if (texture == null && config == null) {
            console.log("error particle , texture config is null!");
            return null;
        }
        return new particle.GravityParticleSystem(RES.getRes(textureResName + "_png"), RES.getRes(_config + "_plist"));
    }

    /** 钻石消费弹出提示，一般进行钻石消费前，请使用本接口 */
    export function rechargeCheckPanel(cash: number, thisObj: any, content: string, title: string = null, yesCall: Function = null, noCall: Function = null, failCall: Function = null) {
        // let confirmPanel = Game.Module.GetModuleOfClass(game.component.ui.alert.ConfirmUI);
        // let user = game.classData.User.getUserData();
        // if (user.data.cash < cash) {
        //     let content = fw.utils.Tools.stringFormat(Game.language.common.conifrm_recharge,cash-user.data.cash);
        //     confirmPanel.setContent(this, content, title, () => {
        //         //打开充值界面
        //         //let panel = Game.Module.GetModuleOfClass(game.component.ui.recharge.RechargeUI);
        //         //panel.Load();	
        //         if(failCall) failCall.apply(thisObj);
        //     });
        // } else {
        //     confirmPanel.setContent(this, content, title, yesCall, noCall);
        // }
        // confirmPanel.Load();
    }

    /** 检测输入内容是否合法,非法返回false */
    export function contentCheck(str:string){
    //    str = fw.utils.Tools.trims(str).toLocaleLowerCase();
    //    str = fw.utils.Tools.stripscript(str);
    //    let checkArray = Game.ConfigData.getTableArray(CfgHead.CheckNameData);
    //    for(let i =0;i<checkArray.length;i++){
    //        if(str.indexOf(checkArray[i].Word)!==-1){
    //            game.component.ui.alert.BulletinPanel.Ins.addIdByText(200020);
    //            return false;
    //        }
    //    }
       return true;
    }

    /** 检测输入字符串长度是否合法,非法返回false */
    export function stringLenCheck(str:string,len:number){
    //    if(str.length > len){

    //         let str = fw.utils.Tools.stringFormat(Game.language.common.stringLen_error, len);
    //         game.component.ui.alert.BulletinPanel.Ins.addErrorText(str);
    //         return false;
    //     }
       return true;
    }

}