import React from "react";
import Header from "../components/Header.js";
import NotePreview from "../components/NotePreview.js";
import { useState } from "react";


export default function NoteSelectionSection() {

const [savedNotes,setSavedNotes] = useState(JSON.parse(localStorage.getItem("savedNotes")));

let localStorageSetter = []


if(savedNotes===null){
  localStorage.setItem("savedNotes",JSON.stringify(localStorageSetter))
}

console.log(savedNotes)

let deleteNote = (event) => {
  let deletedNote ={
    title:"",
    date:"",
    note:""
  }


  let buttonDiv = event.target.parentNode;
  let noteSubDiv =buttonDiv.parentNode
  let noteDiv = noteSubDiv.parentNode

  deletedNote.title=noteDiv.parentNode.children[1].children[0].innerHTML
  deletedNote.date=noteDiv.parentNode.children[1].children[1].innerHTML
  deletedNote.note=noteDiv.parentNode.children[0].children[0].innerHTML

  let newNotesArray = savedNotes.filter(note => note.title != deletedNote.title && note.note != deletedNote.note && note.date != deletedNote.date)

  localStorage.setItem("savedNotes",JSON.stringify(newNotesArray))
  setSavedNotes(JSON.parse(localStorage.getItem("savedNotes")))

  console.log(newNotesArray)
}

const noteAssigner = savedNotes.map((note)=>{
  return(
  <NotePreview 
    key={note.key}
    title={note.title}
    date={note.date}
    note={note.note}
    delete={deleteNote}
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