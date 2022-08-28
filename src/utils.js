import dayjs from 'dayjs';
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

export {getRandomInteger, getRandomIndex, humanizeTaskDueDate, humanizeTaskDueTime, humanizeTaskDueTimeInDays, humanizeTask};
