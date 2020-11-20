import { mountWithTheme } from '../../../../tests/themeProvider';
import { Paginator } from '../../../components';

/** @test {Paginator Component} */
describe('Paginator Component', () => {
  it('should render without crashing', () => {
    const wrapper = mountWithTheme(<Paginator />);
    expect(wrapper).toMatchSnapshot();
  });
});
