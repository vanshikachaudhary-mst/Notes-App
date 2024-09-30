import React from "react";

const Notes = () => {
  return (
    <div>
      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card">
              <h5 className="card-header">Your Notes</h5>
              <div className="card-body">
                <h5 className="card-title">Title</h5>
                <p className="card-text">Description</p>
                {/* <button className="btn btn-primary">Edit</button> */}
                {/* <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Edit
                </button> */}
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Edit
                </button>
                <button className="btn btn-danger mx-2">Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Notes;
