import { Link } from "react-router-dom";
import "./MainNavigation.scss";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className="header">
      <div className="logo">National Parks Wish List</div>
      <nav>
        <ul>
          <li>
            <Link to="/new-meetup">New Park</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/favorites">
              Favorites
              <span className="badge">{favoritesCtx.totalFavorites}</span>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/">All Parks</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
