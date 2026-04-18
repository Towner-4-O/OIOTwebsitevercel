import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoInformationCircleOutline } from "react-icons/io5";

interface FareDetailsProps {
  fareDetails: any;
  type?: 'daily' | 'rental';
}

const FareDetailsDialog = ({ fareDetails, type = 'daily' }: FareDetailsProps) => {
  const getRentalFareDetails = () => [
    {
      label: "Package Name",
      value: fareDetails?.packageName || '-',
    },
    {
      label: "Package Duration",
      value: `${fareDetails?.packageDuration || 0} Hour`,
    },
    {
      label: "Package Distance",
      value: `${fareDetails?.packageDistance || 0} KM`,
    },
    {
      label: "Base KM",
      value: `${fareDetails?.baseKM || 0} KM`,
    },
    {
      label: "Extra KM",
      value: `${fareDetails?.extraKM || 0} KM`,
    },
    {
      label: "Base Time",
      value: `${fareDetails?.baseTime || 0} Hour`,
    },
    {
      label: "Extra Time",
      value: `${fareDetails?.extraTime || 0} Hour`,
    },
    {
      label: "Package Fare",
      value: `₹ ${fareDetails?.packageFare || 0}`,
    },
    {
      label: "Tax Amount",
      value: `₹ ${fareDetails?.taxAmount || 0}`,
    },
    {
      label: "TDS",
      value: `₹ ${fareDetails?.taxTDS || 0}`,
    }
  ];

  const getDailyFareDetails = () => [
    {
      label: "Total Distance",
      value: `${fareDetails?.vehicleDetailsAndFare?.fareDetails?.distance || 0} KM`,
    },
    {
      label: "Total Time",
      value: fareDetails?.distanceDetails?.timeLable || '0',
    },
    {
      label: "Base Fare",
      value: `₹ ${fareDetails?.vehicleDetailsAndFare?.fareDetails?.BaseFare || 0}`,
    },
    {
      label: "Extra KM Charge",
      value: `₹ ${fareDetails?.vehicleDetailsAndFare?.fareDetails?.KMFare || 0}`,
      subtext: `(${fareDetails?.vehicleDetailsAndFare?.fareDetails?.extraKM || 0}/KM * ${fareDetails?.vehicleDetailsAndFare?.fareDetails?.perKMRate || 0})`,
    },
    {
      label: "Extra Time Charge",
      value: `₹ ${fareDetails?.vehicleDetailsAndFare?.fareDetails?.travelFare || 0}`,
      subtext: `(${fareDetails?.vehicleDetailsAndFare?.fareDetails?.extratime || 0}min * ${fareDetails?.vehicleDetailsAndFare?.fareDetails?.travelRate || 0})`,
    },
    {
      label: "Base Time",
      value: `${fareDetails?.vehicleDetailsAndFare?.fareDetails?.basetime || 0} mins`,
    },
    {
      label: "Night Fare/Peak Fare",
      value: `₹ ${fareDetails?.nightFare || 0}`,
    },
    {
      label: "Pickup Charge",
      value: `₹ ${fareDetails?.vehicleDetailsAndFare?.fareDetails?.pickupCharge || 0}`,
    },
    {
      label: "Google Charge",
      value: `₹ ${fareDetails?.vehicleDetailsAndFare?.fareDetails?.googleCharge || 0}`,
    },
    {
      label: "TAX",
      value: `₹ ${fareDetails?.vehicleDetailsAndFare?.fareDetails?.tax || 0}`,
    },
    {
      label: "Cancellation Fee",
      value: `₹ 0`,
    },
  ];

  const fareItems = type === 'rental' ? getRentalFareDetails() : getDailyFareDetails();
  const totalFare = type === 'rental' 
    ? fareDetails?.fare 
    : fareDetails?.vehicleDetailsAndFare?.fareDetails?.totalFare;

  return (
    <Dialog>
      <DialogTrigger>
        <IoInformationCircleOutline className="w-5 h-5 text-[#5445F9] cursor-pointer hover:scale-110 transition-transform" />
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold mb-4">
            Fare Breakdown - {type === 'rental' ? 'Rental Package' : 'Daily Trip'}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="grid gap-2">
              {fareItems.map((item:any, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-1 border-b border-gray-200 last:border-0"
                >
                  <div className="text-gray-600">
                    {item.label}
                    {item.subtext && (
                      <span className="text-xs text-gray-400 block">
                        {item.subtext}
                      </span>
                    )}
                  </div>
                  <div className="font-medium">{item.value}</div>
                </div>
              ))}

              <div className="flex items-center justify-between pt-3 border-t-2 border-[#5445F9] mt-2">
                <div className="text-lg font-semibold text-[#5445F9]">
                  Total Fare
                </div>
                <div className="text-lg font-bold">
                  ₹ {totalFare || 0}
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              {type === 'rental' 
                ? 'Fare includes package base fare, extra distance and time charges if applicable.'
                : 'Fare includes base fare, plus distance and time charges with applicable fees.'}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FareDetailsDialog;
