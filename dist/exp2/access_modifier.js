"use strict";
class Vehicle {
    constructor(model) {
        this.model = model;
        this.model = model;
    }
    drive() {
        console.log("Driving");
    }
    startDrivingProcess() {
        this.drive();
    }
    honk() {
        console.log("beep");
    }
}
const car = new Vehicle("Mustang");
car.startDrivingProcess();
console.log(car.model);
