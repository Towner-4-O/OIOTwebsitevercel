"use client";

import React from "react";
import { FaClock, FaRupeeSign, FaCarSide, FaCar, FaTaxi } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { SkeletonEstimation, SkeletonTripDetail } from "@/components/skeltion";
import FareDetailsDialog from "@/app/_components/dialogs/FareDetailsDialog";

interface TripDetailsProps {
  isLoading: boolean;
  estFare: any;
  tripData: any;
  activeTab: string;
  selectedService: any;
  selectedPackage: any; // Add this prop
}

const TripDetails: React.FC<TripDetailsProps> = ({
  isLoading,
  estFare,
  tripData,
  activeTab,
  selectedService,
  selectedPackage, // Add this prop
}) => {
  if (isLoading) {
    return (
      <>
        <SkeletonEstimation />
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <SkeletonTripDetail key={i} />
          ))}
        </div>
      </>
    );
  }

  if (activeTab === "rental") {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg gap-1">
          <div className="flex items-center gap-2">
            <FaClock className="text-[#5445F9]" />
            <span className="text-lg text-[#5445F9]">
              Duration:{" "}
              <strong className="text-black">
                {selectedPackage?.duration || 0} Hours
              </strong>
            </span>
          </div>
          <div className="w-[2px] rounded-full h-5 bg-gray-600/20"></div>
          <div className="flex items-center gap-2">
            <FaRupeeSign className="text-[#5445F9]" />
            <span className="text-lg text-[#5445F9]">
              Package Price:{" "}
              <strong className="text-black">
                ₹{selectedPackage?.price || 0}
              </strong>
            </span>
            <FareDetailsDialog fareDetails={estFare} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <MdLocalOffer className="text-[#5445F9]" />
              <span className="text-[#5445F9] font-medium">
                Package:
              </span>
              <strong>
                {selectedService?.distance || 0} KM
              </strong>
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <FaCarSide className="text-[#5445F9]" />
              <span className="text-[#5445F9] font-medium">
                Duration:
              </span>
              <strong>
                {selectedService?.duration || 0} Hours
              </strong>
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <FaCar className="text-[#5445F9]" />
              <span className="text-[#5445F9] font-medium">
                Booking ID:
              </span>
              <strong>{tripData?.tripId || "*****"}</strong>
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <FaTaxi className="text-[#5445F9]" />
              <span className="text-[#5445F9] font-medium">
                Status:
              </span>
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                {tripData ? "Confirmed" : "Pending"}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg gap-1">
        <div className="flex items-center gap-2">
          <FaClock className="text-[#5445F9]" />
          <span className="text-lg text-[#5445F9]">
            Estimated Time:{" "}
            <strong className="text-black">
              {estFare?.distanceDetails?.timeLable || 0}
            </strong>
          </span>
        </div>
        <div className="w-[2px] rounded-full h-5 bg-gray-600/20"></div>
        <div className="flex items-center gap-2">
          <FaRupeeSign className="text-[#5445F9]" />
          <span className="text-lg text-[#5445F9]">
            Estimated Price:{" "}
            <strong className="text-black">
              ₹{estFare?.vehicleDetailsAndFare?.fareDetails?.fareAmt || 0}
            </strong>
          </span>
          <FareDetailsDialog fareDetails={estFare} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2">
            <MdLocalOffer className="text-[#5445F9]" />
            <span className="text-[#5445F9] font-medium">
              OTP:
            </span>
            <strong className="text-lg">
              {tripData?.OTP || "*****"}
            </strong>
          </div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2">
            <FaCarSide className="text-[#5445F9]" />
            <span className="text-[#5445F9] font-medium">
              Distance:
            </span>
            <strong>
              {estFare?.vehicleDetailsAndFare?.fareDetails?.distance || 0} km
            </strong>
          </div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2">
            <FaCar className="text-[#5445F9]" />
            <span className="text-[#5445F9] font-medium">
              Booking ID:
            </span>
            <strong>{tripData?.tripId || "*****"}</strong>
          </div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2">
            <FaTaxi className="text-[#5445F9]" />
            <span className="text-[#5445F9] font-medium">
              Status:
            </span>
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm">
              {tripData ? "Confirmed" : "Pending"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
