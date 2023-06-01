import { useState } from 'react'
import React from "react"

import './App.css'
import Sidenav from "./Components/sideNav"
import Main from './Components/Main'
import Work from './Components/Workitem'
import Projects from './Components/Projects'
import Contact from "./Components/Contact"




function App() {
  

  return (
    <>
    <div>
        <Sidenav />                 
        <Main />
        <Work />
        <Projects/>
        <Contact />
    </div>
      
    </>
  )
}

export default App
