import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { Col, Row } from 'react-styled-flexboxgrid';

const MapContainerStyled = styled.div`
  position: fixed;
  height: calc(100vh - 160px);
  background-color: ${({ theme }) => theme.colors.primary};
`;

const MapStyled = styled.div`
  width: ${(props) => props.width - 32}px;
`;

const MapComponent = ({ width }) => {
  console.log('width', width);

  return (
    <MapContainerStyled>
      <MapStyled width={width}>This is the Map Container</MapStyled>
    </MapContainerStyled>
  );
};

MapComponent.propTypes = {
  width: PropTypes.number.isRequired,
};

export default MapComponent;
