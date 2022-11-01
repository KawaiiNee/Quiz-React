import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Questions from "./pages/Questions";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route path="questions/:id" element={<Questions />} /> */}
        <Route path="questions" element={<Questions />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
