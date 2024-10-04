'use client'
import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { TfiWorld } from "react-icons/tfi";
import { MdOutlineMenu } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import categoryData from "@/lib/categories";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import {  useSearchParams } from 'next/navigation';
import Search_menu from "./Search_menu";
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import useAxiosPublic from "@/lib/useAxiosPublic";
import { useDispatch } from "react-redux";
import { setListings, setLoading } from "@/store/listingsSlice";
import Filter from "./Filter";
import Search from "./Search";
import { DatePickerWithRange } from "./DatePickerWithRange";


const Navbar = () => {

    // for search location 
    const [s_value, setSValue] = React.useState("");

    // console.log("inside_navbar=>S-value",s_value);


    //date change
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const handleDatesChange = (dates) => {
        // console.log(dates);
        setCheckIn(dates.checkIn);
        setCheckOut(dates.checkOut);
     
       
      };
    //   console.log(checkIn, checkOut);


    //this is for guest count simple 
    // guest count state
     const [guestCount, setGuestCount] = useState(0);

    //  console.log("guestCount",guestCount);

    // this for the category  search

    const { categoryBar: { categories } } = categoryData;
    const params= useSearchParams()
    const category = params.get('category')




    // for before taxes toggle button 
    const [displayTotalBeforeTaxes, setDisplayTotalBeforeTaxes] = useState(false);
    // Function to handle switch toggle
    const handleSwitchToggle = () => {
        setDisplayTotalBeforeTaxes(!displayTotalBeforeTaxes);
    };

     // for price range filter
    
    const [values, setValues] = useState([0, 1000]);

    const handleInputChange = (index, event) => {
        const newValue = parseInt(event.target.value, 10);
        const updatedValues = [...values];
        updatedValues[index] = newValue;
        setValues(updatedValues);
    };


    // for amenities filter
    const [selectedAmenities, setSelectedAmenities] = useState([]);

  // Handle when a checkbox is selected or deselected
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      // Add the selected amenity
      setSelectedAmenities((prev) => [...prev, value]);
    } else {
      // Remove the deselected amenity
      setSelectedAmenities((prev) => prev.filter((amenity) => amenity !== value));
    }
  };

