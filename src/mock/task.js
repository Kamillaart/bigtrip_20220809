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

const getOffer = (index, title) => ({
  id: index + 1,
  title: title,
  price: getRandomInteger(MIN_PRICE, MAX_PRICE)
});

export const allOffers = Array.from({ length: OFFER_TITLES.length }, (_, index) =>
  getOffer(index, OFFER_TITLES[index]));

export const destination = {
  id: getRandomInteger(1, 10),
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
  'base_price': getRandomInteger(MIN_PRICE, MAX_PRICE),
  'date_from': generateDate(0, MAX_MINUTES_FROM),
  'date_to': generateDate(MAX_MINUTES_FROM, MAX_MINUTES_TO),
  'destination': getRandomIndex(DESTINATION_NAMES),
  'id': getRandomInteger(1, 10).toString(),
  'is_favorite': Boolean(getRandomInteger(0, 1)),
  'offers': [1, 2, 3, 4, 5].slice(0, getRandomInteger(0, OFFER_TITLES.length)),
  'type': generateOffersByType(),
});

