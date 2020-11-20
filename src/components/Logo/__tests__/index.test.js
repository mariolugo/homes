import { render } from '@testing-library/react';
import { Logo } from '../../../components';

/** @test {Logo Component} */
describe('Logo Component', () => {
  it('should render without crashing', () => {
    const wrapper = render(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });
});
