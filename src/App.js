import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import Content from "./components/Content";

function App() {
  const [mode, setMode] = useState(false);

  const handleToggle = () => setMode(!mode);

  return (
    <div className={mode === true ? "bg-slate-700 w-full h-screen overflow-y-auto overflow-x-hidden" : "bg-white overflow-x-hidden h-screen w-full" }>
      <div className=' xs:mx-5 sm:mx-10 h-14 flex flex-row items-center justify-between'>
          <div className={mode === true ? "text-white font-semibold text-3xl" : "text-black font-semibold text-3xl"} >
              Explore Meals
          </div>
          <button className={mode === true ? "text-white font-semibold text-sm" : "text-black font-semibold text-sm"} onClick={handleToggle}>
            {mode === true ? <FontAwesomeIcon icon={faMoon}/>  : <FontAwesomeIcon icon={faSun} />} 
            {mode === true ? " Dark Mode" : " Light Mode" }
          </button>  
      </div>

      <hr />

      <Content mode={mode} />

    </div>
  );
}

export default App;
