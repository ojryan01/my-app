import NewVisitForm from "../components/layout/NewVisitForm";

function NewMeetupPage() {
  function addParkVisitHandler(parkVisitData) {
    fetch("https://my-app-24207-default-rtdb.firebaseio.com/visits.json");
  }
  return <NewVisitForm onAddParkVisit={addParkVisitHandler} />;
}

export default NewMeetupPage;
