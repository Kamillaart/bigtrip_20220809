import TripListView from '../view/trip-event-view';
import AddNewPointView from '../view/add-new-point.js';
import TripEventsView from '../view/trip-events-item.js';
import EditPointView from '../view/edit-point.js';
import {render} from '../render.js';

export default class EventsListPresenter {
  tripListComponent = new TripListView();

  init = (boardContainer, tasksModel) => {
    this.boardContainer = boardContainer;
    this.tasksModel = tasksModel;
    this.boardTasks = [...this.tasksModel.getTasks()];

    render(this.tripListComponent, this.boardContainer);
    render(new EditPointView(this.boardTasks[0]), this.tripListComponent.getElement());
    render(new AddNewPointView(), this.tripListComponent.getElement());

    for (let i = 0; i < this.boardTasks.length; i++) {
      render(new TripEventsView(this.boardTasks[i]),
        this.tripListComponent.getElement());
    }
  };
}
