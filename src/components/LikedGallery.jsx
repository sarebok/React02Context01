import React from "react";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import IconHeart from "./IconHeart";
import Cards from "./Cards";

const LikedGallery = () => {
  const { likedImages } = useContext(AppContext);
  return (
    <div className="gallery grid-columns-5 p-3">
      {likedImages.map((image) => {
        return <Cards key={image.id} image={image} />;
      })}
    </div>
  );
};

export default LikedGallery;
