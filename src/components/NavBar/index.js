import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';
import { WrapperGrid } from '../';

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
    <WrapperGrid>
      <Row>
        <Col xs={12}>
          <p>This is the navbar</p>
        </Col>
      </Row>
    </WrapperGrid>
  </NavBarStyled>
);

export default NavBar;
