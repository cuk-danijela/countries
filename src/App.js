import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Countries from './components/Countries/Countries'
import Country from './components/Country/Country'
import './App.css';


export default function App() {
  return (
    <>
      <div className="header">
        <div className="container">
          <h5>Where in the world</h5>
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
    </>
  )
}