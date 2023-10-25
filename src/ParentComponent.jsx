import React, { useState } from "react";
import DestinationPage from "./DestinationPage";
import Map from "./Map";

function ParentComponent() {
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  const handleFromValueChange = (value) => {
    setFromValue(value);
  };

  const handleToValueChange = (value) => {
    setToValue(value);
  };

  return (
    <div>
      <DestinationPage
        fromValue={fromValue}
        toValue={toValue}
        onFromValueChange={handleFromValueChange}
        onToValueChange={handleToValueChange}
      />
      <Map fromValue={fromValue} toValue={toValue} />
    </div>
  );
}

export default ParentComponent;
