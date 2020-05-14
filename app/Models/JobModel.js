import { generateId } from "../Utils.js";

export default class Job {
  constructor(data) {
    this.id = generateId();
    this.title = data.title;
    this.company = data.company;
    this.wage = data.wage;
  }

  get Template() {
    return /*html*/ `
        <div class="col-3 mt-2">
            <div class="card">
                <img class="card-img-top" src="https://images.menswearhouse.com/is/image/TMW/MW40_31EP_06_EGARA_ORANGE_BURGUNDY_SET?$40MainPDP$" alt="#">
                <div class="card-body">
                    <h4 class="card-title">${this.title}</h4>
                    <p class="card-text">${this.company}</p>
                    <p class="card-text">${this.wage}</p>
                    <button class="btn btn-outline-success" onclick="app.jobController.hireMe('${this.id}')">Hire Me!</button>
                </div>
            </div>
        </div>`;
  }
}
