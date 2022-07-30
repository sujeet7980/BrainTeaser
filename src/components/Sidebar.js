import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Link, Routes, useLocation } from "react-router-dom";
const Sidebar = () => {
  const location = useLocation();
  const [currLocation, setCurrLocation] = useState(location.pathname);
//   console.log(currLocation);
  useEffect(() => {
    var element = document.getElementsByClassName(currLocation)[0];
    // console.log(element);
    element.classList.add("active");
  }, [currLocation]);
  return (
    <div>
      <aside>
        <div class="top">
          <div class="logo">
            <img src="./img/logo.png" alt="" />
            <h2>
              MASTER<span class="danger">MIND</span>
            </h2>
          </div>
          <div class="close" id="close-btn">
            <span class="material-symbols-sharp">close</span>
          </div>
        </div>
        <div class="sidebar">
          <Link to="/" className="/">
            <span class="material-symbols-sharp /">home</span>
            <h3>Home</h3>
          </Link>
          <Link to="" >
            <span class="material-symbols-sharp ">psychology</span>
            <h3>Brain teasers</h3>
            <span class="message-count">1000+</span>
          </Link>
          <Link to="/math" className="/math">
            <span class="material-symbols-sharp">calculate</span>
            <h3>Math riddles</h3>
          </Link>
          <Link to="/picture" className="/picture">
            <span class="material-symbols-sharp">photo</span>
            <h3>Picture puzzles</h3>
          </Link>
          <Link to="">
            <span class="material-symbols-sharp">quiz</span>
            <h3>Logic puzzles</h3>
            <span class="message-count">26</span>
          </Link>
          <Link to="">
            <span class="material-symbols-sharp">123</span>
            <h3>Number puzzle</h3>
          </Link>
          <Link to="">
            <span class="material-symbols-sharp">extension</span>
            <h3>Crossword puzzle</h3>
          </Link>
          <Link to="">
            <span class="material-symbols-sharp">architecture</span>
            <h3>Geometry puzzles</h3>
          </Link>
          <Link to="">
            <span class="material-symbols-sharp">add</span>
            <h3>Add puzzle</h3>
          </Link>
          <Link to="">
            <span class="material-symbols-sharp">login</span>
            <h3>Log In</h3>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
