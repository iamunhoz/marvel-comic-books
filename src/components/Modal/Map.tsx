import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Geocode from "react-geocode";
import React from 'react';

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

type Coords = { latitude: string; longitude: string }

Geocode.setApiKey(GOOGLE_MAPS_API_KEY);
Geocode.setRegion("br");

const getLatLng = (evt: google.maps.MapMouseEvent):Coords => {
  if (!evt.latLng) return {
    latitude: '0',
    longitude: '0'
  }

  return {
    latitude: evt.latLng.lat().toString(),
    longitude: evt.latLng.lng().toString(),
  }

}

const getAddressFromLatLng = (coords: Coords) => {
  const { latitude, longitude } = coords;

  Geocode.fromLatLng(latitude, longitude).then(
    (response) => {
      // const address = response.results[0].formatted_address;
      console.log('GEOCODE response', response);
    },
    (error) => {
      console.error(error);
    }
  );
}

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function EmbeddedMap() {
  return (
    <LoadScript
      googleMapsApiKey={GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        onClick={(evt) => {
          getAddressFromLatLng(getLatLng(evt))
        }}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        Child components, such as markers, info windows, etc.
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(EmbeddedMap)