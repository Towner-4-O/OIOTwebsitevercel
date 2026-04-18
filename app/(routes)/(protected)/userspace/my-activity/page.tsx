"use client";

import { useEffect, useState } from "react";
import TripCard from "@/app/_components/layout/TripCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence } from "framer-motion";
import { getTripHistory } from "@/app/_services/booking";

type Trip = {
  _id: string;
  tripCode: string;
  vehicle: string;
  status: string;
  date: string;
  fare: string;
  dsp: {
    start: string;
    end: string;
    distanceKM: string;
    estTime: string;
  };
  acsp: {
    base: number;
    distfare: number;
    timefare: number;
    baseTime: number;
    nightFare: number;
    conveyance: number;
    googleCharge: number;
    tax: number;
    driverCancelFee: number;
  };
};

type TripsData = {
  Daily?: Trip[];
  Rental?: Trip[];
  Outstation?: Trip[];
  Ongoing?: Trip[];
};

const MyActivity = () => {
  const [trips, setTrips] = useState<TripsData>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTrips() {
      try {
        const data: any = await getTripHistory();
        console.log(data);
        const categorizedTrips: TripsData = {
          Daily: data.filter((trip: Trip | any) => trip.triptype === "daily"),
          Rental: data.filter((trip: Trip | any) => trip.triptype === "rental"),
          Outstation: data.filter(
            (trip: Trip | any) => trip.triptype === "outstation"
          ),
          Ongoing: data.filter((trip: Trip | any) => trip.status === "Progress"),
        };
        setTrips(categorizedTrips);
      } catch (err) {
        console.error("Error fetching trips", err);
      } finally {
        setLoading(false);
      }
    }
    loadTrips();
  }, []);

  if (loading) {
    return (
      <>
        <div className="p-4 md:p-10 h-[750px] flex items-center justify-center">
          <span>Loading...</span>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="p-4 md:p-10 h-[850px] overflow-hidden overscroll-none">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">My Activity</h1>
        </div>
        <div className="max-w-6xl mx-auto overflow-y-auto h-[750px]">
          <Tabs defaultValue="Ongoing" className="w-full">
            <TabsList className="flex space-x-2 mb-6 p-7 justify-start sticky top-0 z-10">
              <TabsTrigger
              value="Ongoing"
              className="px-4 py-2 rounded-full transition-all data-[state=active]:bg-[#5445F9] data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:hover:bg-gray-200"
              >
              Ongoing
              </TabsTrigger>
              <TabsTrigger
              value="Daily"
              className="px-4 py-2 rounded-full transition-all data-[state=active]:bg-[#5445F9] data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:hover:bg-gray-200"
              >
              Daily
              </TabsTrigger>
              <TabsTrigger
              value="Rental"
              className="px-4 py-2 rounded-full transition-all data-[state=active]:bg-[#5445F9] data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:hover:bg-gray-200"
              >
              Rental
              </TabsTrigger>
              <TabsTrigger
              value="Outstation"
              className="px-4 py-2 rounded-full transition-all data-[state=active]:bg-[#5445F9] data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:hover:bg-gray-200"
              >
              Outstation
              </TabsTrigger>
            </TabsList>
            {Object.entries(trips).map(([type, tripsInCategory]) => (
              <TabsContent
              key={type}
              value={type}
              className="space-y-4 relative mt-0"
              >
              {tripsInCategory && tripsInCategory.length > 0 ? (
                tripsInCategory.map((trip) => (
                <AnimatePresence key={trip._id} mode="wait">
                  <TripCard trip={trip} />
                </AnimatePresence>
                ))
              ) : (
                <div className="flex items-center justify-center h-full">
                <span className="text-gray-500">No <span className="font-semibold">{type}</span> Trip Data Found</span>
                </div>
              )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default MyActivity;
