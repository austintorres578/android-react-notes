import React, { useState } from "react";
import NoteCreationTextArea from "./NoteCreationTextArea";
import NoteCreationTitle from "./NoteCreationTitle";

export default function NoteCreationSection(){

    let d = new Date();

    let currentKey 

    //Checks to see if "savedNotes" localStorage is filled and if so the "currentKey" element will be
    //assigned a number that is 1+ of the most recently created element in the "savedNotes". if the 
    //"savedNotes" localStorage is not filled the "currentKey" variable will equal 1

    if(JSON.parse(localStorage.getItem("savedNotes")).length!=0){
        currentKey=JSON.parse(localStorage.getItem("savedNotes"))[0].key+1;
    }else{
        currentKey=1
    }

    //The "currentNote" state is used to create an object that will represent the note that is being 
    //created or edited in the "noteCreationSection". The "key" property is made from the currentKey variable.
    //"title" is defaultedd as the "editedNote" localStorage title so when a note is being edited the old 
    //title will be in the input. If a new note is being created the "title" will be empty. "Date" is 
    //calculated. "note" works the same as "title"

    const [currentNote, setCurrentNote] = useState({
        key: currentKey,
        title:JSON.parse(localStorage.getItem("editedNote")).title,
        date:`${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`,
        note:JSON.parse(localStorage.getItem("editedNote")).note
    })

    //"originalLocal" variable and the "saveNote" function work together to be able to save new and 
    //edited notes. Since the "editNote" function uses the "note" property to filter, the note wont be
    //saved if textarea is empty which is the reasoning behind the first "if" statement. The second "if"
    //statement is used to determine if the note is being edited. it checks if the "editedNote" localStorage
    //is filled and uses that localStorage to filter the object out from the "savedNotes" local so when the edited
    //note is saved it unshifts the "currentNote" to the front of the new "savedNotes". if "editNote"
    //isnt filled then the filter wont happen and whatever note gets saved will be unshifted to the 
    //"savedNotes" local

    let originalLocal = JSON.parse(localStorage.getItem("savedNotes"))

    let saveNote = () =>{
        if(currentNote.note===undefined){
            alert("Please type note")
        }
        else if(JSON.parse(localStorage.getItem("editedNote")).length!=0){
            originalLocal=JSON.parse(localStorage.getItem("savedNotes")).filter(note => note.title != JSON.parse(localStorage.getItem("editedNote")).title)
            originalLocal.unshift(currentNote)
            localStorage.setItem("savedNotes",JSON.stringify(originalLocal))
            console.log("note edited")
        }else{
            originalLocal.unshift(currentNote)
            localStorage.setItem("savedNotes",JSON.stringify(originalLocal))
            console.log("New note Added")
        }
    }

    return(
        <div>
            <form onSubmit={saveNote}>
                <NoteCreationTitle
                    currentNote = {currentNote}
                    editCurrentNote ={setCurrentNote}
                    existingTitle={currentNote.title}
                />
                <NoteCreationTextArea
                    currentNote = {currentNote}
                    editCurrentNote ={setCurrentNote}
                    existingNote={currentNote.note}
                    saveNote ={saveNote}
                />
            </form>
        </div>
    )
}