/**
 * 游戏中的音效与音乐的枚举
 * @author 杨啸 
 */
module game.common.GameSound{

    export let MusicList = {
        "MUSIC_MAIN_UI":"music-01bayofhonor.mp3", //主基地音乐
        "MUSIC_BATTLE_NORMAL_UI":"music-03battleship.mp3",//普通战斗音乐
        "MUSIC_CHOOSE_CHECKPOINT_UI":"music-02opensea.mp3",//选择关卡界面音乐
        "MUSIC_BOOS_BATTLE_UI":"music-04engage.mp3",//BOSS战音乐
        "MUSIC_ARENA_UI":"music-05behindenemylines.mp3",//竞技场音乐
        "MUSIC_CAMPBATTLE":"music-06CampBattle.mp3",//阵营战音乐
    }

    export let SoundList = {
        "SOUND_CLOSE_BTN":"UI_guanbianniu.mp3", //关闭按钮
        "SOUND_OPEN_BOX":"UI_kaiqibaoxiang.mp3", //开启宝箱
        "SOUND_PARTS_FJ":"UI_peijianfenjie.mp3", //配件分解
        "SOUND_SHIPS_GZ":"UI_jianchuangaizao.mp3", //舰船改造
        "SOUND_PARTS_SJ":"UI_peijianshengji.mp3", //配件升级
        "SOUND_BTN":"UI_dianjianniu.mp3", //点击按钮
        "SOUND_BATTLE_BTN":"UI_dianjizhandou.mp3",//战斗开始按钮
        "SOUND_HAV_PAPER_ONE":"UI_choutuzhi.mp3",//单张抽图纸
        "SOUND_HAV_PAPER_TEN":"UI_shilianchou.mp3",//十连抽
        "SOUND_BATTLE_CHENMO":"battle_chenmo.mp3",//舰船沉没
        "SOUND_BATTLE_MISS":"battle_weimingzhong.mp3",//未击中
        "SOUND_BATTLE_MINGZHONG":"battle_mingzhong.mp3",//命中
        "SOUND_BATTLE_NORMAL_YULEI":"battle_fasheyulei.mp3",//普通攻击鱼雷
        "SOUND_BATTLE_NORMAL_HUOPAO":"battle_huopaokaihuo.mp3",//普通攻击火炮
        "SOUND_BATTLE_NORMAL_FEIJI":"battle_feijigongji.mp3",//普通攻击飞机
        "SOUND_BATTLE_WENZI":"skill_wenzitexiao.mp3",//文字特效
        "SOUND_BATTLE_HUANJING":"battle_huanjing_putong.mp3",//战场环境音
        "SOUND_BATTLE_DALEI_1":"battle_huanjing_lei_1.mp3",//打雷环境音1
        "SOUND_BATTLE_DALEI_2":"battle_huanjing_lei_2.mp3",//打雷环境音2
        "SOUND_BATTLE_DALEI_3":"battle_huanjing_lei_3.mp3",//打雷环境音3

        "SOUND_BATTLE_BAOFENG":"battle_huanjing_baofengyu.mp3",//暴风雨战场环境音
        "SOUND_BATTLE_LVL_UP":"UI_wanjiashengji.mp3",//玩家升级
        "SOUND_BATTLE_WIN":"battle_result_win.mp3",//胜利
        "SOUND_BATTLE_LOSE":"battle_result_lose.mp3",//失败
        "SOUND_BATTLE_HAIDI":"skill_haidihuanjingyin.mp3",//海底环境
        "SOUND_BATTLE_YULEI_MZ":"battle_yuleimingzhong.mp3",//鱼雷命中
        "SOUND_BATTLE_FJQF":"battle_feijiqifei.mp3",//飞机普通攻击起飞音效
        "SOUND_SHIPS_SC":"UI_jianchuanshengchan.mp3",//舰船生产，升级
        "SOUND_SHIPS_TY":"UI_jianchuantuiyi.mp3",//舰船退役

        "SOUND_GUAKAJIESUO":"UI_xinguanqiajiesuo.mp3",//关卡解锁音效
        "SOUND_GET_OIL":"UI_getOil.mp3",//领油音效
        "SOUND_ZHOUN_LIPAO":"lipaoyinpin.mp3" //周年礼炮
    }

}