import React, { createContext, useState } from "react";

export const LikedSongContext = createContext();

export const LikedSongProvider = (props) => {
  const [likedSong, setLikedSong] = useState(null)

  return (
    <LikedSongContext.Provider value={[likedSong, setLikedSong]}>
      {props.children}
    </LikedSongContext.Provider>
  );
};