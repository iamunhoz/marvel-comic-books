import { GoogleMap, LoadScript } from '@react-google-maps/api'
import Geocode from 'react-geocode'
import React from 'react'
import { useAtom, useSetAtom } from 'jotai'
import { addressAtom } from 'components/forms/FormDelivery/form-fields/formState'

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
      return response.results[0].formatted_address as string
    },
    (error) => {
      console.error(error)
      return `${error}`
    }
  )
}

export const getContainerSize = () => {
  let span = 512

  if (window.innerWidth < 427) span = 330

  return {
    width: `${span}px`,
    height: `${span}px`
  }
}

const center = {
  lat: -3.745,
  lng: -38.523
}

function EmbeddedMap() {
  const setAddress = useSetAtom(addressAtom)

  const setAddressFromCoordinates = async (evt: google.maps.MapMouseEvent) => {
    const coordinates = getLatLng(evt)
    const addr = await getAddressFromLatLng(coordinates)
    setAddress(addr)
  }

  return (
    <LoaderContainer>
      <div className='flex flex-col'>
        <GoogleMap
          onClick={setAddressFromCoordinates}
          mapContainerStyle={getContainerSize()}
          center={center}
          zoom={10}
        >
          Child components, such as markers, info windows, etc.
          <></>
        </GoogleMap>
        <p className='text-gray-600 italic w-100 text-center'>
          Clique em um endereço no mapa para selecioná-lo
        </p>
      </div>
    </LoaderContainer>
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
