"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DatePickerDialog from "./DatePickerDialog";
import { fetchRentalPackages } from "@/app/_services/booking";

interface RentalBookingFormProps {
  pickup: any;
  onSubmit: (data: any) => void;
  onPackageSelect: (pkg: any, scID: any) => void;
  canBookRental: boolean;
}

const RentalBookingForm: React.FC<RentalBookingFormProps> = ({
  pickup,
  onSubmit,
  onPackageSelect,
  canBookRental
}) => {
  const [bookingType, setBookingType] = useState<"now" | "schedule">("now");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [packages, setPackages] = useState<any>([]);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (pickup?.address) {
      fetchPackages();
    }
  }, [pickup]);

  const fetchPackages = async () => {
    setIsLoading(true);
    try {
      const response:any = await fetchRentalPackages({
        pick: pickup.address,
        pickupLat: pickup.lat,
        pickupLng: pickup.lng,
      });
      setPackages(response || []);
    } catch (error) {
      console.error("Error fetching packages:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePackageSelect = (packageId: string) => {
    const selected = packages?.packageDetail?.find((pkg: any) => pkg?._id === packageId);
    setSelectedPackage(selected);
    onPackageSelect(selected, packages?.serviceDetail);
  };

  const handleScheduleClick = () => {
    setBookingType("schedule");
    setIsDatePickerOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4 mb-6">
        <Button
          variant={bookingType === "now" ? "default" : "outline"}
          onClick={() => setBookingType("now")}
          className={`flex-1 ${
            bookingType === "now"
              ? "bg-[#5445F9] hover:bg-[#4334e8] text-white"
              : "hover:bg-[#5445F9]/5"
          }`}
        >
          Ride Now
        </Button>
        <Button
          variant={bookingType === "schedule" ? "default" : "outline"}
          onClick={handleScheduleClick}
          className={`flex-1 ${
            bookingType === "schedule"
              ? "bg-[#5445F9] hover:bg-[#4334e8] text-white"
              : "hover:bg-[#5445F9]/5"
          }`}
        >
          Schedule
        </Button>
      </div>

      <DatePickerDialog
        isOpen={isDatePickerOpen}
        onOpenChange={setIsDatePickerOpen}
        selectedDate={selectedDate}
        onDateSelect={setSelectedDate}
        bookingType={bookingType}
      />

      <Select
        onValueChange={handlePackageSelect}
        disabled={isLoading || !pickup.address}
      >
        <SelectTrigger>
          <SelectValue placeholder={isLoading ? "Loading packages..." : "Select package"} />
        </SelectTrigger>
        <SelectContent>
          {packages?.packageDetail?.map((pkg:any) => (
            <SelectItem key={pkg._id} value={pkg._id.toString()}>
              {pkg.duration} Hour / {pkg.distance} KM
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {canBookRental && (
        <Button
          onClick={() => onSubmit({ selectedPackage, bookingType })}
          className="w-full bg-[#5445F9] text-white py-2 rounded-lg font-medium shadow-lg 
            hover:bg-[#4334e8] transition-all duration-200 
            hover:scale-105
            hover:shadow-[#5445F9]/20 hover:shadow-xl"
        >
          Book Rental Trip
        </Button>
      )}
    </div>
  );
};

export default RentalBookingForm;