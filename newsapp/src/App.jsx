import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import News from "./Components/News";
import { useState } from "react";
import LoadingBar from "react-top-loading-bar";

 const App = ()=>{
  const [progress, setProgress] = useState(0);

  const setProgressAsync =async (progress) => {
    setProgress(progress);
  };
  return (
    <>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgressAsync}
                key="general"
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgressAsync}
                key="business"
                category="business"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgressAsync}
                key="business"
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgressAsync}
                key="entertainment"
                category="entertainment"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgressAsync}
                key="health"
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgressAsync}
                key="science"
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgressAsync}
                key="sports"
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgressAsync}
                key="technology"
                category="technology"
              />
            }
          />
        </Routes>
        <LoadingBar height={3} color="#f97316" progress={progress} />
        <div
          className="loading-dot"
          style={{ left: `${progress}%` }}
        ></div>
      </>
    );
  }

export default App;