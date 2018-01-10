import React from 'react';
import { Link,  BrowserRouter as Router,
} from 'react-router-dom'; 

const Navbar = () => {
  return (
    <div id="navbar">
      <label>Example Navbar:</label>
      <ul>
    	  <li>
    	  	<Link to="/">Start</Link>
    	  </li>
    	  <li>
    	  	<Link to="/middle">Middle</Link>
    	  </li>
    	  <li>
    	  	<Link to="/end">End</Link>
    	  </li>
      </ul>
    </div>
  );
};

export default Navbar;