import { GoogleMap, LoadScript } from '@react-google-maps/api'
import Geocode from 'react-geocode'
import React from 'react'
import { useAtom, useSetAtom } from 'jotai'
import { destinationAddress } from 'state'

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

type Coords = { latitude: string; longitude: string }

Geocode.setApiKey(GOOGLE_MAPS_API_KEY)
Geocode.setRegion('br')

const getLatLng = (evt: google.maps.MapMouseEvent): Coords => {
  if (!evt.latLng)
    return {
      latitude: '0',
      longitude: '0'
    }

  return {
    latitude: evt.latLng.lat().toString(),
    longitude: evt.latLng.lng().toString()
  }
}

const getAddressFromLatLng = (coords: Coords) => {
  const { latitude, longitude } = coords

  return Geocode.fromLatLng(latitude, longitude).then(
    (response) => {
      const address = response.results[0].formatted_address as string

      console.log('GEOCODE response', response)
      return address
    },
    (error) => {
      console.error(error)
      return `${error}`
    }
  )
}

const containerStyle = {
  width: '400px',
  height: '400px'
}

const center = {
  lat: -3.745,
  lng: -38.523
}

function EmbeddedMap() {
  const [address, setAddress] = useAtom(destinationAddress)

  const setAddressFromCoordinates = async (evt: google.maps.MapMouseEvent) => {
    const coordinates = getLatLng(evt)
    const addr = await getAddressFromLatLng(coordinates)
    setAddress(addr)
  }

  return (
    <div className='flex w-100'>
      <div className='border p-3'>
        <LoaderContainer>
          <GoogleMap
            onClick={setAddressFromCoordinates}
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            Child components, such as markers, info windows, etc.
            <></>
          </GoogleMap>
        </LoaderContainer>
      </div>
      <div className='border p-3 w-50'>
        <input value={address} className='border' />
      </div>
    </div>
  )
}

function LoaderContainer({ children }: { children: React.ReactNode }) {
  return (
    <>
      {window.google === undefined ? (
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
          {children}
        </LoadScript>
      ) : (
        <>{children}</>
      )}
    </>
  )
}

export default React.memo(EmbeddedMap)
