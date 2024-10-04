import React from "react";
import"./editmodal.css";

const EditModal = ({show, toggleModal}) => {
  return (
    <div>
      <div
          className={`modal fade ${show ? 'show' : ''}`}
          style={{ display: show ? 'block' : 'none' }}
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
              <form>
              <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Your Title"
      
                />
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  placeholder="Your Description"
               
                />
              </form>
              </div>
            </div>
            <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={toggleModal}
            >
              Close
            </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditModal;
