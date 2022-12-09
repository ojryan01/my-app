import { useContext } from "react";
import "./ParkItem.scss";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

function ParkItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
  console.log(itemIsFavorite);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      console.log("Already a favorite");
      favoritesCtx.removeFavorite(props.id);
    } else {
      console.log("not a fav");
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        address: props.address,
      });
    }
  }

  return (
    <li className="item">
      <Card>
        <div className="image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="content">
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div>
          <button className="actions" onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite
              ? "Remove from Visited List"
              : "Add to Visited List"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ParkItem;
