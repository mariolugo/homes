import React from "react";
import styled from "styled-components";
import { Col, Row } from "react-styled-flexboxgrid";

const FooterStyled = styled.div`
  background-color: white;
  border-top: 1px solid ${({ theme }) => theme.colors.grayLight};
  width: 100%;
  margin: 0px auto;
  min-height: 60px;
`;

const Footer = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} md={8}>
          <FooterStyled>
            <p>Footer</p>
          </FooterStyled>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default Footer;
