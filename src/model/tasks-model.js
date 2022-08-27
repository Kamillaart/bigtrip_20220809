import {generateTripPoint} from '../mock/task.js';

export default class TripPointsModel {
  tasks = Array.from({length: 10}, generateTripPoint);

  getTasks = () => this.tasks;
}
