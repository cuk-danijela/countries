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
      <div className={`app ${isDarkMode ? "dark" : "light"}`}>
        <div className="container">
          <div className="header">
            <h5>Where in the world?</h5>
            <span onClick={toggleMode}>
              {isDarkMode ? <BsMoonStars /> : <BsMoonStarsFill />}
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </div>

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