import STORE from "../store.js";
import JOB_SERVICE from "../Services/JobService.js";

function _draw() {
  let jobs = STORE.State.jobs;
  let template = "";
  jobs.forEach((j) => (template += j.Template));
  document.getElementById("jobs").innerHTML = template;
}

export default class JobController {
  constructor() {
    _draw();
  }

  addJob(event) {
    event.preventDefault();
    let formData = event.target;
    let rawJobData = {
      title: formData.title.value,
      company: formData.company.value,
      wage: formData.wage.value,
    };
    console.log(rawJobData);
    formData.reset();
    JOB_SERVICE.addJob(rawJobData);
    _draw();
  }

  hireMe(id) {
    console.log("made it to controller");
    JOB_SERVICE.removeJob(id);
    _draw();
  }
}
