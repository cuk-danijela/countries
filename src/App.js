import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Countries from './components/Countries/Countries'
import Country from './components/Country/Country'
import { BsMoonStars, BsMoonStarsFill } from "react-icons/bs";
import './App.css';


export default function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={`${isDarkMode ? "light" : "dark"}`}>
        <div className="header">
          <h4>Where in the world?</h4>
          <span className="switch__mode" onClick={toggleMode}>
            {isDarkMode ? <BsMoonStars /> : <BsMoonStarsFill />}
            {isDarkMode ? " Dark Mode" : " Ligth Mode"}
          </span>
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
  )
}