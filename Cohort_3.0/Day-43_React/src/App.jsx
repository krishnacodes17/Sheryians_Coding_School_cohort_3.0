import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Routes ,Route } from "react-router";
import Details from "./components/Details";

function App() {
  // const [toggle, setToggle] = useState("home");

  return (
    <div>
      <div>
        <Navbar  />
        {/* <div>
        {toggle === "home" && <Home />}
        {toggle === "about" && <About />}
        {toggle === "Contact" && <Contact />}
      </div> */}
      </div>

      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/details"  element={<Details />}/>
        </Route >

        <Route path="/about" element={<About/>} >
          <Route path="contact" element={<Contact/>} />
        </Route>
        <Route path="/contact" element={<Contact/>} />
      </Routes>



    </div>
  );
}

export default App;
