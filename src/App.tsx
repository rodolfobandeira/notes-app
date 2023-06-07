import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/note/:id" element={<Layout />} />
        <Route path="/" element={<Navigate to="/note/1" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;