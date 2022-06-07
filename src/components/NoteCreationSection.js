import React, { useState } from "react";
import NoteCreationTextArea from "./NoteCreationTextArea";
import NoteCreationTitle from "./NoteCreationTitle";

export default function NoteCreationSection(){

    let d = new Date();

    const [currentNote, setCurrentNote] = useState({
        key: JSON.parse(localStorage.getItem("savedNotes")).length + 1 ,
        title:"",
        date:`${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`,
        note:""
    })

    let saveNote = () =>{
        let originalLocal = JSON.parse(localStorage.getItem("savedNotes"))
        originalLocal.unshift(currentNote)
        localStorage.setItem("savedNotes",JSON.stringify(originalLocal))
    }

    return(
        <div>
            <NoteCreationTitle
                currentNote = {currentNote}
                editCurrentNote ={setCurrentNote}
            />
            <NoteCreationTextArea
                currentNote = {currentNote}
                editCurrentNote ={setCurrentNote}
                saveNote ={saveNote}
            />
        </div>
    )
}