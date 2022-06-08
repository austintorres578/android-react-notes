import React from "react";
import { Link } from "react-router-dom";

export default function NoteCreationTextArea(props){


    const handleNoteChange = (event) =>{
        
        props.editCurrentNote(prevState => {
            
            prevState.note=event.target.value
            return{...prevState}
        })

    }

    console.log(props.currentNote)

    return(
        <div className="note-creation-text-area">
            <textarea onChange={handleNoteChange}></textarea>
            <Link to="/"><button onClick={props.saveNote}>Save</button></Link>
        </div>
    )
}