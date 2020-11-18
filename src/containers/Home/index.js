import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';
import { Layout } from '..';
import { Listings, Map } from '../../components';

const RowStyled = styled(Row)`
  min-height: calc(100vh - 80px);
`;

/**
 * Home component
 */
const Home = () => (
  <Layout>
    <RowStyled>
      <Col xs={12} md={7}>
        <Listings />
      </Col>
      <Col xs={12} md={5}>
        <Map />
      </Col>
    </RowStyled>
  </Layout>
);

export default Home;
