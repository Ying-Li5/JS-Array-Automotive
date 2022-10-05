//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    checkService() {
        if(this.mileage > 30000) {
            this.scheduleService = true
            console.log("time for maintenance")
            return this.scheduleService;
        }
    }

    start() {
        if (this.fuel > 0 ) {
            console.log("engine has start.");
            return this.started = true
        } else {
            console.log("no fuel");
            return this.started = false;
        }
    }

    loadPassenger(num) {
        if (this.passengers < this.maxPassengers) {
            if ((num + this.passengers) <= this.maxPassengers) {
                this.passengers = num;
                return this.passengers;
            } else {
                console.log(this.model + " " + this.make + " not have enough space to take all passengers.");
            } 
        } else {
                 console.log(this.model + " " + this.make + " is full");
            } 
        }
    }

let myCar = newCar('mercury', 'red_sedan', '2002', 'white', 50000)

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()

console.log(myCar)