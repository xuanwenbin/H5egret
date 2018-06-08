module game.common{

	/**
	 * 容器控制类，用来结构化游戏的分层逻辑
	 * @author 杨啸 
	 */
    export class MainWindow extends egret.DisplayObjectContainer{

        constructor(){
			super();
			this.OnLoad();
        }

		/**
		 * ui层,包含全屏UI
		 */
		public Uilayout:egret.DisplayObjectContainer;
		/**
		 * ui层,包含全部的弹出ui内容
		 */
		public AlertUilayout:egret.DisplayObjectContainer;
		/**
		 *	 场景层，包含一些固化的界面和场景，如我们游戏，城内，城外，战斗
		 */		
		public Scenelayout:egret.DisplayObjectContainer;
		/**
		 *	遮罩层,包含遮罩 
		 */		
		public Masklayout:egret.DisplayObjectContainer;
		/**
		 *	加载图标提示层 
		 */		
		public LoadIconLayout:egret.DisplayObjectContainer;
		/**
		 *	提示层 
		 */		
		public TipLayout:egret.DisplayObjectContainer;
		/**
		 *	全屏特效 
		 */		
		public FullScreenEffectLayout:egret.DisplayObjectContainer;
		

		protected  OnLoad():void{

            //涉及到排序
			this.Scenelayout=new egret.DisplayObjectContainer();
			this.Scenelayout.name = "Scenelayout";
			this.addChild(this.Scenelayout);

			this.Uilayout = new egret.DisplayObjectContainer();
			this.Uilayout.name = "Uilayout";
			this.addChild(this.Uilayout);		
				
			this.AlertUilayout = new egret.DisplayObjectContainer();
			this.AlertUilayout.name = "AlertUilayout";
			this.addChild(this.AlertUilayout);
			
			this.Masklayout = new egret.DisplayObjectContainer();
			this.Masklayout.name = "Masklayout";
			this.addChild(this.Masklayout);
			
			this.TipLayout=new egret.DisplayObjectContainer();
			this.TipLayout.name = "TipLayout";
			this.addChild(this.TipLayout);
			
			this.FullScreenEffectLayout=new egret.DisplayObjectContainer();
			this.FullScreenEffectLayout.name = "FullScreenEffectLayout";
			this.addChild(this.FullScreenEffectLayout);
			
			this.LoadIconLayout=new egret.DisplayObjectContainer();
			this.LoadIconLayout.name = "loadIconLayout";
			this.addChild(this.LoadIconLayout);
		}

		/** 战斗场景定制的方法，关闭没用的UI */
		public closeUI(){
			if(this.contains(this.Uilayout))
                this.removeChild(this.Uilayout);
            if(this.contains(this.AlertUilayout))
                this.removeChild(this.AlertUilayout);
		}
		public refreshChild(){
            //涉及到排序
			this.addChildAt(this.Scenelayout,0);
			this.addChildAt(this.Uilayout,1);		
			this.addChildAt(this.AlertUilayout,2);
			this.addChildAt(this.Masklayout,3);
			this.addChildAt(this.TipLayout,4);
			this.addChildAt(this.FullScreenEffectLayout,5);
			this.addChildAt(this.LoadIconLayout,6);
		}
    }
}