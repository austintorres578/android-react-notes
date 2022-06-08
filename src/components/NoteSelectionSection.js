import React from "react";
import Header from "../components/Header.js";
import NotePreview from "../components/NotePreview.js";
import { useState } from "react";


export default function NoteSelectionSection() {

const [savedNotes,setSavedNotes] = useState(JSON.parse(localStorage.getItem("savedNotes")));

let localStorageArray = []


if(savedNotes===null){
  localStorage.setItem("savedNotes",JSON.stringify(localStorageArray))
}



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
          noteCount={savedNotes.length}
         />
       <div className="notes-section">
         {noteAssigner}
       </div>
     </div>
  );
}