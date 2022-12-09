import { useContext } from "react";
import ParkList from "../components/parks/ParkList";
import FavoritesContext from "../store/favorites-context";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <p>You haven't visited any parks yet. Visit All Parks to get started</p>
    );
  } else {
    content = <ParkList parks={favoritesCtx.favorites} />;
  }

  return (
    <div>
      <h1>Park Visits</h1>
      {content}
    </div>
  );
}

export default FavoritesPage;
