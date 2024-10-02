import Card_carousal from "./Card_carousal";


const Card_airbnb = () => {
    let slides = [
        "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        "https://wallpapercave.com/wp/wp3386769.jpg",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
      ];
    return (
        <div className=" mt-20 bg-green-300 w-[300px] mx-auto">
             <div className="w-[300px] h-[280px] m-auto rounded-xl">
               <Card_carousal slides={slides} />
    </div>
        </div>
    );
};

export default Card_airbnb;