'use client'

import { useSelector } from "react-redux";
import Card_airbnb from "./Card_airbnb";
import Loading from "./Loading";

const Listings_show = () => {
    const listings = useSelector((state) => state.listings.listings);
    const loading = useSelector((state) => state.listings.loading);

    if (loading) return <Loading/>;
    if (!listings || listings.length === 0) return <p className=" text-rose-500 text-center mt-20 text-2xl font-bold w-[50%] mx-auto">No listings available</p>;
  
    return (
       <>
       {
        listings.map((listing) => (
            <Card_airbnb key={listing.id} listing={listing} />
        ))
       }
       </>
    );
};

export default Listings_show;