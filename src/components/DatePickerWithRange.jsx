"use client";

import React, { useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerWithRange({ className, setCheckInN, setCheckOutN }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [dateRange, setDateRange] = useState(undefined);

  const onDatesChange = (dates) => {
    // console.log(dates);
    setCheckInN(dates.checkIn);
    setCheckOutN(dates.checkOut);
 
   
  };

  const handleSelect = (range) => {
    setDateRange(range);
  
    

    if (range?.from) {
      const formattedCheckIn = format(range.from, "yyyy-MM-dd");
      setCheckIn(formattedCheckIn);
    } else {
      setCheckIn(""); 
    }

    if (range?.to) {
      const formattedCheckOut = format(range.to, "yyyy-MM-dd");
      setCheckOut(formattedCheckOut);
    } else {
      setCheckOut(""); 
    }

    if (onDatesChange) {
      onDatesChange({
        checkIn: range?.from ? format(range.from, "yyyy-MM-dd") : "",
        checkOut: range?.to ? format(range.to, "yyyy-MM-dd") : "",
      });
    }
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
       
            <div className="flex justify-between items-center ">
              <div className="   p-2  justify-center w-full h-full">
                <div className="font-medium text-sm text-black">Check in</div>
                <div className="text-muted-foreground">
                  {checkIn ? checkIn : "Add dates"}
                </div>
              </div>
              <div className="  p-2  justify-center w-full h-full">
                <div className="font-medium text-sm text-black">Check out</div>
                <div className="text-muted-foreground">
                  {checkOut ? checkOut : "Add dates"}
                </div>
              </div>
            </div>
          
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={handleSelect}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
