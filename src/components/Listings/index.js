import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';
import { Post } from '../';
import { homeTypes } from '../../types';
import PropTypes from 'prop-types';

const ListingsContainerStyled = styled.div``;

const ListingsCol = styled(Col)``;

const ListingsContainer = ({ homes, onHover }) => (
  <ListingsContainerStyled>
    <Row>
      {homes.length > 0 &&
        homes.map((home) => (
          <ListingsCol key={home.id} xs={12} md={6}>
            <Post {...home} onHover={onHover} />
          </ListingsCol>
        ))}
    </Row>
  </ListingsContainerStyled>
);

ListingsContainer.propTypes = {
  homes: PropTypes.arrayOf(
    PropTypes.shape({
      ...homeTypes,
    }),
  ),
  onHover: PropTypes.func,
};

ListingsContainer.defaultProps = {
  homes: [],
};

export default ListingsContainer;
