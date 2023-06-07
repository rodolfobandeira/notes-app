import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

type Note = {
  id: string;
  title: string;
  content: string;
};

export const Content: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [note, setNote] = useState<Note | null>(null);

  useEffect(() => {
    const mockNotes: Note[] = [
      { id: '1', title: 'Note 1', content: 'This is note 1' },
      { id: '2', title: 'Note 2', content: 'This is note 2' },
      { id: '3', title: 'Note 3', content: 'This is note 3' },
    ];

    const selectedNote = mockNotes.find((note) => note.id === id);
    setNote(selectedNote || null);
  }, [id]);

  if (!note) return null;

  return (
    <div className="card rounded-1">
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.content}</p>
      </div>
    </div>
  );
};
