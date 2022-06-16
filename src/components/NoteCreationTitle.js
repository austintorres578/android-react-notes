import React from "react";
import {Link} from "react-router-dom";
import backIcon from "../images/backIcon.jpg"
import editIcon from "../images/editIcon.png"
import searchIcon from "../images/searchIcon.png"
import settingIcon from "../images/settingsIcon.png"
import { useState } from "react";

export default function NoteCreationTitle(props){

//"handleTitleChange" uses the "currentNote" state as the "editCurrentNote" prop and 
//updates the "currentNotes" title to anything thats in the title input.
    
    function handleTitleChange(event){
    
            props.editCurrentNote(prevState => {

            prevState.title=event.target.value;
            return{...prevState}
        })

    }

    return(
        <div className="note-creation-title-container">
            <div className="note-creation-title">
                <Link to="/"><button><img src={backIcon}></img></button></Link>
                <input id="title-input" name="title" onChange={handleTitleChange} placeholder="Title" defaultValue={props.existingTitle} required></input>
            </div>
        </div>
    )
}