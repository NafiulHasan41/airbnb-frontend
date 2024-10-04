'use client'

import { useSelector } from "react-redux";
import Card_airbnb from "./Card_airbnb";

const Listings_show = () => {
    const listings = useSelector((state) => state.listings.listings);
    const loading = useSelector((state) => state.listings.loading);

    if (loading) return <p>Loading...</p>;
    if (!listings || listings.length === 0) return <p>No listings available</p>;
  
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