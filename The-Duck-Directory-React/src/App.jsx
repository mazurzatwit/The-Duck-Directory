import { useState, useEffect } from "react";
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import Employee from "./Employee";
import Login from "./Login";
import Prediction from "./Prediction";
// import { PythonShell } from "python-shell";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [userInput, setUserInput] = useState();
  const [data, setData] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState(1);
  const [usernameInput, setUsername] = useState("");
  const [passwordInput, setPassword] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [creds, setCreds] = useState();
  const [jobRole, setJobRole] = useState();
  const [workLocale, setWorkLocale] = useState();
  const [predictionData, setPredictionData] = useState();

  useEffect(() => {
    const getData = async function () {
      const response = await fetch(
        `http://localhost:3000/employee/${searchTerm}`
      );
      const ducks = await response.json();
      console.log(ducks);
      setData(ducks);
    };
    if (searchTerm) {
      getData();
    }
  }, [searchTerm]);

  useEffect(() => {
    const getCurrentUser = async function () {
      const response = await fetch(
        `http://localhost:3000/employee/username/${creds}`
      );
      const duck = await response.json();
      console.log(duck);
      setCurrentUser(duck);
    };
    if (creds) {
      getCurrentUser();
    }
  }, [creds]);

  useEffect(() => {
    console.log(predictionData);
  }, [predictionData]);

  return (
    <div>
      <h1>The Duck Directory</h1>
      <NavigationBar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route
          path="/login"
          element={
            <Login
              usernameInput={usernameInput}
              setUsername={setUsername}
              passwordInput={passwordInput}
              setPassword={setPassword}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              setCreds={setCreds}
            />
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/home"
          element={
            <Home
              userInput={userInput}
              setUserInput={setUserInput}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              data={JSON.stringify(data)}
            />
          }
        />
        <Route
          path="/employee"
          element={<Employee data={data} currentUser={currentUser} />}
        />
        <Route
          path="/prediction"
          element={
            <Prediction
              jobRole={jobRole}
              setJobRole={setJobRole}
              workLocale={workLocale}
              setWorkLocale={setWorkLocale}
              setPredictionData={setPredictionData}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
