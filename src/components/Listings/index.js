import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';
import { Post } from '../';

const ListingsContainerStyled = styled.div``;

const ListingsContainer = ({ posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] }) => (
  <ListingsContainerStyled>
    <Row>
      {posts.length > 0 &&
        posts.map((p) => (
          <Col key={p} xs={12} md={6}>
            <Post />
          </Col>
        ))}
    </Row>
  </ListingsContainerStyled>
);

export default ListingsContainer;
