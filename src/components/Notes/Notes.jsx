import React from "react";
import './notes.css'

const Notes = ({element, notes, setNotes, toggleModal, seteditId}) => {          //"element","Notes","setNotes" pass as a destruction
  console.log(element);

  const removeHandler = (id) => {
    const newNotes = notes.filter((elm) => elm.id !== id);
    setNotes(newNotes);
    
  };

  const editHandler = (id) =>{
    seteditId(id);
    notes.filter((elm)=>{
      if(elm.id===id){
        document.getElementById("edittitle").value=elm.title;        //already written in the edit modal
        document.getElementById("editdesc").value=elm.desc;
      }
    } )
  }
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
                {/* <button
                  type="button"
                  className="btn btn-primary"
                  onClick={toggleModal} // Open modal on click
                >
                  Edit
                </button> */}
                 
                  <button
                  type="button"
                  className="btn btn-primary"
                  onClick ={() => {
                    toggleModal();               
                    editHandler(element.id);  }}>
                  Edit
                </button>
  
                <button className="btn btn-danger mx-2" onClick={()=>{
                  removeHandler(element.id)
                }} >Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Notes;
