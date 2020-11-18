import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';
import { Layout } from '..';
import { Listings, ListingsHeader, Map } from '../../components';

const RowStyled = styled(Row)`
  min-height: calc(100vh - 80px);
`;

const ListingsContainer = styled(Col)`
  height: 100%;
  overflow: hidden;
  padding-top: 20px;

  @media only screen and (max-width: 500px) {
    padding-left: 2rem;
  }
`;
/**
 * Home component
 */
const Home = () => (
  <Layout>
    <RowStyled>
      <ListingsContainer xs={12} md={7}>
        <ListingsHeader />
        <Listings />
      </ListingsContainer>
      <Col xs={12} md={5}>
        <Map />
      </Col>
    </RowStyled>
  </Layout>
);

export default Home;
