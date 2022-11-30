import ParkItem from "./ParkItem";
import "./ParkList.scss";

function ParkList(props) {
  console.log(props.parks);
  const parks = props?.parks;

  return (
    <ul className="list">
      {parks.map((park) => (
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
