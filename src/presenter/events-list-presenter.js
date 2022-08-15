import TripEventsListView from '../view/board-view.js';
import AddingNewPointView from '../view/add-new-point.js';
import TripEventPointView from '../view/trip-events-item.js';
import EditingEventPointView from '../view/edit-point.js';
import {render} from '../render.js';

export default class EventsListPresenter {
  tripListComponent = new TripEventsListView();

  init = (boardContainer) => {
    this.boardContainer = boardContainer;

    render(this.tripListComponent, this.boardContainer);
    render(new EditingEventPointView(), this.tripListComponent.getElement());
    render(new AddingNewPointView(), this.tripListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new TripEventPointView(), this.tripListComponent.getElement());
    }
  };
}
