import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Results from "./components/results/Results";

function App() {
  return (
    <div className="app">
      <Header/>
      <Navbar/>
      <Results/>
    </div>
  );
}

export default App;
