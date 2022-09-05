import {generateTripPoint} from '../mock/task.js';
const numberOfPoints = 10;
export default class TripPointsModel {
  #tasks = Array.from({length: numberOfPoints}, generateTripPoint);

  get tasks () {
    return this.#tasks;
  }
}
