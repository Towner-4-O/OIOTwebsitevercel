import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getIconsForService = (service: string) => {
  const serviceTypes = [
    {
      id: 1,
      name: "Auto",
      icon: "🛺",
      price: "₹149",
      time: "20-25",
      description: "Quick & affordable rides",
    },
    {
      id: 2,
      name: "Sedan",
      icon: "🚘",
      price: "₹279",
      time: "15-18",
      description: "Perfect for family travel",
    },
    {
      id: 3,
      name: "Hatchback",
      icon: "🚗",
      price: "₹229",
      time: "15-20",
      description: "Compact & fuel efficient",
    },
    {
      id: 4,
      name: "Mini",
      icon: "🚗",
      price: "₹199",
      time: "15-20",
      description: "Best for urban commuting",
    },
    {
      id: 5,
      name: "SUV",
      icon: "🚙",
      price: "₹399",
      time: "18-22",
      description: "Spacious premium vehicle",
    },
    {
      id: 1,
      name: "Demo",
      icon: "⭐",
      price: "₹149",
      time: "20-25",
      description: "Quick & affordable rides",
    },
  ];

  const serviceType = serviceTypes.find(
    (item) => item.name.toLowerCase() === service.toLowerCase()
  );
  return serviceType ? serviceType.icon : null;
};

export const getDescriptionForService = (service: string) => {
  const serviceTypes = [
    {
      id: 1,
      name: "Auto",
      icon: "🛺",
      price: "₹149",
      time: "20-25",
      description: "Quick & affordable rides",
    },
    {
      id: 2,
      name: "Sedan",
      icon: "🚘",
      price: "₹279",
      time: "15-18",
      description: "Perfect for family travel",
    },
    {
      id: 3,
      name: "Hatchback",
      icon: "🚗",
      price: "₹229",
      time: "15-20",
      description: "Economy & fuel efficient",
    },
    {
      id: 4,
      name: "Mini",
      icon: "🚗",
      price: "₹199",
      time: "15-20",
      description: "Best for urban commuting",
    },
    {
      id: 5,
      name: "SUV",
      icon: "🚙",
      price: "₹399",
      time: "18-22",
      description: "Spacious premium vehicle",
    },
    {
      id: 1,
      name: "Demo",
      icon: "⭐",
      price: "₹149",
      time: "20-25",
      description: "Quick & affordable rides",
    },
  ];

  const serviceType = serviceTypes.find(
    (item) => item.name.toLowerCase() === service.toLowerCase()
  );
  return serviceType ? serviceType.description : null;
};

export const getTaxiImg = (service: string) => {
  const serviceTypes = [
    {
      id: 1,
      name: "Auto",
      path: "/icons/auto.png",
    },
    {
      id: 2,
      name: "Sedan",
      path: "/icons/sedan.png",
    },
    {
      id: 3,
      name: "Hatchback",
      path: "/icons/hatchback.png",
    },
    {
      id: 5,
      name: "SUV",
      path: "/icons/suv.png",
    },
  ];

  const serviceType = serviceTypes.find(
    (item) => item.name.toLowerCase() === service.toLowerCase()
  );
  return serviceType ? serviceType.path : null;
};
