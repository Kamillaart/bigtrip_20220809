import BoardView from '../view/board-view.js';
import TaskListView from '../view/task-list-view.js';
import NewTripMainView from '../view/trip-main.js';
import NewTripControlsFilterView from '../view/trip-controls-filters.js';
import NewTripEventSortView from '../view/trip-events-sort.js';
import NewAddingNewPointView from '../view/add-new-point.js';
import NewTripEventsItemView from '../view/trip-events-item.js';
import NewEditPointView from '../view/edit-point.js';
import {renderAfterBegin, renderBeforeEnd} from '../render.js';

export default class BoardPresenter {
  boardComponent = new BoardView();
  taskListComponent = new TaskListView();

  init = (boardContainer) => {
    this.boardContainer = boardContainer;

    renderAfterBegin(this.boardComponent, this.boardContainer);
    renderAfterBegin(new NewTripMainView(), this.boardComponent.getElement());
    renderBeforeEnd(this.taskListComponent, this.boardComponent.getElement());
    renderBeforeEnd(new NewTripControlsFilterView(), this.taskListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      renderBeforeEnd(new NewTripEventsItemView(), this.taskListComponent.getElement());
    }

    renderBeforeEnd(new NewTripEventSortView(), this.boardComponent.getElement());
    renderBeforeEnd(new NewAddingNewPointView(), this.boardComponent.getElement());
    renderBeforeEnd(new NewEditPointView(), this.boardComponent.getElement());
  };
}
