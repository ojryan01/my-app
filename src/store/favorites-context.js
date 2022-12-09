import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState();

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites?.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  function addFavoriteHandler(favoriteMeetup) {
    console.log(favoriteMeetup);
    setUserFavorites((prevUserFavorites) => {
      if (!prevUserFavorites) {
        prevUserFavorites = [];
      }
      console.log(prevUserFavorites);
      console.log("adding");
      console.log(prevUserFavorites?.concat(favoriteMeetup));
      return prevUserFavorites?.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      if (!prevUserFavorites) {
        prevUserFavorites = [];
      }
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    console.log("checking");
    return userFavorites?.some((meetup) => meetup.id === meetupId);
  }

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
