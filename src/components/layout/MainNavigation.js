import { Link } from "react-router-dom";
import "./MainNavigation.scss";

function MainNavigation() {
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
            <Link to="/favorites">Favorites</Link>
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
