import { useState, useEffect } from 'react'
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import Employee from "./Employee"
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

const [userInput, setUserInput] = useState();
const [data, setData] = useState([]);
const [searchTerm, setSearchTerm] = useState(1)

  useEffect(() => {
      const getData = async function () {
        const response = await fetch(`http://localhost:3000/employee/${searchTerm}`);
        const ducks = await response.json();
        console.log(ducks)
        setData(ducks);
      };
    getData();
  }, [searchTerm]);

  return (
    <div>
      <h1>The Duck Directory</h1>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home userInput={userInput} setUserInput={setUserInput} searchTerm={searchTerm} setSearchTerm={setSearchTerm} data={JSON.stringify(data)} />} />
        <Route path="/employee" element={<Employee {...data}/>} />
      </Routes>
    </div>
  );
}

export default App
