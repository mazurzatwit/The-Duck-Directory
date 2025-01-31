import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Home(props) {
  const handleIdChange = (e) => {
    props.setUserIdInput(e.target.value);
  };

  const handleNameChange = (e) => {
    props.setUserNameInput(e.target.value);
  };

  const navigate = useNavigate();

  const handleIdClick = (e) => {
    e.preventDefault();
    props.setSearchTerm(props.userIdInput);
    props.setUserIdInput("");
    navigate('/employee');
  };

  const handleNameClick = (e) => {
    e.preventDefault();
    props.setNameSearchTerm(props.userNameInput);
    props.setUserNameInput("");
    navigate('/employee');
  };

  return (
    <div className="d-flex justify-content-center">
    <div className="mt-2">
    <Form>
      <Row>
        <Col>
      <Form.Group className="mb-3" >
        <Form.Control 
          placeholder="ID Number" 
          type="text"
          value={props.userIdInput}
          onChange={handleIdChange}
        />
      </Form.Group>
      </Col>
      <Col>
      <Button variant="primary" type="submit" onClick={handleIdClick}>
        Search!
      </Button>
      </Col>
      </Row>
      <Row>
        <Col>
      <Form.Group className="mb-3" >
        <Form.Control 
          placeholder="employee name" 
          type="text"
          value={props.userNameInput}
          onChange={handleNameChange}
        />
      </Form.Group>
      </Col>
      <Col>
      <Button variant="primary" type="submit" onClick={handleNameClick}>
        Search!
      </Button>
      </Col>
      </Row>

      
    </Form>
    </div>
    </div>
  )
}

export default Home;
