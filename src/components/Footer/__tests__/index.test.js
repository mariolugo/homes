import { mountWithTheme } from '../../../../tests/themeProvider';
import { Footer } from '../../../components';

/** @test {Footer Component} */
describe('Footer Component', () => {
  it('should render without crashing', () => {
    const wrapper = mountWithTheme(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
