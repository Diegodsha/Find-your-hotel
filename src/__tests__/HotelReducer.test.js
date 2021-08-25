import hotels from '../Reducers/HotelReducer';

describe('Hotel reducer', () => {
  const FETCH_HOTELS = 'FETCH_HOTELS';

  const action = {
    type: FETCH_HOTELS,
    hotels: [
      {
        id: '1',
        type: 'hotel',
        attributes: {
          name: 'Grand Fiesta Americana Coral Beach Cancun',
          description:
            'This luxury hotel rises majestically in the heart of Cancun’s entertainment district.',
          services: 'Free parking,Pool',
          img_url:
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/3b/56/e4/hero-shot-at-night.jpg?w=1200&h=-1&s=1',
          price_nigth: '465',
          avg_score: 4.0,
        },
        relationships: {
          reviews: {
            data: [
              {
                id: '4',
                type: 'review',
              },
            ],
          },
        },
      },
      {
        id: '2',
        type: 'hotel',
        attributes: {
          name: 'Hyatt Zilara Cancun',
          description:
            'Welcome to Hyatt Zilara Cancun, an adults-only, all-inclusive resort (min. age 18).',
          services: 'Fitness center,Free breakfast',
          img_url:
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/47/f2/ef/hyatt-zilara-cancun.jpg?w=1200&h=-1&s=1',
          price_nigth: '543',
          avg_score: 5.0,
        },
        relationships: {
          reviews: {
            data: [
              {
                id: '1',
                type: 'review',
              },
              {
                id: '2',
                type: 'review',
              },
              {
                id: '3',
                type: 'review',
              },
            ],
          },
        },
      },
    ],
  };

  it('hotels reducer has an initial state', () => {
    expect(hotels([], {})).toEqual([]);
  });

  it('hotels reducer has hotels in state after fetch', () => {
    expect(hotels([], action).length).toEqual(2);
  });
});
