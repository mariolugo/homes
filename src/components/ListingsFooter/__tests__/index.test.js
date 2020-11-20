import { ListingsFooter } from '../../../components';
import { mountWithTheme } from '../../../../tests/themeProvider';

/** @test {ListingsFooter Component} */
describe('ListingsFooter Component', () => {
  it('should render without crashing', () => {
    const wrapper = mountWithTheme(<ListingsFooter />);
    expect(wrapper).toMatchSnapshot();
  });
});
