import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./components/Error";

import Navbar from "./components/Navbar";

// Import Routes and Route from react-router-dom
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes> {/* Use Routes instead of Switch */}
        {/* Use element instead of component */}
        <Route path="/" element={<Home />} />
        <Route path="/rooms/" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="*" element={<Error />} /> {/* Use '*' to match all unmatched routes */}
      </Routes>
    </>
  );
}

export default App;
