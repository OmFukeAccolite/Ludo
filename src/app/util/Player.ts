
export default class Player {
    x:number;
    y:number;
    final:Array<number>;
    head:any;
    count:number = 0;


    
    constructor(x:number,y:number,final:Array<number>) {
        this.x = x;
        this.y = y;
        this.final = final;
        this.head = null;

    }
}