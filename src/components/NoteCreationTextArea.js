import React from "react";
import { Link } from "react-router-dom";

export default function NoteCreationTextArea(props){

//"defaultVal" variable is used to give the text area a value if a note is being editted.


    let defaultVal ="";
    
    if(JSON.parse(localStorage.getItem("editedNote"))!=null){
    
        defaultVal=JSON.parse(localStorage.getItem("editedNote")).note
    }

//"handleNoteChange" function is used to manipulate "currentNote" but as the "editCurrentNote" prop.
//it takes whatever value thats inside the textarea and sets it as the "currentNote" note

    const handleNoteChange = (event) =>{
        
        props.editCurrentNote(prevState => {
            
            prevState.note=event.target.value
            return{...prevState}
        })

    }

    return(
        <div className="note-creation-text-area">
            <textarea onChange={handleNoteChange} defaultValue={props.existingNote} required></textarea>
            <Link to="/"><button onClick={props.saveNote}>Save</button></Link>
        </div>
    )
}