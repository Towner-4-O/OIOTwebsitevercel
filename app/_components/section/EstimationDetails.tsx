"use client";

import React, { useState } from "react";
import { FaCar, FaTaxi, FaCarSide, FaClock, FaRupeeSign } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbCircleDotFilled, TbSquareDotFilled } from "react-icons/tb";
import { LoadScript } from "@react-google-maps/api";
import SearchBoxInput from "@/components/ui/SearchBoxInput";
import MapComponent from "@/components/MapComponent";
import { motion } from "framer-motion";
import { SkeletonEstimation, SkeletonTripDetail } from "@/components/skeltion";
import { Button } from "@/components/ui/button";
import {
  bookTaxi,
  fetchEstimationFare,
  fetchRentalVehicles,
  fetchServiceBasicFare,
  requestRentalTaxi,
  fetchRentalFareEstimationSingle,
} from "@/app/_services/booking";
import FareDetailsDialog from "../dialogs/FareDetailsDialog";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import RentalBookingForm from "@/components/rental/RentalBookingForm";
import ServiceTypesList from "@/components/service/ServiceTypesList";

const libraries: "places"[] = ["places"];
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

const EstimationDetails = () => {
  const pathname = usePathname();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("daily");
  const [pickup, setPickup] = useState<any>({
    address: "",
    lat: 12.971784,
    lng: 77.592077,
  });
  const [drop, setDrop] = useState<{
    address: string;
    lat: number | any;
    lng: number | any;
  }>({ address: "", lat: null, lng: null });
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [serviceTypes, setServiceTypes] = useState<any>([]);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [estFare, setEstFare] = useState<any>(null);
  const [tripData, setTripData] = useState<any>(null);
  const [selectedRentalPackage, setSelectedRentalPackage] = useState<any>(null);
  const [canBookRental, setCanBookRental] = useState(false);

  const tabs = [
    { id: "daily", label: "Daily", icon: FaTaxi },
    { id: "rental", label: "Rental", icon: FaCar },
    { id: "outstation", label: "Outstation", icon: FaCarSide },
  ];

  const nextSlide = () => {
    if (currentIndex < serviceTypes.length - 3) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  if (!apiKey) return <div className="text-red-500">API Key is missing!</div>;

  // api calling -- >>
  const handleAvailablevehicle = async () => {
    try {
      const response = {
        pick: pickup.address || null,
        pickupLat: pickup.lat || null,
        pickupLng: pickup.lng || null,
        dropLat: drop.lat || null,
        dropLng: drop.lng || null,
        drop: drop.address || null,
      };
      const data = await fetchServiceBasicFare(response);
      setServiceTypes(data?.vehicleCategories || []);
    } catch (error) {
      console.error("Error fetching serviceBasicFare:", error);
    }
  };

  const handleEstimation = async (service: any) => {
    try {
      const response = {
        pick: pickup.address || null,
        pickupLat: pickup.lat || null,
        pickupLng: pickup.lng || null,
        dropLat: drop.lat || null,
        dropLng: drop.lng || null,
        drop: drop.address || null,
        serviceTypeId: service._id || null,
        bookingType: activeTab || null,
        vehicletype: service.type || null,
        share: true,
        noofshare: service._id || null,
      };
      const data = await fetchEstimationFare(response);
      setEstFare(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching serviceBasicFare:", error);
    }
  };

  const handleRentalEstimation = async (service: any) => {
    try {
      const response = await fetchRentalFareEstimationSingle({
        vehicleTypeId: selectedService._id,
        packageId: selectedRentalPackage._id,
        tripTypeCode: "rental",
      });

      if (response.success) {
        setEstFare(response.data);
        setIsLoading(false);
        setCanBookRental(true);
      }
    } catch (error) {
      console.error("Error fetching rental fare estimation:", error);
      setCanBookRental(false);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch rental fare estimation.",
      });
    }
  };

  const handleBooking = async () => {
    // if (!localStorage.getItem("token")) {
    //   router.push("rider-auth/login");
    //   return;
    // }

    try {
      const bookingRequest = {
        tripType: activeTab || null,
        paymentMode: "Cash",
        requestFrom: "web",
        bookingType: "rideNow",
        serviceType: selectedService?.type || null,
        estimationId: estFare?.estimationId || null,
        tripTime: "",
        notesToDriver: "",
        bookingFor: "",
        otherPh: "",
        otherPhCode: "",
        noofseats: 1,
        pickupCity: "",
        promo: "",
        promoAmt: "",
        tripDate: "",
      };

      const bookingResponse = await bookTaxi(bookingRequest);
      setTripData(bookingResponse);
      toast({
        title: "Your Ride is Booked!",
        description: "We've sent you the details. Get ready to roll!",
      });

      if (bookingResponse.success) {
        setEstFare(null);
        setPickup({ address: "", lat: 12.971784, lng: 77.592077 });
        setDrop({ address: "", lat: null, lng: null });
        setSelectedService([]);
      }
    } catch (error) {
      console.error("Error while booking taxi:", error);
      toast({
        variant: "destructive",
        title: "Booking Failed",
        description: "There was a problem with your request.",
      });
    }
  };

  const handleRentalSubmit = async (data: any) => {
    try {
      const bookingData = {
        promo: "",
        promoAmt: "",
        tripType: "rental",
        paymentMode: "Cash",
        pickupCity: "",
        requestFrom: "web",
        bookingType: "rideNow",
        serviceType: selectedService?.type || "",
        tripTime: new Date().toISOString(),
        vehicleTypeId: selectedService?._id,
        packageId: selectedRentalPackage?._id,
        pickupLat: pickup.lat,
        pickupLng: pickup.lng,
        pickupAddress: pickup.address,
      }

      const response = await requestRentalTaxi(bookingData);

      if (response.success) {
        toast({
          title: "Rental Booking Confirmed!",
          description: "Your rental vehicle has been booked successfully.",
        });

        setPickup({ address: "", lat: 12.971784, lng: 77.592077 });
        setSelectedService(null);
      }
    } catch (error:any) {
      console.error("Error in rental booking:", error);
      toast({
        variant: "destructive",
        title: "Booking Failed",
        description:error.message,
      });
    }
  };

  const handlePackageSelect = async (pkg: any, scID: any) => { 
    try {
      const response: any = await fetchRentalVehicles({
        packageId: pkg?._id,
        tripTypeCode: "rental",
        serviceId: scID.join(", "),
      });

      setSelectedRentalPackage(pkg);
      setServiceTypes(response?.data || []);
    } catch (error) {
      console.error("Error fetching rental vehicles:", error);
    }
  };

  return (
    <LoadScript googleMapsApiKey={apiKey} libraries={libraries} id="booking">
      {pathname === "/userspace/trip" ? (
        <div className="mb-6">
          <h1 className="text-2xl font-bold"> Ready for a ride? Book now!</h1>
        </div>
      ) : (
        <div className={`text-center mt-20`}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready for a ride? <span className="text-[#5445F9]">Book now!</span>
          </motion.h2>
        </div>
      )}

      {/* Body Section */}
      <div className="max-w-6xl mx-auto p-4 mt-10 md:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
          {/* Left side - forms and details */}

          <div className="h-full overflow-y-auto px-4">
            <div className="mb-6">
              <div className="flex gap-2 bg-gray-100 p-1 rounded-lg mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center bg-white gap-2 flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? "text-white"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-[#5445F9] rounded-lg"
                        initial={false}
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">
                      <tab.icon className="w-4 h-4 inline-block mr-1" />
                      {tab.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {activeTab === "rental" ? (
                <>
                  <div className="flex flex-col gap-6 relative mb-6">
                    <SearchBoxInput
                      placeholder="Where should we pick you up?"
                      icon={<TbCircleDotFilled className="w-5 h-5" />}
                      onSelect={(address, lat, lng) =>
                        setPickup({ address, lat, lng })
                      }
                    />
                  </div>

                  <RentalBookingForm
                    onSubmit={handleRentalSubmit}
                    pickup={pickup}
                    onPackageSelect={handlePackageSelect}
                    canBookRental={canBookRental}
                  />

                  {/* Service Types Section */}
                  <ServiceTypesList
                    serviceTypes={serviceTypes}
                    selectedService={selectedService}
                    setSelectedService={setSelectedService}
                    onEstimation={
                      activeTab === "rental"
                        ? handleRentalEstimation
                        : handleEstimation
                    }
                    currentIndex={currentIndex}
                    onPrevSlide={prevSlide}
                    onNextSlide={nextSlide}
                  />

                  {/* Estimation Section */}
                  <div className="space-y-4">
                    {isLoading ? (
                      <>
                        <SkeletonEstimation />
                        <div className="grid grid-cols-2 gap-4">
                          {[1, 2, 3, 4].map((i) => (
                            <SkeletonTripDetail key={i} />
                          ))}
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Fare Details */}
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg gap-1">
                          <div className="flex items-center gap-2">
                            <FaClock className="text-[#5445F9]" />
                            <span className="text-lg text-[#5445F9]">
                              Duration:{" "}
                              <strong className="text-black">
                                {estFare?.packageDuration || 0} Hours
                              </strong>
                            </span>
                          </div>
                          <div className="w-[2px] rounded-full h-5 bg-gray-600/20"></div>
                          <div className="flex items-center gap-2">
                            <FaRupeeSign className="text-[#5445F9]" />
                            <span className="text-lg text-[#5445F9]">
                              Package Price:{" "}
                              <strong className="text-black">
                                ₹{estFare?.packageFare || 0}
                              </strong>
                            </span>
                            <FareDetailsDialog fareDetails={estFare} type="rental" />
                          </div>
                        </div>

                        {/* Trip Details Grid */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-2">
                              <MdLocalOffer className="text-[#5445F9]" />
                              <span className="text-[#5445F9] font-medium">
                                Package:
                              </span>
                              <strong>
                                {estFare?.packageDistance || 0} KM
                              </strong>
                            </div>
                          </div>
                          <div className="p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-2">
                              <FaCarSide className="text-[#5445F9]" />
                              <span className="text-[#5445F9] font-medium">
                                Vehicle Seat:
                              </span>
                              <strong>
                                {estFare?.seat || 0} Hours
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
                      </>
                    )}
                  </div>
                </>
              ) : (
                <>
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
                      onClick={handleAvailablevehicle}
                      disabled={!pickup.address || !drop.address}
                      className="w-full bg-[#5445F9] text-white py-2 rounded-lg font-medium shadow-lg 
                         hover:bg-[#4334e8] transition-all duration-200 
                         hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed
                         hover:shadow-[#5445F9]/20 hover:shadow-xl"
                    >
                      Get Available vehicle <FaArrowRightLong />
                    </Button>
                    <Button
                      disabled={!estFare?.estimationId}
                      onClick={handleBooking}
                      className="w-full bg-[#5445F9] text-white py-2 rounded-lg font-medium shadow-lg 
                             hover:bg-[#4334e8] transition-all duration-200 
                             hover:scale-105
                             hover:shadow-[#5445F9]/20 hover:shadow-xl"
                    >
                      Book Trip Now
                    </Button>
                  </div>

                  {/* service type */}
                  <ServiceTypesList
                    serviceTypes={serviceTypes}
                    selectedService={selectedService}
                    setSelectedService={setSelectedService}
                    onEstimation={
                      activeTab === "rental"
                        ? handleRentalEstimation
                        : handleEstimation
                    }
                    currentIndex={currentIndex}
                    onPrevSlide={prevSlide}
                    onNextSlide={nextSlide}
                  />

                  {/* Estimation  */}
                  <div className="space-y-4">
                    {isLoading ? (
                      <>
                        <SkeletonEstimation />
                        <div className="grid grid-cols-2 gap-4">
                          {[1, 2, 3, 4].map((i) => (
                            <SkeletonTripDetail key={i} />
                          ))}
                        </div>
                      </>
                    ) : (
                      <>
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
                                ₹
                                {estFare?.vehicleDetailsAndFare?.fareDetails
                                  ?.totalFare	 || 0}
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
                                {estFare?.vehicleDetailsAndFare?.fareDetails
                                  ?.distance || 0}{" "}
                                km
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
                                Confirmed
                              </span>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right side - map */}
          <div className="bg-[#5445F9]/5 rounded-2xl h-full flex items-center justify-center overflow-hidden shadow-md">
            <MapComponent
              pickup={pickup}
              drop={drop}
              onDirectionsChange={setDirections}
              directions={directions}
            />
          </div>
        </div>
      </div>
    </LoadScript>
  );
};

export default EstimationDetails;
