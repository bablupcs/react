import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [lenght, setLenght] = useState(8)
  const [number, setNumber] = useState(false);
  const [symbl, setSymbl] = useState(false);
  const [passwordAllowed, setPasswordAllowed] = useState("");

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) {srt+="0123456789"}
    if(symbl) {srt+="{}[]+_)(*&^%$#@!~"}
    for (let i = 1; i <= array.length; i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass = str.charAt(char)
    }
    setPassword(pass)
  }, [lenght,number,symbl,setPasswordAllowed])
  return (
   <>
  

    
    <div className="card-body card bg-slate-400">
    <h1 className='text-center m-4' >Password Generator</h1>
      <div className="input-group mb-5">
        <input 
         type="text" 
         className="form-control" 
         placeholder="Recipient's username" 
         aria-label="Recipient's username" 
         aria-describedby="basic-addon2"
         value={passwordAllowed}
         readOnly/>
          <button className="input-group-text bg-blue-600" id="basic-addon2">@example.com</button>
      </div>
    </div>


     
   </>
  )
}

export default App
