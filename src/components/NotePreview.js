import React from "react";

export default function NotePreview(props){
    return(
        <div className="note-preview-container">
            <div className="note-preview">
                <p>{props.note}</p>
            </div>
            <div className="note-preview-subtitle">
                <p className="note-title">{props.title}</p>
                <p className="note-date">{props.date}</p>
            </div>
        </div>
    )
}