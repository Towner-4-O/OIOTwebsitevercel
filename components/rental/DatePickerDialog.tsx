"use client";
import React from "react";

// import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Generate time slots from 6 AM to 10 PM
const timeSlots = Array.from({ length: 17 }, (_, i) => {
  const hour = i + 6;
  return {
    value: `${hour}:00`,
    label: `${hour > 12 ? hour - 12 : hour}:00 ${hour >= 12 ? 'PM' : 'AM'}`,
  };
});

interface DatePickerDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedDate?: Date;
  onDateSelect: (date: Date | undefined) => void;
  bookingType: "now" | "schedule";
}

const DatePickerDialog: React.FC<DatePickerDialogProps> = ({
  isOpen,
  onOpenChange,
  selectedDate,
  onDateSelect,
  bookingType,
}) => {
  const [selectedTime, setSelectedTime] = React.useState<string>();

  const handleDateTimeSelect = (date: Date | undefined, time?: string) => {
    if (date && time) {
      const [hours] = time.split(':');
      const newDate = new Date(date);
      newDate.setHours(parseInt(hours), 0, 0);
      onDateSelect(newDate);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[450px] p-0 gap-0">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="text-xl font-bold text-[#5445F9]">
            Schedule Your Ride
          </DialogTitle>
        </DialogHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-6"
        >
          <div className="space-y-4">
            {/* <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(date) => {
                if (date) handleDateTimeSelect(date, selectedTime);
              }}
              className="rounded-md border"
              disabled={(date) => date < new Date()}
            /> */}
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Select Time</label>
              <Select 
                onValueChange={(time) => {
                  setSelectedTime(time);
                  if (selectedDate) handleDateTimeSelect(selectedDate, time);
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pick a time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem 
                      key={slot.value} 
                      value={slot.value}
                      className="cursor-pointer hover:bg-[#5445F9]/10"
                    >
                      {slot.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={() => onOpenChange(false)}
              disabled={true}
              className="w-full bg-[#5445F9] text-white hover:bg-[#4334e8]
                       transition-all duration-200 hover:shadow-lg"
            >
              Confirm Time
            </Button>
          </div>
          <p className="text-sm text-center py-2 text-red-600">Scheduling is not available at this moment.</p>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default DatePickerDialog;
