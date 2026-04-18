"use client";

import { useToast } from "@/hooks/use-toast";
import React, { useEffect } from "react";

interface SuccessToastProps {
  message: string;
  duration?: number;
}

const SuccessToast: React.FC<SuccessToastProps> = ({
  message,
  duration = 3000,
}) => {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Success",
      description: message,
      variant: "default",
      duration: duration,
    });
  }, [message, duration, toast]);

  return null;
};

export default SuccessToast;
