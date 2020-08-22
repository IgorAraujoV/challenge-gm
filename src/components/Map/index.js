import React, { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

 import { Container } from './styles';

mapboxgl.accessToken = 'pk.eyJ1IjoiaWdvcmFyYXVqb2RldiIsImEiOiJja2UzZXJvOGMwaWszMnVueWVvY3ZhaWg0In0.cJzfgT5p_iZDFxp_tPcqRQ'

function Map() {
  const mapRef = useRef();

  const [coordinates, setCoordinates] = useState({
    lng: 5,
    lat: 34,
    zoom: 2
    });

  useEffect(() => {
    if (!mapRef.current)
      return;

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',

      center: [coordinates.lng, coordinates.lat],
      zoom: coordinates.zoom
      });
  }, [coordinates])

  return <Container ref={mapRef} />;
}

export default Map;