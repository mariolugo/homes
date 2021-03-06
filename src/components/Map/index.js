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

const icon = {
  path:
    'M2,4.26325641e-14 L65.9291719,-2.08721929e-14 C67.0337414,-2.1075099e-14 67.9291719,0.8954305 67.9291719,2 L67.9291719,23.1112804 C67.9291719,24.2158499 67.0337414,25.1112804 65.9291719,25.1112804 L13.1626299,25.1112804 C12.5548036,25.1112804 11.9799621,25.3876941 11.6004313,25.8624668 L3.56219864,35.9178633 C2.87249792,36.7806418 1.61396487,36.920949 0.751186393,36.2312483 C0.276413708,35.8517175 5.64608533e-09,35.276876 5.54880497e-09,34.6690497 L0,2 C-1.76786699e-10,0.8954305 0.8954305,-1.43271482e-10 2,-3.20057758e-10 Z',
  fillColor: 'rgb(141, 122, 255)',
  fillOpacity: 1,
  strokeWeight: 0,
  scale: 1.2,
};

/**
 *
 * This is the map component
 */
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
  markers,
  highlightMarker,
  highlightPost,
  focusPost,
}) => {
  // have the map ref on the state
  const [localMapRef, setlocalMapRef] = useState(null);
  // old current highlight, this is used to remove the highlight on the previous marker
  const [currentHighlight, setCurrentHighlight] = useState();
  // map reference
  const mapDivRef = useRef();

  // options given to the map
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

  /**
   * Change the color of the old and new marker
   * @param {string} id This is the id of the marker to change the color
   */
  const changeMarkerColor = (id) => {
    // get the index of the new marker
    const index = markersArray.findIndex((m) => m.id === id);

    // get the marker by index.
    const marker = markersArray[index];

    // this will set the old marker color back, to the primary one.
    if (currentHighlight && currentHighlight !== id) {
      const oldIndex = markersArray.findIndex((m) => m.id === currentHighlight);
      if (oldIndex > -1) {
        const oldMarker = markersArray[oldIndex];
        oldMarker.setMap(null);
        oldMarker.icon.fillColor = icon.fillColor;
        oldMarker.setMap(map);
      }
    }

    // this will add the active color to the new marker
    marker.setMap(null);
    marker.icon.fillColor = 'rgb(255, 21, 85)';
    marker.setMap(map);
    map.setZoom(11);
    map.setCenter(marker.getPosition());

    setCurrentHighlight(marker.id);
  };

  // this will add the map, we use an empty dependency array to simulate "ComponentDidMount"
  useEffect(() => {
    const google = window.google;

    // here we create both controls of the map
    const dragabbleControl = document.createElement('div');
    const helpControl = document.createElement('div');
    ReactDOM.render(<DraggableControl />, dragabbleControl);
    ReactDOM.render(<HelpControl />, helpControl);

    // creates the new map and add it to the global variable for future use.
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

  // here we add the current markers to the map
  useEffect(() => {
    /**
     * Clear map markers
     */
    const clearMap = () => {
      for (let i = 0; i < markersArray.length; i++) markersArray[i].setMap(null);
      markersArray = [];
    };

    if (localMapRef) {
      if (markersArray.length > 0) {
        clearMap();
      }

      // initialize bounds used to cover all the markers on the map.
      let bounds = new google.maps.LatLngBounds();

      // creating new markers depending on the markers prop
      for (let i = 0; i < markers.length; i++) {
        // used a custom library to create custom markers.
        const m = new MarkerWithLabel({
          id: markers[i].id,
          map: map,
          position: new google.maps.LatLng(markers[i].lat, markers[i].lng),
          icon: {
            ...icon,
            anchor: new google.maps.Point(0, 0),
          },
          labelContent: `$${formatPrice(markers[i].price)}`,
          labelAnchor: new google.maps.Point(10, 5),
          labelClass: 'label-marker', // your desired CSS class
          labelInBackground: false,
        });

        // add listeners to earch marker.
        new google.maps.event.addListener(m, 'click', function () {
          focusPost(markers[i].id);
        });

        bounds.extend(markers[i]);
        markersArray.push(m);
      }
      map.fitBounds(bounds, 0);
    }
  }, [localMapRef, markers]);

  // used to change the marker color if you make hover on the home.
  useEffect(() => {
    if (highlightMarker && markersArray.length > 0) {
      changeMarkerColor(highlightMarker);
    }
  }, [highlightMarker]);

  // used to change color of the marker if you click the marker.
  useEffect(() => {
    if (highlightPost && markersArray.length > 0) {
      changeMarkerColor(highlightPost);
    }
  }, [highlightPost]);

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
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      lat: PropTypes.number,
      lng: PropTypes.number,
      price: PropTypes.number,
    }),
  ),
  highlightMarker: PropTypes.string,
  highlightPost: PropTypes.string,
  focusPost: PropTypes.func,
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
  markers: [],
};

export default MapComponent;
