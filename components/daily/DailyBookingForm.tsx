"use client";

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbCircleDotFilled, TbSquareDotFilled } from "react-icons/tb";
import SearchBoxInput from "@/components/ui/SearchBoxInput";
import { Button } from "@/components/ui/button";

interface DailyBookingFormProps {
  onSubmit: (data: any) => void;
  onGetVehicles: () => void;
  pickup: any;
  drop: any;
  setPickup: (data: any) => void;
  setDrop: (data: any) => void;
  estimationId: string | null;
}

const DailyBookingForm: React.FC<DailyBookingFormProps> = ({
  onSubmit,
  onGetVehicles,
  pickup,
  drop,
  setPickup,
  setDrop,
  estimationId,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-6 relative mb-6">
        <SearchBoxInput
          placeholder="Where should we pick you up?"
          icon={<TbCircleDotFilled className="w-5 h-5" />}
          onSelect={(address, lat, lng) =>
            setPickup({ address, lat, lng })
          }
        />
        <SearchBoxInput
          placeholder="Where to?"
          icon={<TbSquareDotFilled className="w-5 h-5" />}
          onSelect={(address, lat, lng) =>
            setDrop({ address, lat, lng })
          }
        />
      </div>

      <div className="flex gap-2">
        <Button
          onClick={onGetVehicles}
          disabled={!pickup.address || !drop.address}
          className="w-full bg-[#5445F9] text-white py-2 rounded-lg font-medium shadow-lg 
                   hover:bg-[#4334e8] transition-all duration-200 
                   hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed
                   hover:shadow-[#5445F9]/20 hover:shadow-xl"
        >
          Get Available vehicle <FaArrowRightLong />
        </Button>
        <Button
          disabled={!estimationId}
          onClick={onSubmit}
          className="w-full bg-[#5445F9] text-white py-2 rounded-lg font-medium shadow-lg 
                   hover:bg-[#4334e8] transition-all duration-200 
                   hover:scale-105
                   hover:shadow-[#5445F9]/20 hover:shadow-xl"
        >
          Book Trip Now
        </Button>
      </div>
    </div>
  );
};

export default DailyBookingForm;
