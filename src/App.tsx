import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Menu from "./components/sections/menu";
import Skills from './components/sections/skills';
import Services from './components/sections/services';
import Works from './components/sections/works';
import Contact from './components/sections/contact';
import Introduction from './components/sections/introduction';


function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Introduction></Introduction>
      <Contact></Contact>
      <Works></Works>
      <Services></Services>
      <Skills></Skills>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
