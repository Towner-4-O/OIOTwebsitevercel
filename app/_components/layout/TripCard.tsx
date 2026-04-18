"use client";

import React, { useState } from "react";
import { getTaxiImg } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { TripDialog } from "@/components/trip-dialog";
import { TbCircleDotFilled, TbSquareDotFilled } from "react-icons/tb";
import { BiCurrentLocation } from "react-icons/bi";
import { Button } from "@/components/ui/button";

const TripCard = ({ trip }: { trip: any }) => {
  const [showDialog, setShowDialog] = useState(false);

  const fareDetails = {
    totalDistance: `${trip?.dsp?.distanceKM || "0"} KM`,
    totalTime: trip?.dsp?.estTime || "0 mins",
    baseFare: `₹ ${trip?.acsp?.base?.toFixed(2) || "0.00"}`,
    extraKmCharge: `₹ ${trip?.acsp?.fareForExtraKM?.toFixed(2) || "0.00"}`,
    extraTimeCharge: `₹ ${trip?.acsp?.fareForExtraTime?.toFixed(2) || "0.00"}`,
    baseTime: `${trip?.acsp?.baseTime || 0} mins`,
    baseKm: `${trip?.acsp?.baseKM || 0} KM`,
    extraKm: `${trip?.acsp?.extraKM?.toFixed(2) || "0.00"} KM`,
    nightFare: `₹ ${trip?.acsp?.nightFare?.toFixed(2) || "0.00"}`,
    pickupCharge: `₹ ${trip?.acsp?.conveyance?.toFixed(2) || "0.00"}`,
    googleCharge: `₹ ${trip?.acsp?.googleCharge?.toFixed(2) || "0.00"}`,
    waitingCharge: `₹ ${trip?.acsp?.waitingCharge?.toFixed(2) || "0.00"}`,
    cgst: `₹ ${trip?.acsp?.taxcgst?.toFixed(2) || "0.00"}`,
    sgst: `₹ ${trip?.acsp?.taxsgst?.toFixed(2) || "0.00"}`,
    tax: `₹ ${trip?.acsp?.tax?.toFixed(2) || "0.00"}`,
    roundOff: `₹ ${trip?.acsp?.roundOff?.toFixed(2) || "0.00"}`,
    totalFare: `₹ ${trip?.fare || "0.00"}`,
  };

  const handleTripTrack = (trip: any) => {
    window.open(`https://triptrack.nimmavahana.com/public/shareTrip/${trip._id}`, "_blank");
  };

  return (
    <motion.div
      className="bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 cursor-pointer"
      onClick={() => setShowDialog(true)}
      animate={trip.status === "Progress" ? {
        y: [-2, 2, -2],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      } : {}}
    >
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="md:w-1/4 flex items-center justify-center">
          <div className="relative w-32 h-24 md:w-40 md:h-32 ">
            <Image
              src={getTaxiImg(trip.vehicle) ?? "/icons/auto.png"}
              alt={trip.vehicle}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 128px, 160px"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="space-y-2 md:w-1/3">
            <div className="flex items-center gap-2">
                <span
                className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-2
                ${
                  trip.status === "Finished"
                  ? "bg-green-100 text-green-700"
                  : trip.status === "Started"
                  ? "bg-blue-100 text-blue-700"
                  : trip.status === "Progress"
                  ? "bg-yellow-100 text-yellow-700"
                  : trip.status === "Cancelled"
                  ?"bg-red-100 text-red-700"
                  :  "bg-gray-100 text-gray-700"
                }`}
                >
                {trip.status}
                {trip.status === "Progress" && (
                  <motion.div
                    className="w-2 h-2 bg-yellow-500 rounded-full"
                    animate={{
                      opacity: [1, 0.5, 1],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                  />
                )}
                </span>
              <span className="text-sm text-gray-500">{trip.date}</span>
            </div>
            <h3 className="font-semibold text-lg text-gray-900">
              {trip.vehicle.charAt(0).toUpperCase() + trip.vehicle.slice(1)}
            </h3>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-primary">
                ₹ {trip.fare}
              </span>
              <span className="text-sm text-gray-500">
                • {trip.dsp.estTime}
              </span>
            </div>
          </div>

          <div className="flex-1 flex gap-3">
            <div className="flex flex-col items-center">
              <TbCircleDotFilled className="text-[#5445F9]" size={16} />
              <div className="h-full my-1 border-l-2 border-dotted border-[#5445F9]" />
              <TbSquareDotFilled className="text-[#5445F9]" size={16} />
            </div>

            <div className="flex-1 flex flex-col justify-between min-h-[80px]">
              <div className="space-y-1">
                <p className="text-xs font-medium text-[#5445F9]/80">PICKUP</p>
                <h3 className="font-medium text-gray-800 text-sm line-clamp-2">
                  {trip.dsp.start}
                </h3>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-medium text-[#5445F9]/80">DROP</p>
                <h3 className="font-medium text-gray-800 text-sm line-clamp-2">
                  {trip.dsp.end}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {trip.status === "Progress" && (
        <div className="mt-4 flex justify-end gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-primary border-primary hover:bg-primary/10"
            onClick={(e) => {
              e.stopPropagation();
              handleTripTrack(trip);
            }}
          >
            <BiCurrentLocation className="mr-2 h-4 w-4" />
            Live Track
          </Button>
          <div className="bg-primary/10 px-3 py-1.5 rounded-full flex items-center gap-2">
            <span className="text-sm font-medium text-primary">OTP:</span>
            <span className="text-sm font-bold text-primary">
              {trip.tripOTP[0] || "1234"}
            </span>
          </div>
        </div>
      )}

      <TripDialog
        isOpen={showDialog}
        onClose={() => setShowDialog(false)}
        trip={trip}
        fareDetails={fareDetails}
      />
    </motion.div>
  );
};

export default TripCard;
