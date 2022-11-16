import { Link } from "react-router-dom";
import "./MainNavigation.scss";

function MainNavigation() {
  return (
    <header className="header">
      <div className="logo">React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/new-meetup">New Meetup</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            {" "}
            <Link to="/">All Meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
