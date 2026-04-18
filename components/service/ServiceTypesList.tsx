"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { SkeletonCard } from "@/components/skeltion";
import { getIconsForService, getDescriptionForService } from "@/lib/utils";

interface ServiceTypesListProps {
  serviceTypes: any[];
  selectedService: any;
  setSelectedService: (service: any) => void;
  onEstimation: (service: any) => void; // Updated to accept a service parameter
  currentIndex: number;
  onPrevSlide: () => void;
  onNextSlide: () => void;
}

const ServiceTypesList: React.FC<ServiceTypesListProps> = ({
  serviceTypes,
  selectedService,
  setSelectedService,
  onEstimation,
  currentIndex,
  onPrevSlide,
  onNextSlide,
}) => {
  if (!serviceTypes.length) {
    return (
      <div className="flex gap-5">
        {[1, 2, 3].map((value) => (
          <SkeletonCard key={value} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative mb-6">
      <div className="overflow-hidden">
        <div
        key={currentIndex}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {serviceTypes
            .filter((service) => service.type !== "Demo")
            .map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                isSelected={selectedService?._id === service._id}
                onSelect={() => setSelectedService(service)}
                onEstimation={onEstimation}
              />
            ))}
        </div>
      </div>
      <NavigationButtons
        currentIndex={currentIndex}
        maxIndex={serviceTypes.length - 3}
        onPrev={onPrevSlide}
        onNext={onNextSlide}
      />
    </div>
  );
};

interface ServiceCardProps {
  service: any;
  isSelected: boolean;
  onSelect: () => void;
  onEstimation: (service: any) => void;
}

const ServiceCard = ({ service, isSelected, onSelect, onEstimation }: ServiceCardProps) => (
  <motion.div
    onClick={onSelect}
    className="flex-shrink-0 w-1/3 px-2 cursor-pointer overflow-hidden"
  >
    <div
      className={`p-4 bg-gray-50 rounded-xl shadow hover:bg-[#5445F9]/5 hover:scale-105 transition-all duration-200 
        ${isSelected ? "border-2 border-[#5445F9] relative hover:scale-100" : ""}`}
    >
      <div className="text-2xl mb-2">{getIconsForService(service.type)}</div>
      <h3 className="font-medium text-base mb-1">{service.type}</h3>
      <p className="text-xs text-gray-500 mb-2">
        {getDescriptionForService(service.type)}
      </p>
      {isSelected && (
        <button
          className="absolute top-2 right-2 bg-[#5445F9] text-white font-semibold px-2 py-1 rounded-md text-sm"
          onClick={(e) => {
            e.stopPropagation();
            onEstimation(service);
          }}
        >
          See prices
        </button>
      )}
    </div>
  </motion.div>
);

const NavigationButtons = ({ currentIndex, maxIndex, onPrev, onNext }:any) => (
  <>
    <button
      onClick={onPrev}
      className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md 
        ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
      disabled={currentIndex === 0}
    >
      <IoIosArrowBack className="w-5 h-5 text-[#5445F9]" />
    </button>
    <button
      onClick={onNext}
      className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md 
        ${currentIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
      disabled={currentIndex >= maxIndex}
    >
      <IoIosArrowForward className="w-5 h-5 text-[#5445F9]" />
    </button>
  </>
);

export default ServiceTypesList;
