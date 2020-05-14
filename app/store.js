import Car from "./Models/Car.js";
import House from "./Models/HouseModel.js";
import Job from "./Models/JobModel.js";

let _state = {
  /** @type {Car[]} */
  cars: [
    new Car({
      title: "Jinkies",
      make: "Mystery",
      model: "Machine",
      price: "10000",
      description: "smells like a large dog in here",
      imgUrl: "https://i.ytimg.com/vi/ArKckzLPM0M/maxresdefault.jpg",
    }),
    new Car({
      title: "How is this for sale",
      make: "Bat",
      model: "mobile",
      price: "30000",
      description: "look at all these cool buttons!",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/81Lc2ZJXj4L._AC_SX425_.jpg",
    }),
  ],
  houses: [
    new House({
      title: "Left",
      style: "dilapidated",
      year: "1997",
      price: 50000,
      description: "Smells of saw dust",
      imageUrl:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    }),
    new House({
      title: "middle",
      style: "dilapidated",
      year: "1997",
      price: 50000,
      description: "Smells of saw dust",
      imageUrl:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    }),
    new House({
      title: "right",
      style: "dilapidated",
      year: "1997",
      price: 50000,
      description: "Smells of saw dust",
      imageUrl:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    }),
  ],
  jobs: [
    new Job({
      title: "Software Developer",
      company: "Some Company",
      wage: 60,
    }),
    new Job({
      title: "Web Developer",
      company: "Some Company",
      wage: 75,
    }),
    new Job({
      title: "Web Dude",
      company: "Web Place",
      wage: 1000,
    }),
  ],
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
  addCar(car) {
    _state.cars.push(car);
  }
  removeCar(id) {
    // NOTE find the index of the car with the provided id
    let index = _state.cars.findIndex((c) => c.id == id);
    // NOTE check to make sure it was found
    if (index == -1) {
      console.error("invalid id");
      return;
    }
    _state.cars.splice(index, 1);
  }
  addHouse(house) {
    _state.houses.push(house);
  }
  removeHouse(id) {
    let index = _state.houses.findIndex((c) => c.id == id);
    if (index == -1) {
      console.error("invalid id");
      return;
    }
    _state.houses.splice(index, 1);
  }

  addJob(job) {
    _state.jobs.push(job);
  }

  removeJob(id) {
    let index = _state.jobs.findIndex((j) => j.id == id);
    if (index == -1) {
      console.log("invalid id");
      return;
    }
    _state.jobs.splice(index, 1);
  }
}

const STORE = new Store();
export default STORE;
