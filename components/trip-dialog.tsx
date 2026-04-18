import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getTaxiImg } from "@/lib/utils";
import Image from "next/image";
import { FaLocationDot, FaRegFilePdf } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { TbReload } from "react-icons/tb";
import { BiCurrentLocation } from "react-icons/bi";
import { motion } from "framer-motion";

interface FareDetails {
  totalDistance: string;
  totalTime: string;
  baseFare: string;
  extraKmCharge: string;
  extraTimeCharge: string;
  baseTime: string;
  baseKm: string;
  extraKm: string;
  nightFare: string;
  pickupCharge: string;
  googleCharge: string;
  waitingCharge: string;
  cgst: string;
  sgst: string;
  tax: string;
  roundOff: string;
  totalFare: string;
}

interface TripDialogProps {
  isOpen: boolean;
  onClose: () => void;
  trip: any;
  fareDetails: FareDetails;
}

export function TripDialog({
  isOpen,
  onClose,
  trip,
  fareDetails,
}: TripDialogProps) {
  
  const basicDetails = {
    "Total Distance": fareDetails.totalDistance,
    "Total Time": fareDetails.totalTime,
    "Base Km": fareDetails.baseKm,
    "Extra Km": fareDetails.extraKm,
  };

  const charges = {
    "Base Fare": fareDetails.baseFare,
    "Extra KM Charge": fareDetails.extraKmCharge,
    "Extra Time Charge": fareDetails.extraTimeCharge,
    "Night Fare": fareDetails.nightFare,
    "Pickup Charge": fareDetails.pickupCharge,
    "Waiting Charge": fareDetails.waitingCharge,
    "Google Charge": fareDetails.googleCharge,
  };

  const taxes = {
    CGST: fareDetails.cgst,
    SGST: fareDetails.sgst,
    "Total Tax": fareDetails.tax,
    "Round Off": fareDetails.roundOff,
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Trip Details  - {trip?.tripno || "TWNR****"} <span className="text-sm text-gray-500">Booking ID</span></DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Status and Date */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-2
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
            <div className="flex gap-2">
              {trip.status === "Progress" && (
                <>
                  <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary/10">
                    <BiCurrentLocation className="mr-2 h-4 w-4" />
                    Live Track
                  </Button>
                  <div className="bg-primary/10 px-3 py-1.5 rounded-full flex items-center gap-2">
                    <span className="text-sm font-medium text-primary">OTP:</span>
                    <span className="text-sm font-bold text-primary">{trip.tripOTP[0] || "1234"}</span>
                  </div>
                </>
              )}
              <Button variant="outline" size="sm">
                <TbReload className="mr-2 h-4 w-4" />
                Rebook
              </Button>
              {/* <Button variant="outline" size="sm">
                <FaRegFilePdf className="mr-2 h-4 w-4" />
                Download Invoice
              </Button> */}
            </div>
          </div>

          {/* Vehicle and Route Info */}
          <div className="grid md:grid-cols-3 gap-6 bg-gray-50 rounded-xl p-6">
            <div className="relative h-48 md:h-full">
              <Image
                src={getTaxiImg(trip.vehicle) ?? "/icons/auto.png"}
                alt={trip.vehicle}
                fill
                className="object-contain"
              />
            </div>

            <div className="md:col-span-2 space-y-6">
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <GoDotFill className="text-primary" size={20} />
                  <div className="w-0.5 bg-gradient-to-b from-primary to-primary/30 h-full my-1" />
                  <FaLocationDot className="text-primary" size={20} />
                </div>

                <div className="flex-1 space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500">PICKUP</p>
                    <h3 className="font-medium text-gray-800">
                      {trip?.dsp?.start}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500">DROP</p>
                    <h3 className="font-medium text-gray-800">
                      {trip?.dsp?.end}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Driver Details */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold mb-4">Driver Details</h3>
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-gray-200 relative">
                <Image
                  src="/icons/driver-3d.png"
                  alt="Driver"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <div>
                <h4 className="font-medium">
                  {trip?.tripinvoicedriverdetails?.drivername ||
                    trip?.dvr ||
                    "John Doe"}
                </h4>
                <p className="text-sm text-gray-500">
                  Phone: {trip?.tripinvoicedriverdetails?.driverphone || "N/A"}
                  <br />
                  Vehicle:{" "}
                  {trip?.tripinvoicedriverdetails?.drivervehicleNumber || "N/A"}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  {"★".repeat(4)}
                  {"☆".repeat(1)}
                  <span className="text-sm text-gray-500">
                    {trip?.driverfb?.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Fare Breakdown */}
         {trip.status !== "Progress" && 
           (
            <div className="bg-gray-50 rounded-xl p-6">
           <h3 className="font-semibold mb-4">Fare Details</h3>
           <div className="space-y-6">
             {/* Basic Details */}
             <div className="space-y-3">
               <h4 className="text-sm font-medium text-gray-500">
                 Trip Details
               </h4>
               {Object.entries(basicDetails).map(([key, value]) => (
                 <div key={key} className="flex justify-between text-sm">
                   <span className="text-gray-600">{key}</span>
                   <span className="font-medium">{value}</span>
                 </div>
               ))}
             </div>

             {/* Charges */}
             <div className="space-y-3">
               <h3 className="font-semibold mb-4">Charges</h3>
               {Object.entries(charges).map(([key, value]) => (
                 <div key={key} className="flex justify-between text-sm">
                   <span className="text-gray-600">{key}</span>
                   <span className="font-medium">{value}</span>
                 </div>
               ))}
             </div>

             {/* Taxes */}
             <div className="space-y-3">
               <h3 className="font-semibold mb-4">Taxes & Final Amount</h3>
               {Object.entries(taxes).map(([key, value]) => (
                 <div key={key} className="flex justify-between text-sm">
                   <span className="text-gray-600">{key}</span>
                   <span className="font-medium">{value}</span>
                 </div>
               ))}
               <div className="flex justify-between text-base font-bold pt-2 border-t">
                 <span>Total Fare</span>
                 <span>{fareDetails.totalFare}</span>
               </div>
             </div>
           </div>
         </div>
           )
         }

          {/* Help Section */}
          <div className="flex justify-center">
            <Button variant="outline" className="w-full max-w-sm">
              <MdOutlineHeadsetMic className="mr-2 h-5 w-5" />
              Need Help?
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
