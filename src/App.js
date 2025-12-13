import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import {useState} from 'react'

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      <Navbar title="My App" Home="Home" onNavClick={setCurrentPage}></Navbar>
      <div className="container">
        {currentPage === "home" && <TextForm></TextForm>}
        {currentPage === "about" && <About></About>}
      </div>
    </>
  );
}

export default App;
