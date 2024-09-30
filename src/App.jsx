import { useState } from "react";
// import './App.css'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Notes from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import NotesEdit from "./components/Notes/Notes";
import Navbar from "./components/Navbar/Navbar";
import EditModal from "./components/Form/EditModal";

const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState([]);
  console.log(notes)
  return (
    <div>
      <EditModal/>
      <Navbar/>
      <Form title = {title} setTitle = {setTitle} desc = {desc} setDesc = {setDesc} notes = {notes} setNotes = {setNotes}/>
      <NotesEdit/>
    </div>
  );
}

export default App;
