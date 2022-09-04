import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import {
  MINUTES_IN_HOUR,
  MINUTES_IN_DAY
} from './mock/consts.js';

// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomIndex = (arr) => arr[getRandomInteger(0, arr.length - 1)];

const humanizeTaskDueDate = (date) => dayjs(date).format('D MMMM');
const humanizeTaskDueTime = (time) => dayjs(time).format('YYYY-MM-DDTHH:MM');
const humanizeTaskDueTimeInDays = (time) => dayjs(time).format('HH:MM');
const humanizeTask = (time) => dayjs(time).format('DD[D] HH[H] MM[M]');

const getTransformationDateEvent = (dateEvent) => dayjs(dateEvent).format('YYYY-MM-DD');
const getTransformationDateEventForUI = (date) => dayjs(date).format('MMM D');
const getTransformationDate = (date) => dayjs(date).format();
const getTransformationTime = (time) => dayjs(time).format('HH:mm');
const getTransformationDateInEditForm = (date) => dayjs(date).format('DD/MM/YY HH:mm');
const getDurationEvent = (dateTo, dateFrom) => dayjs(dateTo).diff(dayjs(dateFrom), 'm');

const getTransformationDuration = (dateFrom, dateTo) => {
  dayjs.extend(duration);
  const durationInMin = getDurationEvent(dateFrom, dateTo);
  const eventDuration = dayjs.duration(durationInMin, 'm');
  if(durationInMin % MINUTES_IN_DAY === 0) {
    return eventDuration.format('DD[D]');
  }
  if(durationInMin > MINUTES_IN_DAY && durationInMin % MINUTES_IN_HOUR === 0) {
    return eventDuration.format('DD[D] HH[H]');
  }
  if(durationInMin > MINUTES_IN_DAY && durationInMin % MINUTES_IN_DAY < MINUTES_IN_HOUR) {
    return eventDuration.format('DD[D] mm[M]');
  }
  if(durationInMin > MINUTES_IN_DAY) {
    return eventDuration.format('DD[D] HH[H] mm[M]');
  }
  if (durationInMin >= MINUTES_IN_HOUR && durationInMin < MINUTES_IN_DAY && durationInMin % MINUTES_IN_HOUR === 0) {
    return eventDuration.format('HH[H]');
  }
  if (durationInMin > MINUTES_IN_HOUR && durationInMin < MINUTES_IN_DAY) {
    return eventDuration.format('HH[H] mm[M]');
  }
  if (durationInMin < MINUTES_IN_HOUR) {
    return eventDuration.format('mm[M]');
  }
};

export {getRandomInteger,
  getRandomIndex,
  getTransformationDuration,
  humanizeTaskDueDate,
  humanizeTaskDueTime,
  humanizeTaskDueTimeInDays,
  humanizeTask,
  getTransformationDateEvent,
  getTransformationDateEventForUI,
  getTransformationDate,
  getTransformationTime,
  getTransformationDateInEditForm,
};
