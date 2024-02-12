import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Employee(props) {
  let show = false;

  console.log(`employee id:${props.data.employee_id}`);
  console.log(`current user id: ${props.currentUser.employee_id}`)
  const managerString = props.data.manager[1];

  //   console.log(typeof managerString);
  if (
    props.data.employee_id === props.currentUser.employee_id ||
    props.currentUser.job_role === "HR" ||
    parseInt(managerString) === props.currentUser.employee_id
  ) {
    show = true;
  }


  
  return (
    <>
    <Container>
      <Row className="justify-content-md-center">
        <Col className="float-right">
          <div className="align-self-end">
            <Image src={props.data.image_path} className="rounded float-end thumbnail" alt="a handsome duck" width="40%"/>
          </div>
        </Col>
        <Col>
          <div className="justify-content-center">
            <span>
              <strong>Name: </strong>{props.data.first_name} {props.data.last_name}
            </span>
          </div>
        <div className="justify-content-center">
          <span><strong>Phone Number: </strong>{props.data.phone}</span>
        </div>
        <div className="justify-content-center">
          <span><strong>Job Role: </strong>{props.data.job_role}</span>
        </div>
        <div className="justify-content-center">
          <span><strong>Work Location: </strong>{props.data.work_location}</span>
        </div>
        <div className="justify-content-center">
          {show ? <span><strong>Salary: </strong>{props.data.salary}</span> : null}
        </div>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Employee;
