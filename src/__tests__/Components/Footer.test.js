import renderer from 'react-test-renderer';
import Footer from '../../Components/Footer';

describe('Footer Component', () => {
  test('Renders correctly component', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
