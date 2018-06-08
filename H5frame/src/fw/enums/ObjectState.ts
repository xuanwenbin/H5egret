module fw.enums
{
	/**
	 *	全局游戏的一些加载进度 
	 * @author 杨啸
	 * 
	 */	
	export enum ObjectState
	{
		/**
		 *	 初始化状态，每个对象或模块初始化建立时的缺省状态
		 */		
		Initial=0,
		/**
		 * 初始化数据加载中
		 */		
		Loading=1, 
		/**
		 *	对象就绪（一般应保证对象处于本状态） 
		 */		
		Ready=2,
		/**
		 * 锁定状态，一般只对可视化元素有效，本状态下对象应自行屏蔽某些调用请求
		 */		
		Locked=3,
		/**
		 *	 失效状态，对象已不可用
		 */		
		Disabled=4
	}
}