import React from "react";
import {Link} from "react-router-dom";

export default function Header(props){
    return(
        <div className="notes-header-container">
            <div className="notes-header">
                <h1>All notes</h1>
                <p>{props.noteCount} notes</p>
            </div>
            <div className="notes-button">
                <Link to="/note"><button onClick={props.createNote}>Create Note</button></Link>
            </div>
        </div>
    )
}