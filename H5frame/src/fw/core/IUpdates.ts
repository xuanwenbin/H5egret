module fw.core{
    /**
     * 实现一个统一的更新机制，暂时还没想好怎么实现
     * @author yangxiao
     */
    export interface IUpdates{
        OnUpdate(elapsedSeconds:number);
    }
}