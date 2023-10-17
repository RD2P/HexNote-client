import React, { useState, useRef } from 'react'
import { hexToString, stringToHex } from '../js/functions.js'
import { v4 as uuidv4 } from 'uuid'
import HexedOutput from './HexedOutput.jsx'
import './App.css'


function App() {

  const textareaRef = useRef(null)
  const [hexed, setHexed] = useState([])

  const handleKey = (e) => {
    if (e.key === "Enter"){
      const hex = stringToHex(textareaRef.current.value)
      setHexed([...hexed, hex])
      textareaRef.current.value = ''
    }
  }

  const handleSend = () => {
    console.log(hexed)
  }

  return (
    
      <div className="container">
        <h1>Hexer</h1>
        <div className="textoutput">
          {
            hexed.map((item) => <HexedOutput key={uuidv4()} hexed={item}/>)
          }
        </div>
        <div className="textarea-wrapper">
          <textarea className="textarea"  rows="3" ref={textareaRef} onKeyDown={handleKey}/>
        </div>
          <div className="button-wrapper">
            <button className="send-button" onClick={handleSend}>Send to notebook</button>
          </div>
      </div>
  
  )
}

export default App
