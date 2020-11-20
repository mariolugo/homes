import { mountWithTheme } from '../../../../tests/themeProvider';
import { Post } from '../../../components';

/** @test {Post Component} */
describe('Post Component', () => {
  it('should render without crashing', () => {
    const wrapper = mountWithTheme(<Post />);
    expect(wrapper).toMatchSnapshot();
  });
});
