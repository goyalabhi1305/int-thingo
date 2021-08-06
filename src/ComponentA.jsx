import './App.css';
import React, { useState } from 'react'

function App() {
  const [stateA, setStateA] = useState(0)
  const [stateB, setStateB] = useState(0)
  const [stateC, setStateC] = useState(0)
  const [stateD, setStateD] = useState(0)

  setInterval(() => {
    setStateA(stateA + 1)
    setStateB(stateB + 1)
    setStateC(stateC + 1)
    setStateD(stateD + 1)
  }, 1);

  return (
    <div className="App">
      StateA : {stateA}
      <br />
      StateB : {stateB}
      <br/>
      StateC : {stateC}
      <br/>
      StateD : {stateD}
      <br/>
      Hello
    </div>
  );
}

export default React.memo(App);
