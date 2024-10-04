
import AmenitiesFilter from "@/components/AmenitiesFilter";
import Card_airbnb from "@/components/Card_airbnb";
import Filter from "@/components/Filter";
import Listings_show from "@/components/Listings_show";
import PriceRange from "@/components/PriceRange";

export default function Home() {
  return (
    <div className=" ">
      <div className=" flex flex-wrap pl-8 pt-5 gap-2">
        <Listings_show/>
      </div>

    </div>
  );
}
