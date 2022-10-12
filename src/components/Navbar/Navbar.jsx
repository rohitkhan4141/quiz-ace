import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showMediaIcon, setShowMediaIcon] = useState(false);
  return (
    <div className='navbar'>
      <div className='logo'>
        <h2>Logo</h2>
      </div>
      <ul className='nav-lists'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
        <li>
          <Link to='/statistics'>Statistics</Link>
        </li>
      </ul>
      {/* <button
        onClick={() => setShowMediaIcon(!showMediaIcon)}
        className='hamburger'
      >
        btn
      </button> */}
    </div>
  );
};

export default Navbar;
