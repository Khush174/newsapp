import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar.js";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="GENERAL"
                pageSize={pageSize}
                country="in"
                category="GENERAL"
              />
            }
          />
          <Route
            path="BUSINESS/*"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="BUSINESS"
                pageSize={pageSize}
                country="in"
                category="BUSINESS"
              />
            }
          />
          <Route
            path="ENTERTAINMENT/*"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="ENTERTAINMENT"
                pageSize={pageSize}
                country="in"
                category="ENTERTAINMENT"
              />
            }
          />
          <Route
            path="GENERAL/*"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="GENERAL"
                pageSize={pageSize}
                country="in"
                category="GENERAL"
              />
            }
          />
          <Route
            path="HEALTH/*"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="HEALTH"
                pageSize={pageSize}
                country="in"
                category="HEALTH"
              />
            }
          />
          <Route
            path="SCIENCE/*"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="SCIENCE"
                pageSize={pageSize}
                country="in"
                category="SCIENCE"
              />
            }
          />
          <Route
            path="SPORTS/*"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="SPORTS"
                pageSize={pageSize}
                country="in"
                category="SPORTS"
              />
            }
          />
          <Route
            path="TECHNOLOGY/*"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="TECHNOLOGY"
                pageSize={pageSize}
                country="in"
                category="TECHNOLOGY"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
