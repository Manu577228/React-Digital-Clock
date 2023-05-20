import React, { useState } from 'react'
import './App.css';

function App() {

let time = new Date().toLocaleTimeString();

const [ count, setCount ] = useState(time);

const updateTime = () => {
  time = new Date().toLocaleTimeString();
  setCount(time);
}

setInterval(updateTime, 1000)

  return (
    <div className="App">
    <h1>{count}</h1>
    </div>
  );
}

export default App;
