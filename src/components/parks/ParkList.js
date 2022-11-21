import ParkItem from "./ParkItem";
import "./ParkList.scss";

function ParkList(props) {
  return (
    <ul className="list">
      {props.parks.map((park) => (
        <ParkItem
          key={park.id}
          id={park.id}
          image={park.image}
          title={park.title}
          address={park.address}
          description={park.description}
        />
      ))}
    </ul>
  );
}

export default ParkList;
