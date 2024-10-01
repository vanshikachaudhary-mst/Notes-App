import { useState } from "react";
// import './App.css'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form/Form";
import NotesEdit from "./components/Notes/Notes";
import Navbar from "./components/Navbar/Navbar";
import EditModal from "./components/Form/EditModal";

const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState([]);
  // localStorage.setItem("notes").JSONstringify(notes)
  console.log(notes);
  return (
    <div>
      <EditModal />
      <Navbar />
      <Form
        title={title}
        setTitle={setTitle}
        desc={desc}
        setDesc={setDesc}
        notes={notes}
        setNotes={setNotes}
      />
      <div className="container my-4">
      <div className="row justify-content-center">

      {notes.length === 0 ? (       
        <div className="col-md-10">
          <div className="card">
            <h5 className="card-header">Your Notes</h5>
            <div className="card-body">
              <h5 className="card-title">Message</h5>
              <p className="card-text">No Notes Present</p>
            </div>
          </div>
        </div>
      ) : (
        notes.map((element) => {
          return <NotesEdit element = {element}/>;
        })
      )}
    </div>
    </div>
   </div>
  );
};

export default App;
