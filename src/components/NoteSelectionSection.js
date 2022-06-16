import React from "react";
import Header from "../components/Header.js";
import NotePreview from "../components/NotePreview.js";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function NoteSelectionSection() {


//All saved notes are placed into "savedNotes" state to be munipulated

let localStorageSetter = []

const [savedNotes,setSavedNotes] = useState(JSON.parse(localStorage.getItem("savedNotes")));

//Sets "savedNotes" to empty array if array isnt already filled

if(savedNotes===null){
  localStorage.setItem("savedNotes",JSON.stringify(localStorageSetter))
}

//Sets "editNote" localStorage to empty array whenever home page is loaded

localStorage.setItem("editedNote",JSON.stringify(localStorageSetter))

//"deleteNote" function fills the "selectedNote" object when the trash button is clicked
//then it uses the selectedNote to filter through the "savedNotes" localStorage  by using its note and make 
//a new array without the deleted note. Then makes new array the new "savedNotes" then 
//sets the "savedNotes" state for dynamic deleting

let deleteNote = (event) => {
  let selectedNote ={
    title:"",
    date:"",
    note:""
  }
  


  let buttonDiv = event.target.parentNode;
  let noteSubDiv =buttonDiv.parentNode
  let noteDiv = noteSubDiv.parentNode

  selectedNote.title=noteDiv.parentNode.children[1].children[0].innerHTML
  selectedNote.date=noteDiv.parentNode.children[1].children[1].innerHTML
  selectedNote.note=noteDiv.parentNode.children[0].children[0].children[0].innerHTML

  let exactNote = savedNotes.filter(note => note.note === selectedNote.note)

  let newNotesArray = savedNotes.filter(note => note.key != exactNote[0].key)

  localStorage.setItem("savedNotes",JSON.stringify(newNotesArray))
  setSavedNotes(JSON.parse(localStorage.getItem("savedNotes")))

  console.log(selectedNote)


  console.log(newNotesArray)
}

//"editNote" function takes information from the clicked note and fills selected note object then 
//then it uses that information to filter through the "savedNotes" state by using its note to find the exact note object.
// that object is then set as "editedNote" in local storage

let editNote = (event) =>{

  let selectedNote ={
    title:"",
    date:"",
    note:""
  }

  let note = event.target.parentNode;
  let NotePreviewDiv =note.parentNode;
  let noteDiv = NotePreviewDiv.parentNode;
  let noteSubDiv = noteDiv.children[1]

  
  selectedNote.title=noteSubDiv.children[0].innerHTML;
  selectedNote.date=noteSubDiv.children[1].innerHTML;
  selectedNote.note=note.children[0].innerHTML;

  let editKeyGrabber = savedNotes.filter(note => note.note === selectedNote.note)

  localStorage.setItem("editedNote",JSON.stringify(editKeyGrabber[0]))


}

//Maps through savedNotes and returns the "NotePreview" component for each note

const noteAssigner = savedNotes.map((note)=>{
  return(
  <NotePreview 
    key={note.key}
    title={note.title}
    date={note.date}
    note={note.note}
    delete={deleteNote}
    edit={editNote}
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