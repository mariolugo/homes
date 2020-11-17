import React from "react";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import styled from "styled-components";
import { NavBar } from "../../components";

const LayoutStyled = styled.div``;

const ContainerStyled = styled.div`
  margin: 0px auto;
  height: auto !important;
  min-height: calc(100vh - 80px);
`;

const WrapperStyled = styled.div`
  padding-top: 60px;
  min-height: calc(100vh - 80px);
`;
/**
 * Layout Component
 */
const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <NavBar />
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12} md={8}>
            <ContainerStyled>
              <WrapperStyled>{children}</WrapperStyled>
            </ContainerStyled>
          </Col>
        </Row>
      </Grid>
    </LayoutStyled>
  );
};

export default Layout;
