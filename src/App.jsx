import React, { createContext } from "react";
import Navbar from "./components/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import HomePage from "./pages/HomePage";

const settings = createContext();

function App() {
  const defaultSettings = {
    themeColors: {
      firstColor: "danger",
      lightDark: "#888887",
    },
    fontFamily: '"Edu AU VIC WA NT Hand", cursive',
  };
  return (
    <>
      <Router>
        <settings.Provider value={defaultSettings}>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
          </Routes>
        </settings.Provider>
      </Router>
    </>
  );
}

export default App;
export { settings };
