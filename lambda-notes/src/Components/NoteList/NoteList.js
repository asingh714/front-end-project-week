import React from "react";
import { Link } from "react-router-dom";

import NoteBox from "../NoteBox/NoteBox";

import "./NoteList.css";

const NoteList = props => {
  if (!props.notes) {
    return <h3>Notes are loading!</h3>;
  }

  return (
    <div className="note-list-container">
      <h2>Your Notes:</h2>
      <div className="note-list">
        {props.notes.map(note => {
          return (
            <Link exact to={`/note/${note._id}`} key={note._id}>
              <NoteBox title={note.title} textBody={note.textBody} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NoteList;
