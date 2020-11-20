import { render } from '@testing-library/react';
import { Listings } from '../../../components';

/** @test {Listings Component} */
describe('Listings Component', () => {
  it('should render without crashing', () => {
    const wrapper = render(<Listings />);
    expect(wrapper).toMatchSnapshot();
  });
});
