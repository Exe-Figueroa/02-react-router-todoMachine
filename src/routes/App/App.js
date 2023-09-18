import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../home/HomePage.jsx';
import { NewTodoPage } from '../new/NewTodoPage.jsx';
import { EditTodoPage } from '../edit/EditTodoPage.jsx';

export function App(props) {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/new' element={<NewTodoPage />}/>
        <Route path='/edit/:id' element={<EditTodoPage />}/>
        <Route path='*' element={<h1>Not found </h1>}/>
      </Routes>
    </HashRouter>
  );
}

