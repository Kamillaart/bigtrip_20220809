import TripListView from '../view/trip-event-view';
import TripEventsView from '../view/trip-events-item.js';
import EditPointView from '../view/edit-point.js';
import NoEventPointView from '../view/trip-events-message-view.js';
import {render} from '../render.js';

const isPressEscape = (evt) => evt.key === 'Escape' || evt.key === 'Esc';
export default class EventsListPresenter {
  #tripListComponent = new TripListView();

  #tripListContainer = null;
  #eventPointsModel = null;

  #eventPointsList = [];

  init = (tripListContainer, eventPointsModel) => {
    this.#tripListContainer = tripListContainer;
    this.#eventPointsModel = eventPointsModel;

    this.#eventPointsList = [...this.#eventPointsModel.tripPoints];
    this.#renderEventPointList();

    render(this.#tripListComponent, this.#tripListContainer);
    this.#eventPointsList.forEach((event) => {
      this.#renderEventPoints(event);
    });
  };

  #renderEventPoints = (eventPoints) => {
    const formEditComponent = new EditPointView(eventPoints);
    const eventPointComponent = new TripEventsView(eventPoints);

    const replaceEventPointsListToEditForm = () => this.#tripListComponent.element
      .replaceChild(formEditComponent.element, eventPointComponent.element);

    const replaceEditFormToEventPointsList = () => this.#tripListComponent.element
      .replaceChild(eventPointComponent.element, formEditComponent.element);

    const onEscKeyDown = (evt) => {
      if (isPressEscape(evt)) {
        evt.preventDefault();
        replaceEditFormToEventPointsList();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    const onOpenFormEdit = (evt) => {
      evt.preventDefault();
      replaceEventPointsListToEditForm();
      document.addEventListener('keydown', onEscKeyDown);
    };

    const onCloseFormEdit = (evt) => {
      evt.preventDefault();
      replaceEditFormToEventPointsList();
      document.addEventListener('keydown', onEscKeyDown);
    };

    eventPointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', onOpenFormEdit);

    formEditComponent.element.querySelector('.event__rollup-btn').addEventListener('click', onCloseFormEdit);

    formEditComponent.element.addEventListener('submit', onCloseFormEdit);

    render(eventPointComponent, this.#tripListComponent.element);
  };

  #renderEventPointList = () => {
    render(this.#tripListComponent, this.#tripListContainer);

    if (this.#eventPointsList.length === 0) {
      render(new NoEventPointView(), this.#tripListComponent.element);
    } else {
      this.#eventPointsList.forEach((event) => this.#renderEventPoints(event));
    }
  };
}
