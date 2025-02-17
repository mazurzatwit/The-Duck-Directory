import { useState, useEffect } from "react";
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import Employee from "./Employee";
import Login from "./Login";
import Prediction from "./Prediction";
// import { PythonShell } from "python-shell";
import { Routes, Route, Navigate } from "react-router-dom";
// import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [userNameInput, setUserNameInput] = useState();
  const [userIdInput, setUserIdInput] = useState();
  const [data, setData] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState(1);
  const [nameSearchTerm, setNameSearchTerm] = useState();
  const [usernameInput, setUsername] = useState("");
  const [passwordInput, setPassword] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [creds, setCreds] = useState();
  const [jobRole, setJobRole] = useState();
  const [workLocale, setWorkLocale] = useState();
  const [predictionData, setPredictionData] = useState();
  const [predictionResponse, setPredictionResponse] = useState();
  const [madePrediction, setMadePrediction] = useState(false);


  useEffect(() => {
    const getData = async function () {
      const response = await fetch(
        `http://localhost:3000/employee/${searchTerm}`
      );
      const ducks = await response.json();
      setData(ducks);
    };
    if (searchTerm) {
      getData();
    }
  }, [searchTerm]);

  useEffect(() => {
    const getData = async function () {
      const names_list = nameSearchTerm.split(" ");
      const first_name = names_list[0];
      const last_name = names_list[1];
      const name_string = `${first_name}.${last_name}`
      const response = await fetch(
        `http://localhost:3000/employee/name/${name_string}`
      );
      const namedDuck = await response.json();
      setData(namedDuck);
    };
    if (nameSearchTerm) {
      getData();
    }
  }, [nameSearchTerm]);

  useEffect(() => {
    const getCurrentUser = async function () {
      console.log("getting currentUser");
      const response = ''
      try {
        response = await fetch(
          `http://localhost:3000/employee/username/${creds}`
        );
      }
      catch (error) {
        console.log("User not found")
      }
      const duck = await response.json();
      console.log(`received currentuser data from fetch: ${duck}`);
      setCurrentUser(duck);
    };
    if (creds) {
      getCurrentUser();
    }
  }, [creds]);

  useEffect(() => {
    const getPrediction = async function () {
      console.log("getting prediction");
      try {
        const response = await fetch(
          `http://localhost:5000/predict/${predictionData.work_locale}/${predictionData.job_role}`
        );
      }
      catch (error) {
        console.log("Prediction failure")
      }
      const pred = await response.json();
      setPredictionResponse(pred);
      setMadePrediction(true);
    };
    if (predictionData) {
      getPrediction();
    }
  }, [predictionData]);

  useEffect(() => {
    const updateMadePrediction = () => {
      console.log(`Made Prediction is now: ${madePrediction}`)
    }
    if (madePrediction) {
      updateMadePrediction();
    }
  }, [madePrediction])

  return (
    <div>
      <NavigationBar isLoggedIn={isLoggedIn} />
      <h1 className="d-flex justify-content-center">
        <span className="mt-3">The Duck Directory</span>
      </h1>
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
              userNameInput={userNameInput}
              setUserNameInput={setUserNameInput}
              userIdInput={userIdInput}
              setUserIdInput={setUserIdInput}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              nameSearchTerm={nameSearchTerm}
              setNameSearchTerm={setNameSearchTerm}
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
              predictionData={predictionData}
              predictionResponse={predictionResponse}
              madePrediction={madePrediction}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
