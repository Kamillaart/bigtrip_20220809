import TripListView from '../view/trip-event-view';
import TripEventsView from '../view/trip-events-item.js';
import EditPointView from '../view/edit-point.js';
import NoEventPointView from '../view/trip-events-message-view.js';
import {render} from '../framework/render.js';
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

    const onOpenFormEdit = () => {
      replaceEventPointsListToEditForm();
      document.addEventListener('keydown', onEscKeyDown);
    };

    const onCloseFormEdit = () => {
      replaceEditFormToEventPointsList();
      document.addEventListener('keydown', onEscKeyDown);
    };

    eventPointComponent.setOpenFormClickHandler(onOpenFormEdit);

    formEditComponent.setCloseFormClickHandler(onCloseFormEdit);

    formEditComponent.setFormSubmitHandler(onCloseFormEdit);

    render(eventPointComponent, this.#tripListComponent.element);
  };

  #renderEventPointList = () => {
    render(this.#tripListComponent, this.#tripListContainer);

    if (this.#eventPointsList.length === 0) {
      return render(new NoEventPointView(), this.#tripListComponent.element);
    }
    return this.#eventPointsList.forEach((event) => this.#renderEventPoints(event));
  };
}
