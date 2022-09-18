import {generateTripPoint} from '../mock/task.js';
const numberOfPoints = 10;
export default class TripPointsModel {
  #tripPoints = Array.from({length: numberOfPoints}, generateTripPoint);

  get tripPoints () {
    return this.#tripPoints;
  }
}
