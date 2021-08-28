import React from 'react';
import './App.css';
import LeftColumn from './LeftColumn/LeftColumn';
import RightColumn from './RightColumn/RightColumn';
import { ContextProvider } from "./Context/Context";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>LOGO</h2>
        <nav>
          <div className="navbar-item">Home</div>
          <div className="navbar-item">My Portfolio</div>
          <div className="navbar-item">Clients</div>
          <div className="navbar-item btn" onClick={() => alert("email: hardik.sharma1011@gmail.com")}>Get in Touch</div>
        </nav>
      </header>
      <div className="columns">
        <ContextProvider>
          <LeftColumn />
          <RightColumn />
        </ContextProvider>
      </div>


    </div>
  );
}

export default App;
