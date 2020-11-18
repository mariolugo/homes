import React from "react";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import styled from "styled-components";
import { NavBar, Footer } from "../../components";

const LayoutStyled = styled.div``;

const ContainerStyled = styled.div`
  margin: 0px auto;
  height: auto !important;

  padding-top: 60px;
`;

/**
 * Layout Component
 */
const Layout = ({ children }) => (
  <LayoutStyled>
    <NavBar />
    <Grid>
      <Row>
        <Col xs={12}>
          <ContainerStyled>{children}</ContainerStyled>
        </Col>
      </Row>
    </Grid>
    <Footer />
  </LayoutStyled>
);

export default Layout;
