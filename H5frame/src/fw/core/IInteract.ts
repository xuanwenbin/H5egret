module fw.core {

    /**
     * 基础接口 - 用于模块间交互的接口
	 * @author 杨啸
     */
    export interface IInteract{

    /**
     * 获取数据（强调静态的数据，如“外观”，“颜色”，“大小”等）
     */  
     GetValue(key:any):any;
    /**
     * 设置数据（强调静态的数据，如“外观”，“颜色”，“大小”等）
     */  
     SetValue(key:any,value:any):any;

    }
}