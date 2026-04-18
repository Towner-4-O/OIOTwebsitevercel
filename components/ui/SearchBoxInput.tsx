"use client";

import React, { useRef } from "react";
import { StandaloneSearchBox } from "@react-google-maps/api";

interface SearchBoxInputProps {
  placeholder: string;
  icon: React.ReactNode;
  onSelect: (address: string, lat: number, lng: number) => void;
}

const SearchBoxInput: React.FC<SearchBoxInputProps> = ({
  placeholder,
  icon,
  onSelect,
}) => {
  const inputRef = useRef<google.maps.places.SearchBox | null>(null);

  const handlePlaceSelect = () => {
    const places = inputRef.current?.getPlaces();
    if (places && places.length > 0) {
      const place = places[0];
      const location = place.geometry?.location;
      if (location) {
        onSelect(place.formatted_address || "", location.lat(), location.lng());
      }
    }
  };

  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5445F9]">
        {icon}
      </div>
      <StandaloneSearchBox
        onLoad={(ref) => (inputRef.current = ref)}
        onPlacesChanged={handlePlaceSelect}
      >
        <input
          type="text"
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-3 bg-white/70 border border-[#5445F9]/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#5445F9]"
        />
      </StandaloneSearchBox>
    </div>
  );
};

export default SearchBoxInput;
