import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login(props) {
  const handleUsernameChange = (e) => {
    props.setUsername(e.target.value);
    // console.log(e.target.value);
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
    console.log(`setting creds`)
    props.setIsLoggedIn(true);
    // clear the box of userInput
    navigate("/home");
  };

  return (
    <div className="d-flex justify-content-center">
    <div className="mt-2">
    {/* <div className="ml-3"> */}
    <Form>
      
      <Form.Group className="mb-3" >
        <Form.Label>Username</Form.Label>
        <Form.Control 
          placeholder="Enter username" 
          type="text"
          value={props.userNameInput}
          onChange={handleUsernameChange}
        />
      </Form.Group>
      

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control 
          placeholder="Enter password" 
          type="text"
          value={props.passwordInput}
          onChange={handlePasswordChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleClick}>
        Login!
      </Button>
    </Form>
    </div>
    </div>
  )

  // return (
  //   <>
  //     <h1>Login into the Duck Directory!</h1>
  //     <form>
  //       <label>
  //         Username
  //         <input
  //           type="text"
  //           value={props.usernameInput}
  //           onChange={handleUsernameChange}
  //         />
  //       </label>
  //     </form>
  //     <form>
  //       <label>
  //         Password
  //         <input
  //           type="text"
  //           value={props.passwordInput}
  //           onChange={handlePasswordChange}
  //         />
  //       </label>
  //     </form>
  //     <button onClick={handleClick}>Login!</button>
  //   </>
  // );
}

export default Login;
