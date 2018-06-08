module fw.data {

    /**
     * 基础接口 - 用于模块间交互的接口
	 * @author 杨啸
     */
    export class List{

        constructor() {
        } 

		private name="";
		/**列表对象名称*/
		public get Name():string
		{
			return this.name;
		}
		public set Name(value:string){
			this.name = value;
		}
		
		private tag:any=null;
		/**列表额外信息区*/
		public get Tag():any
		{
			return this.tag;
		}
		public set Tag(value:any){
			this.tag = value;
		}
		
		private isNotify:boolean=false;
		/**增删改操作后是否产生通知事件（导致效率下降） 暂时不支持*/
		public get IsNotify():boolean
		{
			return this.isNotify;
		}
		public set IsNotify(value:boolean){
			this.isNotify = value;
		}

		/**核心数据*/
		private arrData:Array<any>=new Array();
		/**判断对象是否存在，存在返回true*/
		public Contains(item:any):boolean
		{
			var index=this.arrData.indexOf(item);
			
			if(index==-1)return false;
			else return true;
		}
		
		/** 使用 strict equality (===) 运算符搜索数组中的项，并返回项的索引位置。不存在返回-1*/
		public IndexOf(item:any){
			return this.arrData.indexOf(item);
		}
		
		/**  当前列表的个数*/
		public get Count():number
		{
			return this.arrData.length;
		}
		
		/** 产生列表副本 */
		public clone():List
		{
			var cloneList:List = new List();
			cloneList.arrData = this.arrData.concat();
			cloneList.name = this.name;
			cloneList.IsNotify = this.isNotify;
			cloneList.tag = this.tag;
			return cloneList;
		}

		/** 在队列最后添加一个对象 */
		public Add(item:any):void
		{
			this.arrData.push(item);	
		}
		
		/** 给队列添加元素以及从数组中删除元素。此方法会修改数组但不制作副本。  
		 * <br>index指明了想插入的位置，0表示插入到头，>=arr.Length表示插入到尾*/
		public  Insert(item:Object,index:number):void
		{
			this.arrData.splice(index,0,item);		
		}
		
		/** 移除对象，以确保不再存在为目的。如果本来就不存在同样返回true	 */
		public Remove(item:any):boolean
		{
			var index=this.arrData.indexOf(item);
			if(index==-1)return false;
			else 
			{
				this.arrData.splice(index,1);
				return true;
			}
		}
		/** 移除特定对象，以确保不再存在为目的。如果本来就不存在同样返回true	 */
		public RemoveAt(index:number):boolean
		{
			if(index>=this.arrData.length)
			{
				return false;
			}
			else
			{
				if(index==0)
				{
					this.arrData.shift();
				}
				else
				{
					this.arrData.splice(index,1);
				}
				return true;
			}
		}
		
		/** 全部清空  据传言.length=0的效率是最高的 */
		public Clear():void
		{
			this.arrData.length=0;
		}
		
		/** 返回枚举或叫对象列表 */		
		public get Enumerator():any[]
		{
			return this.arrData;
		}
		/** 根据特定索引，返回对象 */	
		public ItemAt(index:number):any
		{
			return this.arrData[index];
		}
    }
}