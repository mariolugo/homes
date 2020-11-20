import { mountWithTheme } from '../../../../tests/themeProvider';
import { ListingsHeader } from '../../../components';

/** @test {ListingsHeader Component} */
describe('ListingsHeader Component', () => {
  it('should render without crashing', () => {
    const wrapper = mountWithTheme(<ListingsHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
