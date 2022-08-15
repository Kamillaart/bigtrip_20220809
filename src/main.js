import EventsListPresenter from './presenter/events-list-presenter.js';
import TripMainView from './view/trip-main.js';
import TripControlsFilterView from './view/trip-controls-filters.js';
import TripEventSortView from './view/trip-events-sort.js';
import {render, RenderPosition} from './render.js';

const tripMain = document.querySelector('.trip-main');
const tripControlsDiv = document.querySelector('.trip-controls__filters');
const tripEventsSection = document.querySelector('.trip-events');

render(new TripMainView(), tripMain, RenderPosition.AFTERBEGIN);

render(new TripControlsFilterView(), tripControlsDiv);

render(new TripEventSortView(), tripEventsSection);

const eventsListPresenter = new EventsListPresenter();

eventsListPresenter.init(tripEventsSection);
