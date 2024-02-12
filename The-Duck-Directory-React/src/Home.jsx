import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Home(props) {
  const handleIdChange = (e) => {
    props.setUserIdInput(e.target.value);
    // console.log(e.target.value);
  };

  const handleNameChange = (e) => {
    props.setUserNameInput(e.target.value);
    // console.log(e.target.value);
  };

  const navigate = useNavigate();

  const handleIdClick = (e) => {
    e.preventDefault();
    // do something to process the user input
    props.setSearchTerm(props.userIdInput);
    // clear the box of userInput
    props.setUserIdInput("");
    navigate('/employee');
  };

  const handleNameClick = (e) => {
    e.preventDefault();
    // do something to process the user input
    props.setNameSearchTerm(props.userNameInput);
    console.log(`nameSearchTerm: ${props.userNameInput}`)
    // clear the box of userInput
    props.setUserNameInput("");
    navigate('/employee');
  };

  // const data_to_display = JSON.parse(props.data);

  // return (
  //   <>
  //     <h1>Home</h1>
  //     <form>
  //       <label>
  //         Employee ID
  //         <input
  //           type="text"
  //           value={props.userInput}
  //           onChange={handleTextChange}
  //         />
  //       </label>
  //       <button onClick={handleClick}>Search!</button>
  //     </form>
  //   </>
  // );

  return (
    <div className="d-flex justify-content-center">
    <div className="mt-2">
    {/* <div className="ml-3"> */}
    <Form>
      <Row>
        <Col>
      <Form.Group className="mb-3" >
        {/* <Form.Label>Employee Identification Number</Form.Label> */}
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
        {/* <Form.Label>Employee Name</Form.Label> */}
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
