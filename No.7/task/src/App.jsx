import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FilteredList from './FilteredList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FilteredList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
