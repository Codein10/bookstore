import React from "react";
import Home from "./Home/home";
import Coursess from "./Courses/coursess";
import Signup from "./Components/signup";
import Contact from "./Contact/contact";
import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Coursess />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
