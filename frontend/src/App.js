import { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [backendMessage, setBackendMessage] = useState();

  useEffect(() => {
    async function fetchBackendMessage() {
      setBackendMessage(await (await fetch('/api/message')).json());
    }
    fetchBackendMessage();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>{backendMessage}</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
