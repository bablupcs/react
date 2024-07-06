import { useState } from "react"
function App() {
 let [color, setColor] = useState("white")

  return ( 
    <>
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor:color}}></div>

    <div className="fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-2">
      <div className=" fixed flex-wrap justify-center gap-5 shadow-lg bg-white px-2 py-1 rounded-full">
       
        <button onClick={ () =>setColor("red")}
         className="outline-none px-3 py-1 rounded-full text-white" 
          style={{backgroundColor : "red"}}>
          Red
        </button>
        <button onClick={ () =>setColor("green")}
        className="outline-none px-3 py-1 rounded-full text-white" 
          style={{backgroundColor : "Green"}}>
          Green
        </button>
        <button onClick={ () =>setColor("Blue")}
        className="outline-none px-3 py-1 rounded-full  text-white" 
          style={{backgroundColor : "Blue"}}>
          Blue
        </button>
        <button onClick={ () =>setColor("yellow")}
        className="outline-none px-3 py-1 rounded-full  text-black" 
          style={{backgroundColor : "yellow"}}>
          Yellow
        </button>
        <button onClick={ () =>setColor("orange")}
        className="outline-none px-3 py-1 rounded-full  text-white" 
          style={{backgroundColor : "orange"}}>
          Orange
        </button>
        <button onClick={ () =>setColor("Olive")}
        className="outline-none px-3 py-1 rounded-full  text-white" 
          style={{backgroundColor : "Olive"}}>
          Olive
        </button>
        </div>
    </div>
   </>
  

  )
}

export default App
