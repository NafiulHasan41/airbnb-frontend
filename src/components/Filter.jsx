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
import Filter_by_room from "./Filter_by_room"



const Filter = ({values,setValues,handleInputChange,handleCheckboxChange,bedroomCount, setBedroomCount, bedsCount, setBedsCount, bathroomCount, setBathroomCount ,productData }) => {
    return (
        <Dialog>
      <DialogTrigger asChild>
      <div className="flex gap-2 p-2 border rounded-lg">
              <RxMixerHorizontal className="text-[18px]"/>
                <h1 className="text-[14px] font-medium">Filter</h1>
            </div>
      </DialogTrigger>
      <DialogContent className=" w-[800px] h-[800px] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className='text-center'>Filters</DialogTitle>
          
        </DialogHeader>
        <div className="grid gap-4 py-4 border-t border-black">
          <PriceRange values={values} setValues={setValues} handleInputChange={handleInputChange} productData={productData} />
          <Filter_by_room bedroomCount={bedroomCount} setBedroomCount={setBedroomCount} bedsCount={bedsCount} setBedsCount={setBedsCount} bathroomCount={bathroomCount} setBathroomCount={setBathroomCount}/>
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