import { mountWithTheme } from '../../../../tests/themeProvider';
import { NavBar } from '../../../components';

/** @test {NavBar Component} */
describe('NavBar Component', () => {
  it('should render without crashing', () => {
    const wrapper = mountWithTheme(<NavBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
