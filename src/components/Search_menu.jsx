'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

  import { RxMixerHorizontal } from "react-icons/rx";



const Search_menu = () => {
  
    return (
        <DropdownMenu >
        <DropdownMenuTrigger >
            <div className="flex gap-2 p-2 border rounded-lg">
              <RxMixerHorizontal className="text-[18px]"/>
                <h1 className="text-[14px] font-medium">Filter</h1>
            </div>

        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[700px]  rounded-3xl p-5" >
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> 
    );
};

export default Search_menu;