'use client'

import React, { useState } from 'react';
import { Range } from 'react-range';

const PriceRange = ({values,setValues, handleInputChange}) => {
  const STEP = 1;
  const MIN = 0;
  const MAX = 1000;

  return (
    <div className="m-12">
    <div className="flex justify-between mb-5">
      <input
        type="number"
        value={values[0]}
        onChange={(e) => handleInputChange(0, e)}
        min={MIN}
        max={values[1]}
        className="w-20 border border-black rounded p-2 bg-rose-500 text-black font-bold text-center"
      />
      <input
        type="number"
        value={values[1]}
        onChange={(e) => handleInputChange(1, e)}
        min={values[0]}
        max={MAX}
        className="w-20 border border-black rounded p-2 bg-rose-500 text-black font-bold text-center"
      />
    </div>
  
          <Range
              step={STEP}
              min={MIN}
              max={MAX}
              values={values}
              onChange={(newValues) => setValues(newValues)}
              renderTrack={({ props, children }) => (
                  <div
                      {...props}
                      key={props.key} 
                      className="h-1 bg-rose-500 mt-5 w-full"
                  >
      {children}
    </div>
  )}
  renderThumb={({ props, index }) => (
    <div
      {...props}
      key={index} 
      className="h-5 w-5 bg-white rounded-full border border-black"
    >
      
    </div>
  )}
/>

  </div>
  )  
};

export default PriceRange;
