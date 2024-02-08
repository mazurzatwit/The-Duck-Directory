import { useState } from 'react'
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import './App.css'

function App() {

  return (
    <div>
      <h1>The Duck Directory</h1>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/employee" element={<h1>Employee</h1>} />
      </Routes>
    </div>
  );
}

export default App
