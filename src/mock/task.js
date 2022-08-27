import {getRandomInteger} from '../utils.js';

const generateOffersByType = () => {
  const types = [
    'taxi',
    'bus',
    'train',
    'ship',
    'drive',
    'flight',
    'check-in',
    'sightseeing',
    'restaurant',
  ];

  const randomIndex = getRandomInteger(0, types.length - 1);

  return types[randomIndex];
};
const offer = {
  id: 1,
  title: 'Upgrade to a business class',
  price: 120
};

export const destination = {
  id: 1,
  description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
  name: 'Chamonix',
  pictures: [
    {
      'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
      'description': 'Chamonix parliament building'
    }
  ]
};

export const generateTripPoint = () => ({
  point: {
    basePrice: 1100,
    dateFrom: '2019-07-14T17:55:56.845Z',
    dateTo: '2019-07-14T18:05:13.375Z',
    destination: destination.name,
    id: '0',
    isFavorite: false,
    offers: Array.of(offer.title),
    type: generateOffersByType(),
  },
});

