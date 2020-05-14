import CarsController from "./Controllers/CarsController.js";
import HouseController from "./Controllers/HouseController.js";
import JobController from "./Controllers/JobController.js";

class App {
  constructor() {
    this.carsController = new CarsController();
    this.houseController = new HouseController();
    this.jobController = new JobController();
  }
}

window["app"] = new App();
