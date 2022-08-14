const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstElementChild;
};

const renderAfterBegin = (component, container, place = RenderPosition.AFTERBEGIN) => {
  container.insertAdjacentElement(place, component.getElement());
};
const renderBeforeEnd = (component, container, place = RenderPosition.BEFOREEND) => {
  container.insertAdjacentElement(place, component.getElement());
};

export {RenderPosition, createElement, renderAfterBegin, renderBeforeEnd};

