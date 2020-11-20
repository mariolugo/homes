import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';
import { Post } from '../';
import { homeTypes } from '../../types';
import PropTypes from 'prop-types';

const ListingsContainerStyled = styled.div``;

const ListingsCol = styled(Col)``;

/**
 * This is the listing components, we can pass homes to it and it will render them.
 * @param {*} {homes} this is the home array
 * @param {*} {onHover} function used on the room when you pass the mouse over it
 * @param {*} {highlightPost} if a marker is clicked, it will highlight the post.
 */
const ListingsContainer = ({ homes, onHover, highlightPost }) => (
  <ListingsContainerStyled>
    <Row>
      {homes.length > 0 &&
        homes.map((home) => (
          <ListingsCol key={home.id} xs={12} md={6}>
            <Post {...home} onHover={onHover} highlightPost={highlightPost} />
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
  highlightPost: PropTypes.string,
};

ListingsContainer.defaultProps = {
  homes: [],
  highlightPost: '',
};

export default ListingsContainer;
