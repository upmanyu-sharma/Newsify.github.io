import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";

const App = ()=> {
  const apiKey = process.env.REACT_APP_MY_KEY

  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
          <LoadingBar
            color="#f11946"
            progress={progress}
            height={4}
          />
          <NavBar />
          <Routes>
            {/* key isliye use taki vo update kre jb bhi category pe click kre */}
            <Route
              exact
              path="/"
              element={
                <News
                  apiKey={apiKey}
                  changeProgress={setProgress}
                  key="general"
                  pageSize={9}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  apiKey={apiKey}
                  changeProgress={setProgress}
                  key="business"
                  pageSize={9}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  apiKey={apiKey}
                  changeProgress={setProgress}
                  key="entertainment"
                  pageSize={9}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  apiKey={apiKey}
                  changeProgress={setProgress}
                  key="general"
                  pageSize={9}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  apiKey={apiKey}
                  changeProgress={setProgress}
                  key="health"
                  pageSize={9}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  apiKey={apiKey}
                  changeProgress={setProgress}
                  key="science"
                  pageSize={9}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  apiKey={apiKey}
                  changeProgress={setProgress}
                  key="sports"
                  pageSize={9}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  apiKey={apiKey}
                  changeProgress={setProgress}
                  key="technology"
                  pageSize={9}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
}
export default App;