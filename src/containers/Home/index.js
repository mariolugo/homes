import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';
import { Layout } from '..';
import { Listings, ListingsHeader, Map, Paginator, ListingsFooter } from '../../components';
import { useGetWidth } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomes, getHomes } from '../../redux/modules/home';

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
const Home = () => {
  const mapRef = useRef();
  const mapWidth = useGetWidth(mapRef);
  const dispatch = useDispatch();
  const homes = useSelector(getHomes);

  console.log('homess', homes.get('homes'));

  useEffect(() => {
    dispatch(fetchHomes());
    return () => {};
  }, []);

  return (
    <Layout>
      <RowStyled>
        <ListingsContainer xs={12} md={7}>
          <ListingsHeader />
          <Listings />
          <Paginator />
          <ListingsFooter />
        </ListingsContainer>
        <Col xs={12} md={5} ref={mapRef}>
          <Map width={mapWidth} />
        </Col>
      </RowStyled>
    </Layout>
  );
};

export default Home;
