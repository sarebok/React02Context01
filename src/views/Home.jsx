import Gallery from "../components/Gallery";
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { setImages, images } = useContext(AppContext);
  async function getPhotos(signal) {
    try {
      const response = await fetch("/photos.json", signal);
      const data = await response.json();
      const photosData = data.photos;
      console.log("photosdata", photosData);
      setImages(photosData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    getPhotos(signal);
    console.log("imgaes", images);
    //cleanup
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="App">
      <h1>Natural Pic</h1>
      <Gallery />
    </div>
  );
};
export default Home;
