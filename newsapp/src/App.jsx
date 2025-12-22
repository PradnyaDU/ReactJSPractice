import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import News from "./Components/News";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <Routes>
          <Route path="/" />
          <Route path="/business" />
          <Route path="/entertainment" />
          <Route path="/health" />
          <Route path="/science" />
          <Route path="/sports" />
          <Route path="/technology" />
        </Routes>
        <News />
      </>
    );
  }
}