import TripEventsListView from '../view/board-view.js';
import AddingNewPointView from '../view/add-new-point.js';
import TripEventPointView from '../view/trip-events-item.js';
import EditingEventPointView from '../view/edit-point.js';
import {renderBeforeEnd} from '../render.js';

export default class EventsListPresenter {
  tripListComponent = new TripEventsListView();

  init = (boardContainer) => {
    this.boardContainer = boardContainer;

    renderBeforeEnd(this.tripListComponent, this.boardContainer);
    renderBeforeEnd(new EditingEventPointView(), this.tripListComponent.getElement());
    renderBeforeEnd(new AddingNewPointView(), this.tripListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      renderBeforeEnd(new TripEventPointView(), this.tripListComponent.getElement());
    }
  };
}
