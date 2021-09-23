import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  sidebarOption: {
    display: "flex",
    alignItems: "center",
    color: "grey",
    height: "40px",
    cursor: "pointer",
    transition: "200ms color ease-in",

    "&:hover": {
      color: "white",
    },
  },
  sidebarOption__icon: {
    padding: "0 10px",
    color: "white",
    height: "40px",
    width: "40px",
  },
});

function SidebarOption({ title, Icon, id, handlePlaylist, handleLikedSongs, handleHomePage, handleDiscoverPage }) {
  const classes = useStyles();

  // Moved getPlaylist to Sidebar, so that we shuffle through different playlists

  const handleClick = (e) => {
    handlePlaylist(e.target.id);
  };

  const handleLike = () => {
    handleLikedSongs();
  };

  const handleHome = () => {
    handleHomePage()
  };
  const handleDiscover = () => {
    handleDiscoverPage()
  };

  return (
    <div className={classes.sidebarOption}>
      {Icon && <Icon className={classes.sidebarOption__icon} />}
      {Icon ? (
        <h4 onClick={(id === "Like" && handleLike ) || (id="Home" && handleHome) || (id="Home" && handleDiscover) }>{title}</h4>
      ) : (
        <p id={id} onClick={handleClick}>
          {title}
        </p>
      )}
    </div>
  );
}

export default SidebarOption;