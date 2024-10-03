import { useState } from "react";
import './App.css'
import "bootstrap";
import "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form/Form";
import NotesEdit from "./components/Notes/Notes";
import Navbar from "./components/Navbar/Navbar";
import EditModal from "./components/Form/EditModal";
import Login from "./components/LogIn/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState(getNotesFromLs);
  localStorage.setItem("notes",JSON.stringify(notes));
  console.log(notes);
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      {/* <Login/> */}
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
            <div className="box col-md-10">
              <div className="card">
                <h5 className="card-header">Your Notes</h5>
                <div className="card-body">
                  <p className="card-text">No Data Present</p>
                </div>
              </div>
            </div>
          ) : (
            notes.map((element) => {
              return (
                <NotesEdit
                  element={element}
                  key={element.id}
                  notes={notes}
                  setNotes={setNotes}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
  
  function getNotesFromLs(){
    const note= JSON.parse(localStorage.getItem("notes"));
    if(note){
      return note
    }else{
      return [];
    }
  }
};

export default App;
