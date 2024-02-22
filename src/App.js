import React from 'react';
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Components.js/Home';
import Event from './Components.js/Event';
import Contact from './Components.js/Contact';
import Logout from './Components.js/Logout';
import Form from './Components.js/Form';
function App() {
  return (
   <Router>
    <Form/>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/event' Component={Event}/>
      <Route path='/contact' Component={Contact}/>
      <Route path='/logout' Component={Logout}/>
    </Routes>
   </Router>
  )
}

export default App
