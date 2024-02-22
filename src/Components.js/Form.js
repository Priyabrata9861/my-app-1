import React from 'react';

import { Link } from 'react-router-dom'; 

function Form() {
   

     return (
      <div>
      <nav>
      <ul>
              <li>  
                <Link to="/" >Home</Link>
               </li>
               <li>
                <Link to="/event">Event</Link>
               </li>
               <li>
                <Link to="/contact">Contact</Link>
               </li>
               <li>
                <Link to="/logout">Logout</Link>
               </li>
      </ul>
    </nav>
    </div>
  )
}
export default Form;










