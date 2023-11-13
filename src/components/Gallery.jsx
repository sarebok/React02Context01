import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Gallery = () => {
  const { images } = useContext(AppContext);

  return (
    <div className="gallery grid-columns-5 p-3">
      {images.map(({ id, src, photographer, liked, alt }) => {
        return (
          <div key={id}>
            <img src={src.small} alt={alt} />
            <p>Description: {alt}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Gallery;
