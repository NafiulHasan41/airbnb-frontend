'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RxMixerHorizontal } from "react-icons/rx";
import PriceRange from "./PriceRange"
import AmenitiesFilter from "./AmenitiesFilter"



const Filter = ({values,setValues,handleInputChange,handleCheckboxChange}) => {
    return (
        <Dialog>
      <DialogTrigger asChild>
      <div className="flex gap-2 p-2 border rounded-lg">
              <RxMixerHorizontal className="text-[18px]"/>
                <h1 className="text-[14px] font-medium">Filter</h1>
            </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className='text-center'>Filters</DialogTitle>
          
        </DialogHeader>
        <div className="grid gap-4 py-4 border-t border-black">
          <PriceRange values={values} setValues={setValues} handleInputChange={handleInputChange} />
          <AmenitiesFilter handleCheckboxChange={handleCheckboxChange}/>
        </div>
        <DialogFooter>
           <DialogClose asChild>
            <Button className=" bg-rose-500 text-xl text-black font-bold">Show</Button>
          </DialogClose>
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
    );
};

export default Filter;