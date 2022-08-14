import EventsListPresenter from './presenter/board-presenter.js';
import NewTripMainView from './view/trip-main.js';
import NewTripControlsFilterView from './view/trip-controls-filters.js';
import NewTripEventSortView from './view/trip-events-sort.js';
import {renderAfterBegin, renderBeforeEnd} from './render.js';

const tripMain = document.querySelector('.trip-main');
const tripEventsElement = document.querySelector('.trip-events');
const tripControlsDiv = document.querySelector('.trip-controls__filters');
const tripEventsSection = document.querySelector('.trip-events');

renderAfterBegin(new NewTripMainView(), tripMain);

renderBeforeEnd(new NewTripControlsFilterView(), tripControlsDiv);

renderBeforeEnd(new NewTripEventSortView(), tripEventsSection);

const eventsListPresenter = new EventsListPresenter();

eventsListPresenter.init(tripEventsElement);
