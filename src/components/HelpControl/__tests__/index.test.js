import { render } from '@testing-library/react';
import { HelpControl } from '../../../components';

/** @test {HelpControl Component} */
describe('HelpControl Component', () => {
  it('should render without crashing', () => {
    const wrapper = render(<HelpControl />);
    expect(wrapper).toMatchSnapshot();
  });
});
