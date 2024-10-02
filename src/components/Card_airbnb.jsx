'use client'

import Card_carousal from "./Card_carousal";
import { FaStar } from "react-icons/fa";


const Card_airbnb = () => {
    let slides = [
        "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        "https://wallpapercave.com/wp/wp3386769.jpg",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
      ];
    return (
        <div className="  w-[300px]">
             <div className="w-[300px] h-[280px] m-auto rounded-xl">
               <Card_carousal slides={slides} />
            </div>
            {/* this is for normal cards */}
           <div>
           <div className=" mt-3 flex justify-between">
                <div className=" space-y-[2px]">
                <h1 className="text-[16px] font-semibold ">Airbnb</h1>
                <p className=" text-gray-500 text-[14px] ">Added _  weeks ago</p>
                <p className=" text-gray-500 text-[14px] ">Date</p>

                </div>
                <div className="flex gap-1 items-start text-[14px]">
                    <FaStar/>
                    <p className=" text-gray-500  ">Date</p>
                </div>
               
            </div>
            <div>
             <h1 className="text-[16px] font-medium ">$332 night</h1>
            </div>
           </div>

           {/* this is for sold out  */}
           {/* <div>
           <h1 className="text-[16px] font-semibold ">Airbnb</h1>
           <p className=" text-gray-500 text-[14px] ">Added _  weeks ago</p>
           <h1 className="text-[16px] font-semibold ">Sold out</h1>
        
           </div> */}
        </div>
    );
};

export default Card_airbnb;