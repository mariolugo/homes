import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';
import Filter from '../../assets/icons/filter.svg';

const ListingHeaderStyled = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

const FilterButton = styled.button`
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 3px;
  color: white;
  width: 100%;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px 0px;

  svg {
    display: inline-block;
    margin-right: 5px;
    position: relative;
    top: 2px;
  }

  p {
    display: inline-block;
    font-family: 'Open Sans Bold', sans-serif;
    font-size: 16px;
    margin: 0;
  }

  @media only screen and (max-width: 500px) {
    margin-top: 15px;
  }
`;

const InfoBox = styled.div`
  background-color: white;
  height: 50px;
  max-height: 50px;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px 0px;

  h3 {
    font-size: 16px;
    line-height: 1;
    padding: 7px 0px 0px;
    margin: 0px 0px 0px 10px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: 'Open Sans Bold', sans-serif;
  }

  h4 {
    font-size: 14px;
    line-height: 1;
    padding: 7px 0px 0px;
    margin: 0px 0px 0px 10px;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

const ListingHeaders = () => (
  <ListingHeaderStyled>
    <Row>
      <Col xs={12} sm={9}>
        <InfoBox>
          <h3>Ciudad de Mexico</h3>
          <h4>230 departamentos</h4>
        </InfoBox>
      </Col>
      <Col xs={12} sm={3}>
        <FilterButton>
          <Filter />
          <p>Filtros</p>
        </FilterButton>
      </Col>
    </Row>
  </ListingHeaderStyled>
);

export default ListingHeaders;
