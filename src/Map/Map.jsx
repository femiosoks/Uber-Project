import React, { useState} from "react";
import { useJsApiLoader, GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api';
import DestinationPage from "../Destination/component/DestinationPage";
import History from "../Destination/component/History";
import ChooseTrip from "./ChooseTrip";

const center = {
  lat: 53.7959260,
  lng: -1.5543586
}

export default function Map(props) {
  const [directions, setDirections] = useState(null);

//Use the DirectionsService to get directions
const getDirections = () => {
  const DirectionsService = new window.google.maps.DirectionsService();
  DirectionsService.route({
    origin: 'Sky Betting & Gaming, 4 Wellington Pl, Leeds LS1 4AJ',
    destination: 'Leeds Train Station, New Station Street, Leeds, UK',
    travelMode: window.google.maps.TravelMode.DRIVING,
  }, (result, status) => {
    if (status === 'OK') {
      setDirections(result);
    } else {
      console.error(`Directions request failed with status: ${status}`);
    }
  });
};

// Fetch directions when the component mounts
useState(() => {
  getDirections();
}, []);

return (
  <div>

    <GoogleMap center={center} zoom={13} mapContainerStyle={{ width: '100%', height: '50vh' }}>
      <Marker position={center} />
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
    <ChooseTrip></ChooseTrip>
    <ChooseTrip></ChooseTrip>
    <ChooseTrip></ChooseTrip>
    <ChooseTrip></ChooseTrip>
  </div>
);
}

  