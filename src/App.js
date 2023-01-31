import Table from "./components/Table";
import "./App.css";
import { useState } from "react";
function App() {
  const [mode, setMode]= useState('light');
  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
    }else{
      setMode('light');
    }
  }
  return (
    <>
      <nav class={`navbar navbar-light bg-${mode} by-4`}>
        <div class="container-fluid">
          <span class={`navbar-text fs-2 fw-bold text-${mode==='light' ? 'dark': 'light'}`}>Calculator</span>

          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={togglemode}
            />
            <label class={`form-check-label fw-normal text-${mode==='light' ? 'dark': 'light'}`} for="flexSwitchCheckDefault">
              Dark Mode
            </label>
          </div>
        </div>
      </nav>
      <Table  />
    </>
  );
}

export default App;
