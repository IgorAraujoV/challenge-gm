import React, { useState } from 'react';
import MapGL, { Marker } from 'react-map-gl';

import { useSelector } from 'react-redux';
import { Container } from './styles';
import Point from '../Point';

const TOKEN =
  'pk.eyJ1IjoiaWdvcmFyYXVqb2RldiIsImEiOiJja2UzZXJvOGMwaWszMnVueWVvY3ZhaWg0In0.cJzfgT5p_iZDFxp_tPcqRQ';

function Map({ user }) {
  const users = useSelector(state => {
    return state.user.users;
  });

  const userLogged = useSelector(state => {
    return state.auth.user;
  });

  const [coordinates, setCoordinates] = useState({
    width: '100%',
    height: '100%',
    latitude: user.coordinates.lat,
    longitude: user.coordinates.lng,
    zoom: 4,
  });

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
        <Marker
          key={userLogged.id}
          latitude={userLogged.coordinates.lat}
          longitude={userLogged.coordinates.lng}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <Point user={userLogged} logged />
        </Marker>
        {users.map(user => (
          <Marker
            key={user.id}
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