//   console.log('range', values);
//   console.log('amenities', selectedAmenities);

  



    // getting data from database 

    const axiosPublic = useAxiosPublic();
    const dispatch = useDispatch();

    const fetchListings = async (query = null) => {

        dispatch(setLoading(true));
        try {
            const response = await axiosPublic.get(`/listings?displayTotalBeforeTaxes=${displayTotalBeforeTaxes}${category ? `&category=${category}` : ''}&values=${encodeURIComponent(values.join(','))}&selectedAmenities=${encodeURIComponent(selectedAmenities.join(','))}${query ? `&${query}` : ''}`);
            // console.log( "data" ,response.data);
            dispatch(setListings(response.data));
        } catch (error) {
            console.log(error);
        }finally {
            dispatch(setLoading(false));
          }
      
    };

    useEffect(() => {
        fetchListings();
    }, [displayTotalBeforeTaxes , category , values , selectedAmenities]);


    
    const handleAllSearch = () =>{

        fetchListings(`checkIn=${checkIn}&checkOut=${checkOut}&guestCount=${guestCount}&s_value=${s_value}`);

    };

    


    
    
   
    const [showBigSection, setShowBigSection] = useState(true);
    const [disableScroll, setDisableScroll] = useState(false); 

    
    useEffect(() => {
        const handleScroll = () => {
            if (disableScroll) return; 
            if (window.scrollY > 2) {
                setShowBigSection(false);
            } else {
                setShowBigSection(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [disableScroll]); 

    
    const handleSmallSectionClick = () => {
        setShowBigSection(true);
        setDisableScroll(true); 

       
        setTimeout(() => {
            setDisableScroll(false);
        }, 1000);
    };

    return (
        <div className="sticky top-0 z-50 bg-white">
            <div className="flex justify-between border-b-[2px]">
                <div className="p-5">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
                        alt="website logo"
                        width={100}
                        height={100}
                    />
                </div>

                <div>
                    <div className="h-full p-5">
                        {/* Small section - Visible when the big section is hidden */}
                        {!showBigSection && (
                            <div
                                className="flex border rounded-full py-[10px] px-3 shadow-sm hover:shadow-lg hover:shadow-black/70 border-gray-300 cursor-pointer"
                                onClick={handleSmallSectionClick}
                            >
                                <div className="px-3 border-r-[2px] border-gray-300 flex items-center ">
                                    <h1 className="text-[16px] font-medium">Anywhere</h1>
                                </div>

                                <div className="px-3 border-r-[2px] border-gray-300 flex items-center ">
                                    <h1 className="text-[16px] font-medium">Any week</h1>
                                </div>
                                <div className="px-3 flex items-center gap-3">
                                    <h1 className="text-[16px] font-medium text-gray-400">Add guest</h1>
                                    <div className="bg-[#FF385C] rounded-full p-2">
                                        <IoSearchSharp className="text-[18px] font-bold text-white" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Big section - Visible initially and shrinks when scrolling */}
                        {showBigSection && (
                            <div className="">
                                <div className="flex gap-5 justify-center">
                                    <h1 className="text-[16px] font-semibold">Stays</h1>
                                    <h1 className="text-[16px] font-medium text-gray-500">Experiences</h1>
                                </div>

                                <div className="mt-10">
                                    <div className="flex w-[850px] rounded-full border-[1px] border-solid pb-4 pl-8 pt-4 shadow-lg  ">
                                        <div className='flex-1 border-solid border-r-2'>
                                            <div className="font-medium text-sm">Where</div>
                                            <Search setSValue={setSValue} />
                                        </div>
                                        <div className="w-60">
                                        <DatePickerWithRange onDatesChange={handleDatesChange} />
                                        </div>
                                        <div className="flex justify-between flex-1 items-center border-l-2 ">
                                         <div>
                                         <Search_menu guestCount={guestCount} setGuestCount={setGuestCount} />
                                         </div>
                                        <div 
                                        onClick={handleAllSearch}
                                         className="mr-9  h-12 w-12 rounded-full bg-[#FF385C] flex justify-center items-center text-white">
                                            <IoSearchSharp className="text-[18px] font-bold text-white" />
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    <div className="p-3 flex items-center gap-4">
                        <div>
                            <h1 className="text-[16px] font-medium text-black">Airbnb your home</h1>
                        </div>
                        <div className="text-[16px]">
                            <TfiWorld />
                        </div>
                        <div className="flex gap-3 border-[1px] border-gray-400 rounded-full p-3 items-center">
                            <MdOutlineMenu className="text-xl" />
                            <CgProfile className="text-3xl bg-gray-300 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
            <div  >
            <div className="filter-header h-20 pl-20 pr-10 border-solid border-t-[1px] gap-20 flex items-center">
                <Carousel className="w-[78%]">
                    <CarouselContent className="-ml-1">
                        {Array.from(categories).map((item , index) => (
                            <CarouselItem key={index} className="pl-1 basis-auto">
                                <div className="p-1">
                                    <Card className='shadow-none  border-0 bg-transparent'>
                                        <Link href={{
                                            href: '/', query: {
                                                category: item.title
                                            }
                                        }}>
                                            <CardContent className={`flex flex-col items-center justify-center p-4 text-muted-foreground hover:border-b hover:border-gray-500 ${category === item.title && 'border-b border-black text-red-500 font-medium'} `}>
                                                <Image width={30} height={30} src={item.imageUrl} alt='category-image' />
                                                <span className="text-sm font-normal">{item.title}</span>
                                            </CardContent>
                                        </Link>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

                <div className=" flex gap-4 items-center" >
                      <div>
                          <Filter values={values} setValues={setValues} handleInputChange={handleInputChange} handleCheckboxChange={handleCheckboxChange} />
                      </div>
                        <div className="flex items-center space-x-2 border rounded-lg p-2 ">
                            <Label htmlFor="airplane-mode" className=" text-[12px] ">Display total before taxes</Label>
                            <Switch id="airplane-mode" checked={displayTotalBeforeTaxes} onCheckedChange={handleSwitchToggle} />
                        </div>

                </div>
              
            </div>
             
            </div>
        </div>
    );
};

export default Navbar;
