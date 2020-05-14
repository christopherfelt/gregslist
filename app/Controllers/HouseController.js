import _houseService from "../Services/HouseService.js";
import _store from "../store.js";

function _draw() {
  let template = "";
  let houses = _store.State.houses;
  houses.forEach((h) => (template += h.Template));
  document.getElementById("houses").innerHTML = template;
}

export default class HouseController {
  constructor() {
    _draw();
  }

  addHouse(event) {
    event.preventDefault();
    let formData = event.target;
    let rawHouseData = {
      title: formData.title.value,
      style: formData.style.value,
      year: formData.year.value,
      price: formData.price.value,
      description: formData.description.value,
      imageUrl: formData.imgurl.value,
    };
    formData.reset();
    _houseService.addHouse(rawHouseData);
    _draw();
  }

  buy(id) {
    _houseService.buy(id);
    _draw();
  }
}
