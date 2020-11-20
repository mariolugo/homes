import { Grid } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

/**
 * this is used to make a 1024px wrapper.
 */
const WrapperGrid = styled(Grid)`
  max-width: 1024px;
  margin: 0 auto;
  min-height: 60px;
`;

export default WrapperGrid;
