/**
 * 简单的音频管理，如果是移动端，需要在点击中触发，并且触发时，音频必须是已经加载
 * @author yangxiao
 */
module fw.audio {

    export class AudioManager {
        constructor() { }
        
        private static lastUrl = "";
        private static _loadDic= new fw.data.Dictionary();
        private static _loadTime:number = 500;//音效延迟时间，高于这个时间不播放
        private static soundChannel:egret.SoundChannel;

        public static playSound(url:string){
            if(!AudioManager.getEffectStorage()){
                return;
            }
            AudioManager._loadAndPlay(url,egret.Sound.EFFECT);
        }

        public static playMusic(url:string){

            AudioManager.lastUrl = Path.getUrlVer("audio/"+url);
            if(!AudioManager.getMusicStorage()){
                return;
            }
            AudioManager._loadAndPlay(url,egret.Sound.MUSIC);
        }

        public static stopMusic(){

            for(let i=0;i<AudioManager._loadDic.length;i++){
                let obj = AudioManager._loadDic.getIndexValue(i);
                if(obj[2]){
                    obj[2].stop();
                }
            }
        }

        public static _loadAndPlay(url:string,type:string){
            // if(egret.Capabilities.isMobile){
            //     return;
            // }
            if(url.indexOf(Path.getRoot()  + "audio/")==-1){
                url = Path.getUrlVer("audio/"+url);
            }  
            if(!AudioManager._loadDic.containsKey(url)){
                AudioManager._loadDic.push(url,[]);
                let sound = new egret.Sound();
                sound.type = type;
                AudioManager.startLoad(sound,url);
                return;
            }
            let item = AudioManager._loadDic.getValue(url);
            if(item[1]){
                AudioManager._play(url);
                return;
            }
        }


        private static startLoad(sound:egret.Sound,url:string){
            sound.addEventListener(egret.Event.COMPLETE, AudioManager.onLoadComplete, AudioManager);
            sound.load(url);
            AudioManager._loadDic.push(url,[egret.getTimer()]);
        }

        private static onLoadComplete(event:egret.Event):void {
            //获取加载到的 Sound 对象
            let sound:egret.Sound = <egret.Sound>event.target;
            sound.removeEventListener(egret.Event.COMPLETE, AudioManager.onLoadComplete, AudioManager);
            
            let curloadTimer = egret.getTimer() - AudioManager._loadDic.getValue(sound["url"])[0];
            AudioManager._loadDic.push(sound["url"],[egret.getTimer(),sound]);
            if(curloadTimer<=AudioManager._loadTime){
                AudioManager._play(sound["url"]);
            }
        }

        private static _play(url:string){
            let item = AudioManager._loadDic.getValue(url);
            let sound:egret.Sound = item[1];
            if(sound.type == egret.Sound.EFFECT){
                let soundChannel = sound.play(0,1);
                soundChannel.volume = AudioManager.getVolumeStorage();
            }else{
                item[2] = sound.play(0,0);
                item[2].volume = AudioManager.getVolumeStorage();
            }
            
        }
        public static setMusicStorage(value:boolean){
            egret.localStorage.setItem("AudioManager.music",String(value));
            if(value){         
                AudioManager._loadAndPlay(AudioManager.lastUrl,egret.Sound.MUSIC);
            }else{
                AudioManager.stopMusic();
            }
        }

        public static getMusicStorage(){
            let s = egret.localStorage.getItem("AudioManager.music");
            if(s){
                return s=="true"?true:false;
            }
            return true;
        }
        public static setEffectStorage(value:boolean){
            egret.localStorage.setItem("AudioManager.effect",String(value));
        }

        public static getEffectStorage(){
            let s = egret.localStorage.getItem("AudioManager.effect");
            if(s){
                return s=="true"?true:false;
            }
            return true;
        }

        public static setVolumeStorage(value:number){
            egret.localStorage.setItem("AudioManager.volume",String(value));
            let item = AudioManager._loadDic.getValue(AudioManager.lastUrl);
            if(item && item[2]){
                try{
                    (item[2] as egret.SoundChannel).volume = value;
                }catch(e){

                }
                
            }
        }

        /** 获取当前音量 */
        public static getVolumeStorage(){
            let s = egret.localStorage.getItem("AudioManager.volume");
            if(s){
                return parseFloat(s);
            }
            return 0.5;
        }

    }
    

}