import {createElement} from '../render.js';
import {OFFER_TITLES,
  POINT_TYPES,
  MIN_PRICE,
  MAX_PRICE,
} from '../mock/consts.js';
import {
  getRandomInteger,
  getTransformationDateInEditForm
} from '../utils.js';
import {offer, destination} from '../mock/task.js';

const createTripEventsItemTemplate = (pointObject) => {
  const {date_from, date_to, type, base_price, offers} = pointObject.point;

  const isTypeChecked = (checkedType, currentType) => currentType === checkedType ? 'checked' : '';

  const createTypeEditTemplate = (checkedType) => POINT_TYPES.map((currentType) =>
    `<div class="event__type-item">
      <input id="event-type-${currentType}-${POINT_TYPES.indexOf(currentType)}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${currentType}" ${isTypeChecked(checkedType, currentType)}>
      <label class="event__type-label  event__type-label--${currentType}" for="event-type-${currentType}-1">${currentType[0].toUpperCase() + currentType.slice(1)}</label>
    </div>`).join('');


  const isOfferChecked = (offer1) => offers.includes(offer1.id) ? 'checked' : '';

  const createOfferEditTemplate = () => OFFER_TITLES.map(() =>
    `<div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" ${isOfferChecked(offer)}>
        <label class="event__offer-label" for="event-offer-luggage-1">
          <span class="event__offer-title">${OFFER_TITLES[getRandomInteger(0, OFFER_TITLES.length - 1)]}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${getRandomInteger(MIN_PRICE, MAX_PRICE)}</span>
        </label>
      </div>`).join('');

  return (
    `<form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${createTypeEditTemplate(type)}
              </fieldset>
            </div>
          </div>
          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
            ${type}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination.name}" list="destination-list-1">
            <datalist id="destination-list-1">
              <option value="Amsterdam"></option>
              <option value="Geneva"></option>
              <option value="Chamonix"></option>
            </datalist>
          </div>
          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${getTransformationDateInEditForm(date_from)}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${getTransformationDateInEditForm(date_to)}">
          </div>
          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${base_price}">
          </div>
          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Delete</button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </header>
        <section class="event__details">
          <section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>
            <div class="event__available-offers">
            ${createOfferEditTemplate()}
          </section>
          <section class="event__section  event__section--destination">
            <h3 class="event__section-title  event__section-title--destination">Destination</h3>
            <p class="event__destination-description">${destination.description}</p>
          </section>
        </section>
      </form>` );
};

export default class EditPointView {
  constructor(point) {
    this.point = point;
  }

  getTemplate() {
    return createTripEventsItemTemplate(this.point);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
