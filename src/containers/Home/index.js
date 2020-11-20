import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';
import { Layout } from '..';
import { Listings, ListingsHeader, Map, Paginator, ListingsFooter } from '../../components';
import { useGetWidth } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchHomes,
  getCurrentHomes,
  getCurrentPage,
  getTotalPages,
  getTotalHomes,
  paginateNextPage,
  getFetching,
  getCurrentCount,
} from '../../redux/modules/home';

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

  const totalHomes = useSelector(getTotalHomes);
  const currentPage = useSelector(getCurrentPage);
  const totalPages = useSelector(getTotalPages);
  const currentHomes = useSelector(getCurrentHomes);
  const currentCount = useSelector(getCurrentCount);
  const fetching = useSelector(getFetching);

  const goNext = () => {
    dispatch(paginateNextPage({ page: 1 }));
  };

  const goBack = () => {
    dispatch(paginateNextPage({ page: -1 }));
  };

  useEffect(() => {
    dispatch(fetchHomes());
  }, []);

  return (
    <Layout>
      <RowStyled>
        <ListingsContainer xs={12} md={7}>
          <ListingsHeader />
          {!fetching && (
            <>
              <Listings homes={currentHomes} />
              <Paginator
                goNext={goNext}
                goBack={goBack}
                totalPages={totalPages}
                totalHomes={totalHomes}
                currentPage={currentPage}
                currentCount={currentCount}
              />
            </>
          )}

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
