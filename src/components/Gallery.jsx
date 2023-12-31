import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import IconHeart from "./IconHeart";
import Cards from "./Cards";

const Gallery = () => {
  const { images } = useContext(AppContext);
  return (
    <div className="gallery grid-columns-5 p-3">
      {images.map((image) => {
        return <Cards key={image.id} image={image} />;
      })}
    </div>
  );
};
export default Gallery;
