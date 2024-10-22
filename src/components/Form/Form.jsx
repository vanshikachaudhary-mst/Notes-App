import React from "react";
import "./form.css";
import { useNavigate } from "react-router-dom";

const Form = ({ title, setTitle, desc, setDesc, notes, setNotes }) => {
  const navigate = useNavigate();
  const inputHandler = (e) => {
    if (e.target.id === "title") {
     
      setTitle(e.target.value);
    } else {
      setDesc(e.target.value);
    }
  };
  const addNotesHandler = (e) => {
    e.preventDefault();
    if (title.trim() !== "" && desc.trim() !== "")
      
      setNotes((notes) => {
        return [
          ...notes,
          {
           
            title: title.trim(),
            desc: desc.trim(),
            id: new Date().getTime(),
          },
        ];
      });
    setTitle("");  
    setDesc("");
    navigate("/notes");
  };
  return (
    <div>
      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <form
              style={{
                border: "1px solid	#D3D3D3",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <div className="form-group mt-2 ">
                <label for="exampleInputEmail1">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Your Title"
                  value={title}
                  onChange={inputHandler}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1 ">Description</label>
                <textarea
                  type="description"
                  className="form-control"
                  rows="4"
                  id="desc"
                  placeholder="Type Something Here"
                  value={desc}
                  onChange={inputHandler}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary my-3"
                onClick={addNotesHandler}
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
