import TripEventsListView from '../view/board-view.js';
import AddingNewPointView from '../view/add-new-point.js';
import TripEventPointView from '../view/trip-events-item.js';
import EditingEventPointView from '../view/edit-point.js';
import {render} from '../render.js';

export default class EventsListPresenter {
  tripListComponent = new TripEventsListView();

  init = (boardContainer, tasksModel) => {
    this.boardContainer = boardContainer;
    this.tasksModel = tasksModel;
    this.boardTasks = [...this.tasksModel.getTasks()];

    render(this.tripListComponent, this.boardContainer);
    render(new EditingEventPointView(), this.tripListComponent.getElement());
    render(new AddingNewPointView(), this.tripListComponent.getElement());

    for (let i = 0; i < this.boardTasks.length; i++) {
      render(new TripEventPointView(this.boardTasks[i]),
        this.tripListComponent.getElement());
    }
  };
}
