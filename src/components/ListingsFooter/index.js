import React from 'react';
import styled from 'styled-components';

const ListingsFooterStyled = styled.div`
  p {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

const Title = styled.p`
  text-align: center;
  font-family: 'Open Sans Bold', sans-serif;
`;

const Subtitle = styled.p`
  text-align: center;
`;

const Button = styled.button`
  border-radius: 2px;
  border: none;
  width: 300px;
  display: block;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px 0px;
  color: white;
  font-family: 'Open Sans Bold', sans-serif;
  line-height: 19px;
  padding: 8px 0px;
  margin: 20px auto;
`;

const ListingsFooter = () => (
  <ListingsFooterStyled>
    <Title>¿No encuentras inmueble?</Title>
    <Subtitle>Dinos qué quieres y nosotros te lo buscamos</Subtitle>
    <Button>Encuéntrenme un inmueble</Button>
  </ListingsFooterStyled>
);

export default ListingsFooter;
