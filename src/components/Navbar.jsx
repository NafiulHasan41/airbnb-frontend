'use client'

import Image from "next/image";
import { TfiWorld } from "react-icons/tfi";
import { MdOutlineMenu } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";


const Navbar = () => {
    return (
        <div className=" flex justify-between border-b-[2px] sticky top-0 z-50 bg-white ">
          <div className=" p-5">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="website logo" width={100} height={100} />
         </div>  
         <div>
            <div className=" h-full p-5">
                {/* this is the big section */}
               {/* <div>
               <h1 className=" text-[18px] font-semibold">Stays</h1>
              <div className="">
                   
               </div>
               </div> */}
               {/* this small section */}
               <div className=" flex border rounded-full py-[10px] px-3 shadow-xl border-gray-300   ">
                  <div className="px-3 border-r-[2px] border-gray-300 flex items-center ">
                    <h1 className="   text-[16px] font-medium">Anywhere</h1>
                  </div>
                  
                  <div className="px-3 border-r-[2px] border-gray-300 flex items-center ">
                    <h1 className="  text-[16px] font-medium">Any week</h1>
                  </div  >
                  <div className="px-3 flex items-center gap-3" >
                    <h1 className=" text-[16px] font-medium text-gray-400">Add guest</h1>
                    <div className=" bg-[#FF385C] rounded-full p-2 ">
                     <IoSearchSharp className=" text-[18px] font-bold text-white"/>
                    </div>
                  </div>
               </div>
            </div>
           
         </div>
         <div>
         <div className=" p-3 flex items-center gap-4">
            <div>
                <h1 className="text-[16px] font-medium text-black">Airbnb your home</h1>
            </div>
            <div className=" text-[16px]">
               <TfiWorld/>
            </div>
            <div className=" flex gap-3  border-[1px] border-gray-400 rounded-full p-3 items-center ">
                 <MdOutlineMenu className=" text-xl"/>
                 <CgProfile className="text-3xl bg-gray-300 rounded-full"/>
            </div>
         </div>
         </div>
        
        </div>
    );
};

export default Navbar;