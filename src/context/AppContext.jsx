import { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [liked, setLiked] = useState(false);

  const state = { images, setImages, liked, setLiked };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default ContextProvider;
