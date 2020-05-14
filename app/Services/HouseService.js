import House from "../Models/HouseModel.js";
import _store from "../store.js";

class HouseService {
  buy(id) {
    _store.removeHouse(id);
  }
  addHouse(rawHouseData) {
    let house = new House(rawHouseData);
    _store.addHouse(house);
  }
}

const HOUSE_SERVICE = new HouseService();
export default HOUSE_SERVICE;
