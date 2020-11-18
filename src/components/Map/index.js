import React from 'react';
import styled from 'styled-components';
// import { Col, Row } from 'react-styled-flexboxgrid';

const MapContainerStyled = styled.div`
  height: 95%;
  position: fixed;
`;

const MapStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 380px;
`;

const MapContainer = () => (
  <MapContainerStyled>
    <MapStyled>This is the Map Container</MapStyled>
  </MapContainerStyled>
);

export default MapContainer;
