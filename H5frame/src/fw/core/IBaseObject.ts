module fw.core {

    /**
     * 由于TypeScript中类只能继承一个接口，但是接口可以继承多个，所以这个类诞生了，主要继承 ILoad,IInteract
	 * @author 杨啸
     */
    export interface IBaseObject extends ILoad,IInteract{

    }
}