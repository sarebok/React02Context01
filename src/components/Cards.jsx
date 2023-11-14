import React from "react";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import IconHeart from "./IconHeart";

const Cards = ({ key, image }) => {
  const { setLikedImages, likedImages } = useContext(AppContext);

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
    <>
      {/* {images.map((image) => {
        return ( */}
      <div key={key}>
        <img src={image.src.small} alt={image.alt} className="photo" />
        <p>Description: {image.alt}</p>
        <p className="icon-heart-back svg" onClick={() => handleCLick(image)}>
          <IconHeart />
        </p>
        <p>liked: {`${image.liked}`}</p>
      </div>
      {/*   );
      })} */}
    </>
  );
};

export default Cards;
