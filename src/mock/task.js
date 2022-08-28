import dayjs from 'dayjs';
import {getRandomInteger, getRandomIndex} from '../utils.js';
import {
  POINT_TYPES,
  MIN_PRICE,
  MAX_PRICE,
  OFFER_TITLES,
  DESTINATION_NAMES,
  DESTINATION_DESCRIPTIONS,
  MAX_MINUTES_FROM,
  MAX_MINUTES_TO,
} from './consts.js';

const generateOffersByType = () => getRandomIndex(POINT_TYPES);

const offer = {
  id: getRandomInteger(1, 10).toString(),
  title: getRandomIndex(OFFER_TITLES),
  price: getRandomInteger(MIN_PRICE, MAX_PRICE)
};

export const destination = {
  id: offer.id,
  description: getRandomIndex(DESTINATION_DESCRIPTIONS),
  name: getRandomIndex(DESTINATION_NAMES),
  pictures: [
    {
      src: `http://picsum.photos/300/200?r=${Math.random()}`,
      description: getRandomIndex(DESTINATION_DESCRIPTIONS),
    }
  ]
};

const generateDate = (to, from) => dayjs().add(getRandomInteger(to, from), 'minute').toISOString();

export const generateTripPoint = () => ({
  point: {
    basePrice: getRandomInteger(MIN_PRICE, MAX_PRICE),
    dateFrom: generateDate(0, MAX_MINUTES_FROM),
    dateTo: generateDate(MAX_MINUTES_FROM, MAX_MINUTES_TO),
    destination: getRandomIndex(DESTINATION_NAMES),
    id: destination.id,
    isFavorite: Boolean(getRandomInteger(0, 1)),
    offers: OFFER_TITLES.slice(0, getRandomInteger(0, OFFER_TITLES.length - 1)),
    type: generateOffersByType(),
  },
});

