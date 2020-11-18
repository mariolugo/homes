import React from 'react';
import styled from 'styled-components';
// import { Col, Row } from 'react-styled-flexboxgrid';

const MapContainerStyled = styled.div`
  position: fixed;
  height: 700px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const MapStyled = styled.div`
  width: 450px;
`;

const MapContainer = () => (
  <MapContainerStyled>
    <MapStyled>This is the Map Container</MapStyled>
  </MapContainerStyled>
);

export default MapContainer;
