import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

type Note = {
  id: string;
  title: string;
};

export const Menu: React.FC = () => {
  const mockNotes: Note[] = [
    { id: '1', title: 'Note 1' },
    { id: '2', title: 'Note 2' },
    { id: '3', title: 'Note 3' },
    { id: '1', title: 'Note 4' },
    { id: '2', title: 'Note 5' },
    { id: '3', title: 'Note 6' },
  ];

  const [notes, setNotes] = useState<Note[]>(mockNotes);

  /*
  useEffect(() => {
    axios.get('http://localhost:3000/notes').then((response) => {
      setNotes(response.data);
    });
  }, []);
  */

  return (
    <ul className="list-group rounded-1">
      {notes.map((note) => (
        <li key={note.id} className="list-group-item">
          <Link to={`/note/${note.id}`}>{note.title}</Link>
        </li>
      ))}
    </ul>
  );
};
