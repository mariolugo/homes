import React from "react";
import styled from "styled-components";
import { Col, Row } from "react-styled-flexboxgrid";

const NavBarStyled = styled.nav`
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.colors.pink};
  position: fixed;
  width: 100%;
  margin: 0px auto;
  min-height: 60px;
`;

const NavBar = () => (
  <NavBarStyled>
    <Row>
      <Col xs={12}>
        <Row center="xs">
          <Col xs={12} md={8}>
            <p>This is the navbar</p>
          </Col>
        </Row>
      </Col>
    </Row>
  </NavBarStyled>
);

export default NavBar;
