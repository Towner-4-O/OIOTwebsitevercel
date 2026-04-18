import React, { useEffect, useRef } from "react";
import { GoogleMap, LoadScript, Polyline } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const options = {
  strokeColor: "#800080",
  strokeOpacity: 1,
  strokeWeight: 5,
};

const GoogleMapComponent = ({ pickup, dropoff }: any) => {
  const mapRef = useRef<GoogleMap | null>(null);

  useEffect(() => {
    if (mapRef.current && pickup.lat && pickup.lng) {
      mapRef.current.panTo(pickup);
    }
  }, [pickup]);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
      <GoogleMap mapContainerStyle={containerStyle} center={pickup.lat ? pickup : center} zoom={12} ref={mapRef}>
        {pickup.lat && dropoff.lat && <Polyline path={[pickup, dropoff]} options={options} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
