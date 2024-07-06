import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [count,setcount] = useState(0)
// let count =15

const addvalue = () => {
  count = count + 1
  count = count + 1
  count = count + 1
  count = count + 1
  setcount(count)

}
const removevale = () =>{
  if(count>0){
    count = count - 1
    setcount(count)   
  }
}
  return (
    <>
      <h1 className='codecapsule'> Code Capsule</h1>
      <h2> Capsule values : {count}</h2>
      <button className='button'
      onClick={addvalue}>Add</button> 
      <button className='buttons'
      onClick={removevale}>Remove</button>

    </>
  )
}

export default App
