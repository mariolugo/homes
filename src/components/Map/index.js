import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DraggableControl, HelpControl } from '../../components';

const MapContainerStyled = styled.div`
  position: fixed;

  background-color: ${({ theme }) => theme.colors.primary};
`;

const MapComponent = ({
  width,
  lat,
  lng,
  zoom,
  mapRef,
  disableDefaultUI,
  zoomControl,
  scaleControl,
  fullscreenControl,
  gestureHandling,
}) => {
  const [localMapRef, setlocalMapRef] = useState(null);
  const mapDivRef = useRef();
  const options = {
    center: { lat, lng },
    zoom,
    disableDefaultUI,
    zoomControl,
    scaleControl,
    fullscreenControl,
    clickableIcons: false,
    clickableLabels: false,
    streetViewControl: false,
  };
  useEffect(() => {
    const google = window.google;
    let map = null;
    const dragabbleControl = document.createElement('div');
    const helpControl = document.createElement('div');

    ReactDOM.render(<DraggableControl />, dragabbleControl);
    ReactDOM.render(<HelpControl />, helpControl);
    if (map === null && mapDivRef.current !== null) {
      map = new google.maps.Map(mapDivRef.current, {
        ...options,
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_BOTTOM,
        },
      });
      map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(dragabbleControl);
      map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(helpControl);
      mapRef(map);
      setlocalMapRef(map);
    }
  }, []);

  useEffect(() => {
    if (localMapRef) {
      const newOptions = Object.assign({}, options);
      newOptions.gestureHandling = gestureHandling ? 'greedy' : 'none';
      localMapRef.setOptions(newOptions);
    }
  }, [localMapRef, gestureHandling]);

  useEffect(() => {
    if (localMapRef && lat && lng) {
      localMapRef.setCenter({ lat, lng });
    }
  }, [localMapRef, lat, lng]);

  return (
    <MapContainerStyled>
      <div id="map" ref={mapDivRef} style={{ width, height: 'calc(100vh - 160px)' }} />
    </MapContainerStyled>
  );
};

MapComponent.propTypes = {
  width: PropTypes.number.isRequired,
  lat: PropTypes.number,
  lng: PropTypes.number,
  zoom: PropTypes.number,
  mapRef: PropTypes.func,
  disableDefaultUI: PropTypes.bool,
  zoomControl: PropTypes.bool,
  scaleControl: PropTypes.bool,
  fullscreenControl: PropTypes.bool,
  gestureHandling: PropTypes.bool,
};

MapComponent.defaultProps = {
  lat: 19.41347,
  lng: -99.1757,
  zoom: 16,
  mapRef: () => {},
  disableDefaultUI: false,
  zoomControl: true,
  scaleControl: false,
  fullscreenControl: false,
  gestureHandling: true,
};

export default MapComponent;
