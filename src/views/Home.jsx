import Gallery from "../components/Gallery";
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { setImages } = useContext(AppContext);
  async function getPhotos(signal) {
    try {
      const response = await fetch("/photos.json", signal);
      const data = await response.json();
      const photosData = data.photos;
      setImages(photosData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    getPhotos(signal);
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
