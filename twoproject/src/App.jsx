import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {  
  // let myObj = {
  //   userName : "bablu Singh",
  //   age : 23
  // }

  return (
    <>
      <Card channel = "code capsule" btnText = "click me"  />
      <Card channel = "bablu Singh"  btnText = "visit me"/>
      
    </>
  )
}

export default App

