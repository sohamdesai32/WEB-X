class Car {
    constructor(public color:string) {
        this.color;
    }
   
    public Speed(speed:number) {
        return ("The speed is:"+speed);
    }
}

class Mercedes extends Car{
    Price :number
    constructor (color:string,price:number){
        super(color);
        this.Price =price;
    }

    display():void{
        console.log("The color is:",this.color);
        console.log("The price is:",this.Price);
    }

}

let obj = new Mercedes("black", 4500000)
console.log(obj.Speed(45)) 
obj.display()