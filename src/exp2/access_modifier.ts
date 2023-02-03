class Vehicle {
    constructor(public model: string) {
      this.model = model;
    }
    private drive(): void {
      console.log("Driving");
    }
  
    public startDrivingProcess(): void {
      this.drive();
    }
    protected honk(): void {
      console.log("beep");
    }
  }

  const car = new Vehicle("Mustang");
  car.startDrivingProcess();
  console.log(car.model);