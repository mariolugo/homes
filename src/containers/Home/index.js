import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';
import { Layout } from '..';
import { Listings, Map } from '../../components';

const HomeStyled = styled.div`
  min-height: calc(100vh - 80px);
`;

/**
 * Home component
 */
const Home = () => (
  <Layout>
    <HomeStyled>
      <Row
        style={{
          minHeight: 'calc(100vh - 80px)',
        }}>
        <Col xs={12} md={7}>
          <Listings />
        </Col>
        <Col xs={12} md={5}>
          <Map />
        </Col>
      </Row>
    </HomeStyled>
  </Layout>
);

export default Home;
