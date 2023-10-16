/* import React from "react";
import GoogleMapReact from 'google-map-react';



export default function Map(){
  const defaultProps = {
    center: {
      lat: 53.7959260,
      lng: -1.5543586
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAvFehB5J0Mox2U6ssumfOxNmnCGaZAUkA" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        
      </GoogleMapReact>
    </div>
  );
}
*/



import React from "react";
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';

const center = {
  lat: 53.7959260,
  lng: -1.5543586
}

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "Api"
    
    //googleMapsApiKey: process.env.googleMapsApiKey
  })
  if (!isLoaded)
    return <div>Loading...</div>;

  return (
    
    <div>
      <GoogleMap center={ center} zoom ={11} mapContainerStyle={{width: '100%', height: '100vh'}}>


      <Marker position={center} />
      </GoogleMap>



    </div>
  );
}




