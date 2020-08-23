import React, { useState, useRef, useEffect } from 'react';
import MapGL, { Marker } from 'react-map-gl';

import { useSelector } from 'react-redux';
import { Container } from './styles';
import Point from '../Point';

const TOKEN =
  'pk.eyJ1IjoiaWdvcmFyYXVqb2RldiIsImEiOiJja2UzZXJvOGMwaWszMnVueWVvY3ZhaWg0In0.cJzfgT5p_iZDFxp_tPcqRQ';

function Map() {
  const users = useSelector(state => {
    return state.user.users;
  });

  const [coordinates, setCoordinates] = useState({
    width: '100%',
    height: '100%',
    latitude: -3.8545309,
    longitude: -38.5735246,
    zoom: 4,
  });

  // useEffect(() => {
  //   if (!mapRef.current) return;

  //   const map = new mapboxgl.Map({
  //     container: mapRef.current,
  //     style: 'mapbox://styles/mapbox/streets-v11',

  //     center: [coordinates.lng, coordinates.lat],
  //     zoom: coordinates.zoom,
  //   });
  // }, [coordinates]);
  return (
    <Container>
      <MapGL
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={TOKEN}
        {...coordinates}
        onViewportChange={viewport => {
          setCoordinates({
            ...viewport,
            width: coordinates.width,
            height: coordinates.height,
          });
        }}
        // onClick={() => this.showModal()}
      >
        {users.map(user => (
          <Marker
            key={1}
            latitude={user.coordinates.lat}
            longitude={user.coordinates.lng}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <Point user={user} />
          </Marker>
        ))}
      </MapGL>
    </Container>
  );
}

export default Map;
