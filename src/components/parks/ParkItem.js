import "./ParkItem.scss";
import Card from "../ui/Card";

function ParkItem(props) {
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
          <button className="actions">favorite</button>
        </div>
      </Card>
    </li>
  );
}

export default ParkItem;
