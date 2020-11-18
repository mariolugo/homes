import React from 'react';
import styled from 'styled-components';
// import { Col, Row } from 'react-styled-flexboxgrid';

const PostStyled = styled.div`
  background-color: white;
  border: 1px solid black;
  margin-bottom: 25px;

  @media only screen and (min-width: 770px) {
    width: 260px;
    height: 240px;
  }

  @media only screen and (min-width: 1204px) {
    width: 273px;
    height: 240px;
  }
`;

const Post = () => (
  <PostStyled>
    <p>This is the Lisings Container</p>
  </PostStyled>
);

export default Post;
