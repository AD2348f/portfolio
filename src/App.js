import './App.css';
import "./assets.css";
import portrait from "./pictures/Portrait1.png"
import { AiOutlineCopyrightCircle } from "react-icons/ai";



import Content from "./components/Content"
import Navbar from "./components/Navbar"
import useApi from './hooks/UseApi'
import Projects from "./components/Projects"
import React, { useEffect, useState } from "react";
import Techstack from './components/Techstack';



function App() {

  const [projects] = useApi()
  const [isLoading, setIsLoading] = useState(false);
  console.log (projects)
  return (
    <div className="App" id="home">
      
      <Navbar />
      <Content />
      <Projects />
      <Techstack />

<div className="App__Copyright"><AiOutlineCopyrightCircle size={'0.8rem'} />Alexander Ditz 2021</div>
    </div>
  );
}
export default App;
