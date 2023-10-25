import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useJsApiLoader, GoogleMap, Marker, Autocomplete } from '@react-google-maps/api';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../styles/Destination.css';
import History from "./History";

const containerStyle = {
  width: '100%',
  height: '300px',
};

function DestinationPage(props) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "myApiKey",
    libraries: ['places']
  });

  const destinationRef = useRef();
  const originRef = useRef();

  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  if (!isLoaded) return <div>Loading...</div>;

  const onLoad = (autocomplete) => {
    console.log('Autocomplete loaded:', autocomplete);
  };

  const handleAutocompleteChange = (value, type) => {
    if (type === "from") {
      setFromValue(value);
    } else if (type === "to") {
      setToValue(value);
    }
  };

  const onPlaceChanged = (type) => {
    return () => {
      const inputField = type === "from" ? originRef.current : destinationRef.current;
      const value = inputField.value;
      handleAutocompleteChange(value, type);
    };
  };

  const handleSearchClick = () => {
    console.log(fromValue);
    console.log(toValue);
  };

  return (
    <div className={css(styles.container)}>
      
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged("from")}>
        <input
          type="text"
          className="fromForm"
          placeholder="From where?"
          ref={originRef}
        />
      </Autocomplete>

      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged("to")}>
        <input
          type="text"
          className="toForm"
          placeholder="Where to?"
          ref={destinationRef}
        />
      </Autocomplete>

      <Link to={"/map"}>
      <button onClick={handleSearchClick}>Search</button>
      </Link>
      <History></History>
      <History></History>
      <History></History>
      <History></History>
      <History></History>
      
    </div>
  );
}

export default DestinationPage;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column", 
    margin: "50px",
  },

});
