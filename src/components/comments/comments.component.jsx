import React, { useState } from "react";

import "./comments.styles.scss";
import CreateArea from "./create-area.component";
import Note from "./note.component";

const Comments = () => {
  const [notes, setNotes] = useState([]);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState("");

  function addNote(newNote, NewDate) {
    // setCounter(counter);
    // counter = counter + 1;
    // let currentDate = new Date().toLocaleString();
    setDate(NewDate.toLocaleString());
    setCount(count + 1);
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  return (
    <>
      <div className="comments-component">
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <section className="content-item comments-component" id="comments">
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <CreateArea key={count} count={count} onAdd={addNote} />

                <h3>{count} Comments</h3>

                {notes.map((noteItem, index) => {
                  return (
                    <Note
                      key={index}
                      id={index}
                      title={noteItem.title}
                      content={noteItem.content}
                      date={date}
                      // onDelete={deleteNote}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Comments;
