import React from "react";
import trash from "../images/trash.png"
import { Link } from "react-router-dom";

export default function NotePreview(props){
    return(
        <div className="note-preview-container">
            <Link onClick={props.edit} to="/note">
            <div className="note-preview">
                <p>{props.note}</p>
            </div>
            </Link>
            <div className="note-preview-subtitle">
                <p className="note-title">{props.title}</p>
                <p className="note-date">{props.date}</p>
                <div onClick={props.delete} className="note-button">
                    <button><img src={trash}></img></button>
                </div>
            </div>
        </div>
    )
}