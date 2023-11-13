import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { images, setImages, setLikedImages, likedImages } = useContext(AppContext);

  const handleCLick = (element) => {
    element.liked = !element.liked;
    const pushedImages = [...likedImages];
    if (element.liked === true) {
      pushedImages.push(element);
      setLikedImages(pushedImages);
    } else {
      const notFavIndex = pushedImages.findIndex((pushed) => pushed.id === element.id);
      pushedImages.splice(notFavIndex, 1);
      setLikedImages(pushedImages);
    }
  };

  useEffect(() => {
    console.log("liked", likedImages);
  }, [likedImages]);

  return (
    <div className="gallery grid-columns-5 p-3">
      {images.map((image) => {
        return (
          <div key={image.id}>
            <img src={image.src.small} alt={image.alt} className="photo" />
            <p>Description: {image.alt}</p>
            <p className="icon-heart-back svg" onClick={() => handleCLick(image)}>
              <IconHeart />
            </p>
            <p>liked: {`${image.liked}`}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Gallery;
