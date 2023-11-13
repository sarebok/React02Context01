import { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [likedImages, setLikedImages] = useState([]);

  const state = { images, setImages, likedImages, setLikedImages };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default ContextProvider;
