import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Countries from './components/Countries/Countries';
import Country from './components/Country/Country';
import { BsMoonStars, BsMoonStarsFill } from "react-icons/bs";
import './App.css';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={`App ${isDarkMode ? "light" : "dark"}`}>
        <div className="header">
          <div className="header__container">
            <h4>Where in the world?</h4>
            <h6 className="switch__mode" onClick={toggleMode}>
              {isDarkMode ? <BsMoonStars /> : <BsMoonStarsFill />}
              {isDarkMode ? " Dark Mode" : " Light Mode"}
            </h6>
          </div>
        </div>
        <div className="container">
          <Router>
            <Routes>
              <Route path='/' element={<Countries />} />
              <Route path='/country/:countryName' element={<Country />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}
