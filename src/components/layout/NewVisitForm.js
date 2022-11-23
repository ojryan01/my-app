import Card from "../ui/Card";
import "./NewVisitForm.scss";

function NewVisitForm() {
  function submitHandler() {}

  return (
    <Card>
      {" "}
      <form className="class" onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="title">Park Title</label>
          <input type="text" required id="title"></input>
        </div>
        <div className="control">
          <label htmlFor="title">Park Image</label>
          <input type="url" required id="image"></input>
        </div>

        <div className="control">
          <label htmlFor="address">Park Address</label>
          <input type="text" required id="address"></input>
        </div>
        <div className="control">
          <label htmlFor="description">Park Description</label>
          <input type="textarea" required id="description"></input>
        </div>
        <div className="actions">
          {" "}
          <button>Add Park</button>
        </div>
      </form>
    </Card>
  );
}

export default NewVisitForm;
