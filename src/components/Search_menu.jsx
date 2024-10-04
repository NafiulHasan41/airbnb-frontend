"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Search_menu = ({guestCount,setGuestCount}) => {
  // guest count state
  // const [guestCount, setGuestCount] = useState(0);

  // for increment the guest count
  const incrementGuest = () => {
    setGuestCount(guestCount + 1);
  };

  // for decrement the guest count
  const decrementGuest = () => {
    if (guestCount > 0) {
      setGuestCount(guestCount - 1);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex flex-col items-center justify-start pl-9">
          <div className="font-medium text-sm">Who</div>
          <div className="text-muted-foreground">{guestCount > 0 ? `${guestCount} guests` : "Add guests"}</div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px] rounded-3xl p-5">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Total guest</span>
          <div className="flex items-center space-x-4">
            
            <button
              onClick={decrementGuest}
              className="px-4 py-1 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400"
              disabled={guestCount === 0}
            >
              -
            </button>
            
            <span className="text-lg font-semibold">{guestCount}</span>
            
            <button
              onClick={incrementGuest}
              className="px-4 py-1 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Search_menu;
