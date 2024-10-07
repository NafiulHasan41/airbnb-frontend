'use client'

import { useState } from "react";
import Image from "next/image";
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { PiHeartFill } from "react-icons/pi";
import { AiOutlineUpload } from "react-icons/ai";
import Book_card from "./BookCard/Book_card";

const Card_carousal = ({slides}) => {
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
      if (current === 0) setCurrent(0);
      else setCurrent(current - 1);
    };
  
    let nextSlide = () => {
      if (current === slides.length - 1) setCurrent(slides.length - 1);
      else setCurrent(current + 1);
    };
  
    return (
      <div className="overflow-hidden rounded-xl h-[280px] relative group ">
        <div
          className={`flex transition ease-out duration-40 h-full`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((s,i) => {
            return <Image key={i} alt={"slide"+i} src={s?.url} width={300} height={280} />;
          })}
        </div>
  
        <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
          <button onClick={previousSlide} className={`rounded-full   bg-white/75 hover:scale-110 hover:bg-white text-black transition-transform  duration-300 
             ${
                  current == 0 ? "opacity-0" : "opacity-100"
                } hidden group-hover:block `}>
          <MdOutlineKeyboardArrowLeft />
          </button>
          <button onClick={nextSlide} className={`rounded-full bg-white/75 hover:scale-110 hover:bg-white text-black transition-transform  duration-300 
             ${
                  current == slides.length - 1 ? "opacity-0" : "opacity-100"
                } hidden group-hover:block`}>
          <MdOutlineKeyboardArrowRight />

          </button>
        </div>
  
        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
          {slides.map((s, i) => {
            return (
              <div
                
                key={"circle" + i}
                className={`rounded-full  cursor-pointer  ${
                  i == current ? "bg-white w-2 h-2" : "bg-gray-300 w-[5px] h-[5px]"
                }`}
              ></div>
            );
          })}
        </div>
        <div className=" absolute top-5 right-6 ">
            {/* for available card */}
            <button className="text-red-500/80  hover:text-red-500 hover:scale-125 text-xl ">
            <PiHeartFill />
            </button>
            {/* for sold card */}
            {/* <button className="rounded-full p-1 text-xl font-extrabold bg-white/85 hover:scale-110 hover:bg-white text-black transition-transform  duration-300">
                 <AiOutlineUpload/>
            </button> */}
        </div>
         <div className=" absolute bottom-3 left-4 group-hover:scale-110 ">
          <Book_card/>
         </div>
      </div>
    );
  }

export default Card_carousal;