import { render } from '@testing-library/react';
import { WrapperGrid } from '../../../components';

/** @test {WrapperGrid Component} */
describe('WrapperGrid Component', () => {
  it('should render without crashing', () => {
    const wrapper = render(<WrapperGrid />);
    expect(wrapper).toMatchSnapshot();
  });
});
