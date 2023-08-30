import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./nav/Nav.js"
import About from "./about/About"
import Skills from "./skills/Skills"
import Platforms from "./platforms/Platforms"
import Contact from "./contact/Contact"
import "./styles/app.css"
import Background from "./background/Background.js"
import PlayerStats from "./playerStats/PlayerStats.js"
import Trailer from "./trailer/Trailer.js"

const App = () => {
  return (
  <Router>
    <Nav />
    <Background/>
    <Routes>
    <Route path="/trailer" element={<Trailer/>}/>
      <Route path="/" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/platforms" element={<Platforms/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <PlayerStats />
  </Router>)
}

export default App;
