import React from "react";
import styled from "styled-components";
import { Col, Row } from "react-styled-flexboxgrid";

const ListingsContainerStyled = styled.div`
  height: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const ListingsContainer = () => (
  <ListingsContainerStyled>
    <p>This is the Lisings Container</p>
  </ListingsContainerStyled>
);

export default ListingsContainer;
