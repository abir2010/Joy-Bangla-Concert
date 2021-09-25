import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import Container from './Components/Container/Container';

function App() {
  return (
    <div className="App">
      <Header />
      <Container />
    </div>
  );
}

export default App;
