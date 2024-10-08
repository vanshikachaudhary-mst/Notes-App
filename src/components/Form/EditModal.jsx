import React from "react";
import "./editmodal.css";

const EditModal = ({ show, toggleModal, editId, notes, setNotes }) => {
  const updateHandler = () => {
    const title = document.getElementById("edittitle").value;
    const desc = document.getElementById("editdesc").value;

    if (!title.trim() || !desc.trim()) {
      alert("Enter your Title and Description.");
      return;
    }

    const updateNotes = notes.map((elem) => {
      if (editId === elem.id) {
        return {
          ...elem,
          title, 
          desc,  
        };
      } else {
        return elem;
      }
    });

    setNotes(updateNotes);
    toggleModal(); 
  };

  return (
    <div>
      <div
        className={`modal fade ${show ? "show" : ""}`}
        style={{ display: show ? "block" : "none" }}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden={!show}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit
              </h5>
            </div>
            <div className="modal-body">
              <div className="form-data">
                <form className="modal-form">
                  <input
                    type="text"
                    className="form-control"
                    id="edittitle"
                    placeholder="Your Title"
                  />
                  <input
                    type="text"
                    className="form-control"
                    id="editdesc"
                    placeholder="Your Description"
                  />
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={updateHandler}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
