//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {


    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig(fw.Path.getUrlVer("default.res.json"),fw.Path.getRoot());
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme(fw.Path.getUrlVer("default.thm.json"), this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    /**
     * 创建场景界面
     * Create scene interface
     */
    async createGameScene() {
     
        fw.Path._fileList = RES.getRes("others_json");
        Game.language = RES.getRes("language_json");
        Game.Config.IsDebug = Game.Config.GetQueryString("IsDebug");
        Game.Load(this.stage);
        await Game.ConfigData.init();
        game.common.GameMessage.Init();

        //需要初始化动态加载到资源
        // let resList = [
        //     fw.Path.getUrlVer("common_message.exml"),
        //     fw.Path.defaultSkinUrl("ItemRendererSkin.exml"),
        //     fw.Path.getUrlVer("ui_main.exml"), //主界面
        //     fw.Path.getUrlVer("common_float.exml"), //公用飘字
        //     fw.Path.getUrlVer("common_item.exml"), //道具标准皮肤
        //     fw.Path.getUrlVer("common_item_tips.exml"), //道具 Tips 标准皮肤
        //     fw.Path.getUrlVer("ui_spirits_skill_tips.exml"), //道具 Tips 标准皮肤     
        // ];
        // resList = resList.concat(fw.display.DragonBones.getLoadResGroup("loading"));
        // resList = resList.concat(fw.display.DragonBones.getLoadResGroup("uiguochang_fight"));
        // Game.Loader.load(resList,(data)=>{
        //     this.login();
        // },this);
    }

    private login(){
        // this.parent.removeChild(this);
        // let loginUI = Game.Module.GetModuleOfClass(game.ui.Login);
        // loginUI.Load();//初始化完毕后调用
    }
   
}
