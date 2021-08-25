import renderer from 'react-test-renderer';
import Review from '../../Components/Review';

describe('Review Component', () => {
  const review = {
    title: 'review',
    body: 'body test',
    score: 3,
    created_at: '20-02-20',
  };
  test('Renders correctly component', () => {
    const tree = renderer.create(<Review review={review} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
