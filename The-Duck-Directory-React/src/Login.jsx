import { useNavigate } from "react-router-dom";

function Login(props) {
  const handleUsernameChange = (e) => {
    props.setUsername(e.target.value);
    //console.log(e.target.value);
  };

  const handlePasswordChange = (e) => {
    props.setPassword(e.target.value);
    //console.log(e.target.value);
  };

  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    // do something to process the user input
    props.setCreds(props.usernameInput);
    props.setIsLoggedIn(true);
    // clear the box of userInput
    navigate("/home");
  };

  return (
    <>
      <h1>Login into the Duck Direcrtory!</h1>
      <form>
        <label>
          Username
          <input
            type="text"
            value={props.usernameInput}
            onChange={handleUsernameChange}
          />
        </label>
      </form>
      <form>
        <label>
          Password
          <input
            type="text"
            value={props.passwordInput}
            onChange={handlePasswordChange}
          />
        </label>
      </form>
      <button onClick={handleClick}>Login!</button>
    </>
  );
}

export default Login;
