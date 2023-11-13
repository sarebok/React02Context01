import Gallery from "../components/Gallery";
import { useEffect } from "react";

const Home = () => {
  async function getPhotos() {
    try {
      const response = await fetch("/photos.json");
      const data = await response.json();
      const photosData = data.photos;
      console.log(photosData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className="App">
      <h1>Natural Pic</h1>
      <Gallery />
    </div>
  );
};
export default Home;
