// import { useState } from 'react'
import { Routes, Route, NavLink } from "react-router-dom"
import 'bootstrap/scss/bootstrap.scss'
import Week1 from "./pages/Week1"
import Week2 from './pages/Week2'
import Week3 from './pages/Week3'


function App() {

  const style = ({ isActive }) => {
    return {
      color: isActive ? 'blue' : ''
    }
  }

  return (
    <>

<div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">React</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page" style={style}>第一週作業</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/week2" className="nav-link" style={style}>第二週作業</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/week3" className="nav-link" style={style}>第三週作業</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Week1 />} />
        <Route path="/week2" element={<Week2 />} />
        <Route path="/week3" element={<Week3 />} />
      </Routes>
    </div>
    </>
  )
}

export default App
