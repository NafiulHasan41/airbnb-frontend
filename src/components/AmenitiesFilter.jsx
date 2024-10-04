'use client'
import React, { useState } from 'react';
import axios from 'axios'; // For making API calls

const AmenitiesFilter = ({handleCheckboxChange}) => {

  const amenitiesList = ['Wi-Fi', 'Kitchen', 'Pool', 'Dryer', 'Air Conditioning'];



  return (
    <div>
      <h2 className=' text-center text-xl py-5 font-semibold text-rose-500 border-t border-black'>Select Amenities</h2>
      <div className="flex flex-wrap justify-center">
        {amenitiesList.map((amenity, index) => (
          <label key={index} className="mr-4 mb-2">
            <input
              type="checkbox"
              value={amenity}
              onChange={handleCheckboxChange}
              className="mr-1"
            />
            {amenity}
          </label>
        ))}
      </div>

    </div>
  );
};

export default AmenitiesFilter;
