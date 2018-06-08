module fw.core {

    /**
     * 基础接口
	 * 描述模块的统一加载方式和状态（是否可用）
	 * 系统加载一个模块前，总会先设置必要参数，然后调用Load()进行初始化工作
	 * 系统卸载一个模块前，总会调用Release进行清场作业
	 * 实际使用中，真正行使初始化和释放资源工作的往往是OnLoad和OnRelease方法
	 * @author 杨啸
     */
    export interface ILoad{

    /**
     * 模块加载方法，一般顶级基类实现。
     */  
     Load():void;
    /**
     * 模块卸载方法，一般顶级基类实现。
     */  
     Release():void;
     /**
      * 模块状态控制，一般顶级基类实现。
      */
     State:number;

    }
}