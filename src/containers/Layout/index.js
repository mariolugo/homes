import React from 'react';
import { Col, Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavBar, Footer, WrapperGrid } from '../../components';

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
    <WrapperGrid>
      <Row>
        <Col xs={12}>
          <ContainerStyled>{children}</ContainerStyled>
        </Col>
      </Row>
    </WrapperGrid>
    <Footer />
  </LayoutStyled>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
