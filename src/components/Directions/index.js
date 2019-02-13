import React from "react";
import MapViewDirections from "react-native-maps-directions";

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyA4c0Hqfkl5GcC8K0DKNB43gUFerugsZec"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
