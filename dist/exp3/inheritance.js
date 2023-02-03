"use strict";
class Car {
    constructor(color) {
        this.color = color;
        this.color;
    }
    Speed(speed) {
        return ("The speed is:" + speed);
    }
}
class Mercedes extends Car {
    constructor(color, price) {
        super(color);
        this.Price = price;
    }
    display() {
        console.log("The color is:", this.color);
        console.log("The price is:", this.Price);
    }
}
let obj = new Mercedes("black", 4500000);
console.log(obj.Speed(45));
obj.display();
