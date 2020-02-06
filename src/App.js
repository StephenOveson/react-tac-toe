import React from 'react';
import './App.css';

import Header from './components/Header/Header'
import TicTacToe from './components/TicTacToe/Board'

function App() {
  return (
    <>
      <Header></Header>
      <TicTacToe />
    </>
  );
}

export default App;
