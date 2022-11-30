import ParkList from "../components/parks/ParkList";
import { useState, useEffect } from "react";

function AllMeetupsPage() {
  async function fetchVisits() {
    const response = await fetch(
      "https://my-app-24207-default-rtdb.firebaseio.com/visits.json"
    );
    const visits = await response.json();
    return visits;
  }

  const [loading, setIsLoading] = useState(true);
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const visits = [];
    const data = fetchVisits().then((data) => {
      for (const key in data) {
        const visit = {
          id: key,
          ...data[key],
        };
        visits.push(visit);
        console.log(visits);
      }
      setVisits(visits);
      setIsLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div>
        <p>Loading....</p>
      </div>
    );
  }

  console.log(visits);
  return (
    <div>
      <ParkList parks={visits} />
    </div>
  );
}

export default AllMeetupsPage;
