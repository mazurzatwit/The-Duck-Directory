import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login(props) {
  const handleUsernameChange = (e) => {
    props.setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    props.setPassword(e.target.value);
  };

  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    props.setCreds(props.usernameInput);
    props.setIsLoggedIn(true);
    navigate("/home");
  };

  return (
    <div className="d-flex justify-content-center">
    <div className="mt-2">
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

}

export default Login;
