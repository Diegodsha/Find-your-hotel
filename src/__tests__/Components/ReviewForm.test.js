import renderer from 'react-test-renderer';
import ReviewForm from '../../Components/ReviewForm';

describe('ReviewForm Component', () => {
  const addReview = () => {};
  test('Renders correctly component', () => {
    const tree = renderer.create(<ReviewForm addReview={addReview} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
