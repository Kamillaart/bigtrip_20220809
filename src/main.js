import NewTripMainView from './view/trip-main.js';
import NewTripControlsFilterView from './view/trip-controls-filters.js';
import NewTripEventSortView from './view/trip-events-sort.js';
import NewAddingNewPointView from './view/add-new-point.js';
import NewTripEventsItemView from './view/trip-events-item.js';
import NewEditPointView from './view/edit-point.js';
import {renderAfterBegin, renderBeforeEnd} from './render.js';


const tripMain = document.querySelector('.trip-main');
renderAfterBegin(new NewTripMainView(), tripMain);

const tripControlsDiv = document.querySelector('.trip-controls__filters');
renderBeforeEnd(new NewTripControlsFilterView(), tripControlsDiv);

const tripEventsSection = document.querySelector('.trip-events');
renderBeforeEnd(new NewTripEventSortView(), tripEventsSection);

renderBeforeEnd(new NewEditPointView(), tripEventsSection);

const tripEventsItemUl = document.querySelector('.trip-events__list');
renderBeforeEnd(new NewAddingNewPointView(), tripEventsItemUl);

renderBeforeEnd(new NewTripEventsItemView(), tripEventsItemUl);

