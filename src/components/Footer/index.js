import React from 'react';
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

const FooterStyled = styled.div`
  background-color: white;
  border-top: 1px solid ${({ theme }) => theme.colors.grayLight};
  margin: 0px auto;
  min-height: 60px;
`;

const Footer = () => (
  <FooterStyled>
    <Grid>
      <Row>
        <Col xs={12}>
          <p>Footer</p>
        </Col>
      </Row>
    </Grid>
  </FooterStyled>
);

export default Footer;
