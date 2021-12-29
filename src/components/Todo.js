import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalOpen, setModalOpen] = useState(false); //returns an array with exactly two elements

  function deleteHandler() {
    setModalOpen(true);
    console.log("Clicked!");
    console.log(props.title);
  }

  function closeModalHandler() {
    setModalOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
      {modalOpen && <Backdrop onCancel={closeModalHandler}/>}
    </div>
  );
}

export default Todo;
