import React from "react";
import "./editmodal.css";

const EditModal = ({ show, toggleModal, editId, notes, setNotes }) => {
  // console.log(editId)
  const updateHandler = () => {
    const updateNotes = notes.map((elem) => {
      // console.log(elem);
      if (editId === elem.id) {
        return {
          ...elem,
          title: document.getElementById("edittitle").value,       //edittitle value in the title
          desc: document.getElementById("editdesc").value,         //editdesc value in the desc
        };
      } else {
        return elem;
      }
    });
    console.log(updateNotes);
    setNotes(updateNotes);             //setNotes is updating the new edited notes to UI
  };
  return (
    <div>
      <div
        className={`modal fade ${show ? "show" : ""}`}
        style={{ display: show ? "block" : "none" }}
        tabindex="-1"
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
                onClick={() => {
                  toggleModal();
                  updateHandler();
                }}
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
