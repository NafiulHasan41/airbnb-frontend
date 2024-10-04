'use client'

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useAxiosPublic from "@/lib/useAxiosPublic";

const Search = ({setSValue}) => {

    const axiosPublic = useAxiosPublic();
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    const [locations, setLocations] = React.useState([]);
    const [searchQuery, setSearchQuery] = React.useState(""); 
    
    React.useEffect(()=>{
        const s_value = locations.find((location) => location.id === value)?.label;
        // console.log("s_value",s_value)
        setSValue(s_value);

    },[value]);

    // console.log(value,locations,searchQuery);
    
    // console.log("inside_search",searchQuery)
   
    const fetchLocations = async (query) => {
      try {
        // console.log("inside_fetch",query)
        const response = await axiosPublic.get(`/locations?search=${query}`);
        setLocations(response.data);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };
  
   
    React.useEffect(() => {
      const delayDebounceFn = setTimeout(() => {
        fetchLocations(searchQuery);
      }, 300); 
  
      return () => clearTimeout(delayDebounceFn);
    }, [searchQuery]);
  
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            className="w-[200px] text-gray-500  flex items-center justify-between p-2 rounded-lg  "
          >
            {value
              ? locations.find((location) => location.id === value)?.label
              : "Search destinations"}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50  " />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
          <input  placeholder="Search destinations"
            className="h-9 m-1 focus:outline-none focus:ring-0"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value); 
              setOpen(true); 
            }}/>
            <CommandList>
              <CommandEmpty>No location found.</CommandEmpty>
              <CommandGroup>
                {locations.map((location) => (
                  <CommandItem
                    key={location.id}
                    value={location.id}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {location.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === location.id ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  }
export default Search;