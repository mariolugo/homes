import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';
import { WrapperGrid } from '../';
import FooterLogo from '../../assets/icons/footer-logo.svg';
import Messenger from '../../assets/icons/messenger.svg';

const FooterStyled = styled.div`
  background-color: white;
  border-top: 1px solid ${({ theme }) => theme.colors.grayLight};
  margin: 0px auto;
  min-height: 60px;

  @media only screen and (max-width: 600px) {
    padding-top: 10px;
  }
`;

const LinkStyled = styled.p`
  font-size: 13px;
`;

const FooterLink = styled(LinkStyled)`
  text-align: center;
`;

const ListStyled = styled.ul`
  list-style: none;
  padding-left: 0px;
`;

const ListItemStyled = styled.li`
  svg {
    display: inline-block;
    margin-right: 5px;
    position: relative;
    top: 2px;
  }
  p {
    display: inline-block;
    margin: 0;
  }

  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;

const LogoContainer = styled(Col)`
  display: flex;
  padding-right: 0;
  align-items: center;
  justify-content: center;
`;

const ColCentered = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

/**
 * Main footer of the application
 */
const Footer = () => (
  <FooterStyled>
    <WrapperGrid>
      <Row>
        <Col xs={12} sm={4}>
          <Row>
            <LogoContainer xs={12} sm={3}>
              <FooterLogo />
            </LogoContainer>
            <Col xs={12} sm={9}>
              <ListStyled>
                <ListItemStyled>
                  <LinkStyled>hey@homie.mx</LinkStyled>
                </ListItemStyled>
                <ListItemStyled>
                  <LinkStyled>5015 1546</LinkStyled>
                </ListItemStyled>
                <ListItemStyled>
                  <Messenger />
                  <LinkStyled>Escríbenos por facebook</LinkStyled>
                </ListItemStyled>
              </ListStyled>
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={3}>
          <ListStyled>
            <ListItemStyled>
              <LinkStyled>Te buscamos depa</LinkStyled>
            </ListItemStyled>
            <ListItemStyled>
              <LinkStyled>Blog</LinkStyled>
            </ListItemStyled>
            <ListItemStyled>
              <LinkStyled>Equipo</LinkStyled>
            </ListItemStyled>
          </ListStyled>
        </Col>
        <ColCentered xs={12} sm={2}>
          <FooterLink>Aviso de privacidad</FooterLink>
        </ColCentered>
        <ColCentered xs={12} sm={3}>
          <FooterLink>Términos y condiciones</FooterLink>
        </ColCentered>
      </Row>
    </WrapperGrid>
  </FooterStyled>
);

export default Footer;
