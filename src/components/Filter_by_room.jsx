'use client'
import React from 'react';
import { useState } from 'react';

const Filter_by_room = () => {
    // {bedroomCount, setBathroomCount, bedsCount, setBedsCount, bathroomCount, setBathroomCount}
    const [bedroomCount, setBedroomCount] = useState(0);
    const [bedsCount, setBedsCount] = useState(0);
    const [bathroomCount, setBathroomCount] = useState(0);
    const incrementBedroom = () => setBedroomCount(bedroomCount + 1);
    const decrementBedroom = () => setBedroomCount(bedroomCount > 0 ? bedroomCount - 1 : 0);
    
    const incrementBeds = () => setBedsCount(bedsCount + 1);
    const decrementBeds = () => setBedsCount(bedsCount > 0 ? bedsCount - 1 : 0);
    
    const incrementBathroom = () => setBathroomCount(bathroomCount + 1);
    const decrementBathroom = () => setBathroomCount(bathroomCount > 0 ? bathroomCount - 1 : 0);
    
    return (
        <>
              <h2 className="text-start text-xl py-5 font-semibold text-black border-t border-black">Rooms and Beds</h2>
         <div className=" space-y-4">
            {/* Bedrooms */}
            <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Bedrooms</span>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={decrementBedroom}
                        className="px-4 py-1 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400"
                        disabled={bedroomCount === 0}
                    >
                        -
                    </button>
                    <span className="text-lg font-semibold">{bedroomCount}</span>
                    <button
                        onClick={incrementBedroom}
                        className="px-4 py-1 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Beds */}
            <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Beds</span>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={decrementBeds}
                        className="px-4 py-1 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400"
                        disabled={bedsCount === 0}
                    >
                        -
                    </button>
                    <span className="text-lg font-semibold">{bedsCount}</span>
                    <button
                        onClick={incrementBeds}
                        className="px-4 py-1 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Bathrooms */}
            <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Bathrooms</span>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={decrementBathroom}
                        className="px-4 py-1 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400"
                        disabled={bathroomCount === 0}
                    >
                        -
                    </button>
                    <span className="text-lg font-semibold">{bathroomCount}</span>
                    <button
                        onClick={incrementBathroom}
                        className="px-4 py-1 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300"
                    >
                        +
                    </button>
                </div>
            </div>


        </div>
        </>
    );
};

export default Filter_by_room;