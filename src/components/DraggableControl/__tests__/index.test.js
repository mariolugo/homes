import { render } from '@testing-library/react';
import { DraggableControl } from '../../../components';

/** @test {DraggableControl Component} */
describe('DraggableControl Component', () => {
  it('should render without crashing', () => {
    const wrapper = render(<DraggableControl />);
    expect(wrapper).toMatchSnapshot();
  });
});
