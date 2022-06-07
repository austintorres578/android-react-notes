import React from "react";
import Header from "../components/Header.js";
import NotePreview from "../components/NotePreview.js";
import { useState } from "react";


export default function NoteSelectionSection() {

let localStorageArray = []


if(JSON.parse(localStorage.getItem("savedNotes"))===null){
  localStorage.setItem("savedNotes",JSON.stringify(localStorageArray))
}


const [savedNotes,setSavedNotes] = useState(JSON.parse(localStorage.getItem("savedNotes")));


const noteAssigner = savedNotes.map((note)=>{
  return(
  <NotePreview 
    key={note.key}
    title={note.title}
    date={note.date}
    note={note.note}
  />
  )
})




  return (
    <div className="App">
         <Header 
          noteCount={JSON.parse(localStorage.getItem("savedNotes")).length}
         />
       <div className="notes-section">
         {noteAssigner}
       </div>
     </div>
  );
}