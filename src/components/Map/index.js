/* eslint-disable no-undef */
import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DraggableControl, HelpControl } from '../../components';
import { formatPrice } from '../../utils';

const MapContainerStyled = styled.div`
  position: fixed;
`;

let map = null;
let markersArray = [];

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
  markers,
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
    const clearMap = () => {
      for (let i = 0; i < markersArray.length; i++) markersArray[i].setMap(null);
      markersArray = [];
    };
    if (localMapRef) {
      if (markersArray.length > 0) {
        clearMap();
      }

      let bounds = new google.maps.LatLngBounds();

      const icon = {
        path:
          'M2,4.26325641e-14 L65.9291719,-2.08721929e-14 C67.0337414,-2.1075099e-14 67.9291719,0.8954305 67.9291719,2 L67.9291719,23.1112804 C67.9291719,24.2158499 67.0337414,25.1112804 65.9291719,25.1112804 L13.1626299,25.1112804 C12.5548036,25.1112804 11.9799621,25.3876941 11.6004313,25.8624668 L3.56219864,35.9178633 C2.87249792,36.7806418 1.61396487,36.920949 0.751186393,36.2312483 C0.276413708,35.8517175 5.64608533e-09,35.276876 5.54880497e-09,34.6690497 L0,2 C-1.76786699e-10,0.8954305 0.8954305,-1.43271482e-10 2,-3.20057758e-10 Z',
        fillColor: 'rgb(141, 122, 255)',
        fillOpacity: 1,
        anchor: new google.maps.Point(0, 0),
        strokeWeight: 0,
        scale: 1.2,
      };

      for (let i = 0; i < markers.length; i++) {
        const m = new MarkerWithLabel({
          map: map,
          position: new google.maps.LatLng(markers[i].lat, markers[i].lng),
          icon,
          labelContent: `$${formatPrice(markers[i].price)}`,
          labelAnchor: new google.maps.Point(10, 5),
          labelClass: 'label-marker', // your desired CSS class
          labelInBackground: false,
        });
        bounds.extend(markers[i]);
        markersArray.push(m);
      }
      map.fitBounds(bounds, 0);
    }
  }, [localMapRef, markers]);

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
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      lat: PropTypes.number,
      lng: PropTypes.number,
      price: PropTypes.number,
    }),
  ),
};

MapComponent.defaultProps = {
  lat: 19.41347,
  lng: -99.1757,
  zoom: 10,
  mapRef: () => {},
  disableDefaultUI: false,
  zoomControl: true,
  scaleControl: false,
  fullscreenControl: false,
  gestureHandling: true,
  markers: [],
};

export default MapComponent;
