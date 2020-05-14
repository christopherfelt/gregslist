import { generateId } from "../Utils.js";

export default class House {
  constructor(data) {
    this.id = generateId();
    this.title = data.title;
    this.style = data.style;
    this.year = data.year;
    this.price = data.price;
    this.description = data.description;
    this.imageUrl = data.imageUrl;
  }

  get Template() {
    return /*html*/ `
        <div class="col-3 mt-2">
            <div class="card">
                <img class="card-img-top" src="${this.imageUrl}" alt="">
                <div class="card-body">
                    <h4 class="card-title">${this.title}</h4>
                    <p class="card-text">${this.style} - ${this.year} - $${this.price}</p>
                    <p class="card-text">${this.description}</p>
                    <button class="btn btn-outline-success" onclick="app.houseController.buy('${this.id}')">Buy!</button>
                </div>
            </div>
        </div>`;
  }
}
