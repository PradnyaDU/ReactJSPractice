import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/business" element={<div>Business</div>} />
          <Route path="/entertainment" element={<div>Entertainment</div>} />
          <Route path="/health" element={<div>Health</div>} />
          <Route path="/science" element={<div>Science</div>} />
          <Route path="/sports" element={<div>Sports</div>} />
          <Route path="/technology" element={<div>Technology</div>} />
        </Routes>
      </>
    );
  }
}