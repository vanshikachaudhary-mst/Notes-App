import React from "react";
import "./extra.css";

const Extra = () => {
  return (
    <div>
      <div className="container my-4">
        <div className="row ">
          <div className="col-6">
            <div className="main-container">
              <form>
                <div className="form-group">
                  <label className="label-field">USERNAME</label>
                  <input
                    className="form-one"
                    placeholder="Enter Username"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label className="label-field">PASSWORD</label>
                  <input
                    className="form-one"
                    placeholder="Enter Password"
                    type="text"
                  />
                </div>
                <button className="btn">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra;
