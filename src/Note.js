import React, { useState } from 'react';

function Note() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');

  const addNote = () => {
    if (noteText.trim()) {
      setNotes([...notes, noteText.trim()]);
      setNoteText('');
    }
  };

  return (
    <div>
      <h2>Notes</h2>
      <textarea
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Write your note here..."
      />
      <button onClick={addNote}>Add Note</button>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default Note;
