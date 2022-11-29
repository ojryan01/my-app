import Card from "../ui/Card";
import "./NewVisitForm.scss";
import { useRef } from "react";

function NewVisitForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptonInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptonInputRef.current.value;

    const parkVisitData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddVisit(parkVisitData);
  }

  return (
    <Card>
      {" "}
      <form className="class" onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="title">Park Title</label>
          <input type="text" required id="title" ref={titleInputRef}></input>
        </div>
        <div className="control">
          <label htmlFor="title">Park Image</label>
          <input type="url" required id="image" ref={imageInputRef}></input>
        </div>

        <div className="control">
          <label htmlFor="address">Park Address</label>
          <input
            type="text"
            required
            id="address"
            ref={addressInputRef}
          ></input>
        </div>
        <div className="control">
          <label htmlFor="description">Park Description</label>
          <input
            type="textarea"
            required
            id="description"
            ref={descriptonInputRef}
          ></input>
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
