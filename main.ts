class actemp {
    private _temp:number
    constructor(t:number){
        this._temp = t
    }
    get gettemp(){
return this._temp
    }
    set settemp(newtemp:number){
        if(newtemp < 25){
            console.log("bill ayga");
            
        }
        console.log(newtemp);
        
    }
}
const temp = new actemp(25)
console.log(temp);
console.log(temp.gettemp);
temp.settemp = 16

//////polymorphisam new topic method overriding
//poly =many
//morphisam = forms
class animal {
     public name:string
     constructor(n:string){
        this.name = n
     }
     makesound(){
        console.log("animal making sound");
        
     }
}
class Lion extends animal {
    isking:boolean
constructor(name:string ,king:boolean){
    super(name)
    this.isking = king
}
makesound(){
console.log("lion is roaring");
}
    }
const lion = new Lion("sheruu" , true)
lion.makesound()
//////abstraction 
 abstract class laptop{
    ram:string
    screen:number
    constructor(ram:string , screen:number){
        this.ram = ram
        this.screen = screen
    }
    abstract ssd():void
        
    }

class lenovo extends laptop {
    constructor(ram:string , screen:number){
        super(ram,screen)
    }
    ssd():void {
        console.log("1tb");
        
    }
}
const mylenovo = new lenovo("16gb" , 24)
console.log(mylenovo);















