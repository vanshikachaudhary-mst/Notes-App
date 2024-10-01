import React from "react";

const Notes = ({element}) => {
  console.log(element);
  return (
    <div>
      <div className="container my-4" >
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card">
              <h5 className="card-header">Your Notes</h5>
              <div className="card-body text-capitalize">
                <h5 className="card-title">{element.title}</h5>
                <p className="card-text">{element.desc}</p>
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
