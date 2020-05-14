import Job from "../Models/JobModel.js";
import STORE from "../store.js";

class JobService {
  addJob(rawJobData) {
    let job = new Job(rawJobData);
    STORE.addJob(job);
  }

  removeJob(id) {
    STORE.removeJob(id);
  }
}

const JOB_SERVICE = new JobService();
export default JOB_SERVICE;
