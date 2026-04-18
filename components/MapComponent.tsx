import React, {
  useMemo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  GoogleMap,
  DirectionsService,
  DirectionsRenderer,
  Marker,
} from "@react-google-maps/api";

interface MapComponentProps {
  pickup: { lat: number; lng: number };
  drop: { lat: number | null; lng: number | null };
  onDirectionsChange: (result: google.maps.DirectionsResult | null) => void;
  directions: google.maps.DirectionsResult | null;
}

const mapStyles: any = [
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [{ color: "#e6d5f5" }],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [{ color: "#e6d5f5" }],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [{ color: "#850dd7" }],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#850dd7" }],
  },
  {
    featureType: "administrative.neighborhood",
    elementType: "labels.text.fill",
    stylers: [{ color: "#850dd7" }],
  },
  {
    featureType: "landscape",
    elementType: "geometry.fill",
    stylers: [{ color: "#f5ebff" }],
  },
  {
    featureType: "poi",
    elementType: "geometry.fill",
    stylers: [{ color: "#f0e0ff" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#4E5561" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [{ color: "#ead6ff" }],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#850dd7" }],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [{ color: "#f2e6ff" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [{ color: "#f2e6ff" }],
  },
  {
    featureType: "road.local",
    elementType: "geometry.fill",
    stylers: [{ color: "#f2e6ff" }],
  },
  {
    featureType: "transit.line",
    elementType: "geometry.fill",
    stylers: [{ color: "#e8d3ff" }],
  },
  {
    featureType: "transit.station",
    elementType: "geometry.fill",
    stylers: [{ color: "#e8d3ff" }],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [{ color: "#dcc6ff" }],
  },
];

const MapComponent: React.FC<MapComponentProps> = ({
  pickup,
  drop,
  onDirectionsChange,
  directions,
}) => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [mapZoom, setMapZoom] = useState(15);

  const defaultCenter = useMemo(
    () => ({ lat: pickup.lat, lng: pickup.lng }),
    [pickup]
  );

  const directionsCallback = useCallback(
    (
      result: google.maps.DirectionsResult | null,
      status: google.maps.DirectionsStatus
    ) => {
      if (status === google?.maps.DirectionsStatus.OK) {
        onDirectionsChange(result);
      } else {
        console.error("Directions request failed:", status);
      }
    },
    [onDirectionsChange]
  );

  useEffect(() => {
    if (mapRef.current && pickup && drop.lat !== null && drop.lng !== null) {
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(new window.google.maps.LatLng(pickup.lat, pickup.lng));
      bounds.extend(new window.google.maps.LatLng(drop.lat, drop.lng));

      if (mapZoom !== 12) {
        mapRef.current.fitBounds(bounds);
        setMapZoom(12);
      }
    }
  }, [pickup, drop, directions, mapZoom]);

  return (
    <div className="w-full h-[300px] md:h-full relative rounded-xl overflow-hidden">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={defaultCenter}
        zoom={mapZoom}
        options={{
          styles: mapStyles,
          disableDefaultUI: true,
          zoomControl: true,
        }}
        onLoad={(map) => {
          mapRef.current = map;
        }}
      >
        <Marker
          position={pickup}
          icon={{
            url: "/icons/pickup-icon.png",
            scaledSize: new window.google.maps.Size(18, 18),
          }}
        />

        {drop.lat !== null && drop.lng !== null && (
          <>
            <Marker
              position={{ lat: drop.lat, lng: drop.lng }}
              icon={{
                url: "/icons/drop-icon.png",
                scaledSize: new window.google.maps.Size(18, 18),
              }}
            />

            <DirectionsService
              options={{
                destination: { lat: drop.lat, lng: drop.lng },
                origin: { lat: pickup.lat, lng: pickup.lng },
                travelMode: google.maps.TravelMode.DRIVING,
              }}
              callback={directionsCallback}
            />
          </>
        )}

        {directions && (
          <DirectionsRenderer
            options={{
              directions,
              polylineOptions: {
                strokeColor: "#5546fa",
                strokeWeight: 4,
                strokeOpacity: 1.0,
              },
              suppressMarkers: true,
            }}
          />
        )}
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
