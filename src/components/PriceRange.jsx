"use client";

import React, { useState, useEffect } from "react";
import { Range } from "react-range";
import { BarChart, Bar, Cell, ResponsiveContainer } from "recharts";
import "./price_range.css";
import useAxiosPublic from "@/lib/useAxiosPublic";

const PriceRange = ({ values, setValues, handleInputChange }) => {
  const [productData, setProductData] = useState([]);

  const axiosPublic = useAxiosPublic();
  const fetchPriceRangeCounts = async () => {
    try {
      const response = await axiosPublic.get("/price-range-count");
      setProductData(response.data);
    } catch (error) {
      console.error("Error fetching price range counts:", error);
    }
  };

  useEffect(() => {
    fetchPriceRangeCounts();
  }, []);

  const STEP = 1;
  const MIN = 0;
  const MAX = 1000;

  const getBarColor = (priceRange) => {
    const [minRange, maxRange] = priceRange;

    if (minRange <= values[1] && maxRange >= values[0]) {
      return "#f43f5e";
    }
    return "#e2e8f0";
  };
  return (
    <>
      <h2 className="text-start text-xl  font-semibold text-black  border-black">
        Price Range
      </h2>
      <p className="text-start text-[]13px  font-medium text-gray-500  ">
        Monthly prices before fees and taxes
      </p>
      <div className="relative m-5 mt-20">
        {/* Bar Chart */}
        <div
          className="absolute -top-[74px] w-full"
          style={{ height: "100px" }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={productData}>
              <Bar dataKey="count">
                {productData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={getBarColor(entry.priceRange)} // Apply dynamic color to each bar
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Range Slider */}
        <div className="relative mb-5">
        <Range
        step={STEP}
        min={MIN}
        max={MAX}
        values={values}
        onChange={(newValues) => setValues(newValues)}
        renderTrack={({ props, children }) => {

          // console.log('Props:', props);
            const min = MIN;
            const max = MAX;
            // console.log('Min:', min , typeof min);
            // console.log('Max:', max, typeof max );
            
              // Calculate percentages for dynamic gradient
            const percentageLeft = ((values[0] - min) / (max - min)) * 100;
             const percentageRight = ((values[1] - min) / (max - min)) * 100;
            
              // console.log('Values:', values);
              // console.log('Left percentage:', percentageLeft, typeof percentageLeft);
              //  console.log('Right percentage:', percentageRight, typeof percentageRight);
               
          
          return (
            <div
              {...props}
              className="custom-track"
              style={{
                background: `linear-gradient(
                  to right, 
                  #e2e8f0 0%, 
                  #e2e8f0 ${percentageLeft}%, 
                  #f43f5e ${percentageLeft}%, 
                  #f43f5e ${percentageRight}%, 
                  #e2e8f0 ${percentageRight}%, 
                  #e2e8f0 100%)`, 
              }}
            >
              {children}
            </div>
          );
        }}
        renderThumb={({ props, index }) => (
          <div
            {...props}
            key={index}
            className="custom-thumb"
          />
        )}
      />

          {/* Inputs under Range */}
          <div className="flex justify-between mt-7">
           
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-400 mb-2 ml-3">
                Minimum
              </label>
              <span className="absolute left-3 top-[49px] transform -translate-y-1/2 text-black font-bold">
                $
              </span>
              <input
                type="number"
                value={values[0]}
                onChange={(e) => handleInputChange(0, e)}
                min={MIN}
                max={values[1]}
                className="w-28 pl-7 border border-black rounded-full text-black font-bold text-center p-2 custom-input"
              />
            </div>

            
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-400 mb-2 ml-5">
                Maximum
              </label>
              <span className="absolute left-3 top-[49px] transform -translate-y-1/2 text-black font-bold">
                $
              </span>
              <input
                type="number"
                value={values[1]}
                onChange={(e) => handleInputChange(1, e)}
                min={values[0]}
                max={MAX}
                className="w-28 pl-7 border border-black rounded-full text-black font-bold text-center p-2 custom-input"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceRange;
