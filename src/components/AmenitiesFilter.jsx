'use client'
import React, { useState } from 'react';
import { 
  FaWifi, 
  FaSwimmingPool, 
  FaTshirt, 
  FaWind, 
  FaParking, 
  FaDumbbell, 
  FaTv, 
  FaFireAlt 
} from 'react-icons/fa';;
import { MdKitchen } from 'react-icons/md';


const AmenitiesFilter = ({handleCheckboxChange}) => {

  const amenitiesList = [
    { name: 'Wi-Fi', icon: <FaWifi /> },
    { name: 'Kitchen', icon: <MdKitchen /> },
    { name: 'Pool', icon: <FaSwimmingPool /> },
    { name: 'Dryer', icon: <FaTshirt /> },
    { name: 'Air Conditioning', icon: <FaWind /> },
    { name: 'Parking', icon: <FaParking /> },
    { name: 'Gym', icon: <FaDumbbell /> },
    { name: 'TV', icon: <FaTv /> },
    { name: 'Fireplace', icon: <FaFireAlt /> },
];

  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const toggleAmenity = (amenity) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter((item) => item !== amenity));
      handleCheckboxChange({ target: { value: amenity, checked: false } });
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
      handleCheckboxChange({ target: { value: amenity, checked: true } });
    }
  };

  return (
   <div>
      <h2 className="text-start text-xl py-5 font-semibold text-black border-t border-black">Amenities</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {amenitiesList.map((amenity, index) => (
          <div
            key={index}
            onClick={() => toggleAmenity(amenity.name)}
            className={`cursor-pointer px-4 py-2  font-semibold border rounded-full  
            ${selectedAmenities.includes(amenity.name) ? 'bg-rose-500 text-white' : 'bg-white text-black'} transition-colors duration-300 ease-in-out`}
          >
             <div className=" rounded-full bg-transparent   flex  gap-3 items-center justify-center">
             <div className="text-2xl mb-2 flex justify-center items-center">{amenity.icon}</div>
             <span>{amenity.name}</span>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmenitiesFilter;
