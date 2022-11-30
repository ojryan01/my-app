import NewVisitForm from "../components/layout/NewVisitForm";
import { useNavigate } from "react-router-dom";

function NewMeetupPage() {
  const navigate = useNavigate();

  function addParkVisitHandler(parkVisitData) {
    fetch("https://my-app-24207-default-rtdb.firebaseio.com/visits.json", {
      method: "POST",
      body: JSON.stringify(parkVisitData),
      headers: { "content-type": "application/json" },
    }).then(() => {
      navigate("/");
    });
  }
  return <NewVisitForm onAddParkVisit={addParkVisitHandler} />;
}

export default NewMeetupPage;
