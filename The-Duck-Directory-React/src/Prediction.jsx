import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Prediction(props) {
  const handleJobRoleChange = (e) => {
    props.setJobRole(e.target.value);
  };

  const handleWorkLocaleChange = (e) => {
    props.setWorkLocale(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.setPredictionData({
        job_role: props.jobRole,
        work_locale: props.workLocale
    });
  };

  let show = false;
  if (props.madePrediction) {
    show = true
  }

  return (
    <div className="d-flex justify-content-center">
    <div className="mt-2">
    <Form>
      
      <Form.Group className="mb-3" >
        <Form.Label>Job Role</Form.Label>
        <Form.Control 
          placeholder="Enter job role" 
          type="text"
          value={props.jobRole}
          onChange={handleJobRoleChange}
        />
      </Form.Group>
      

      <Form.Group className="mb-3" >
        <Form.Label>Work Location</Form.Label>
        <Form.Control 
          placeholder="Enter work location" 
          type="text"
          value={props.workLocale}
          onChange={handleWorkLocaleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleClick}>
        {props.madePrediction
        ? <span>Predict Again!</span>
        : <span>Predict!</span>}
      </Button>
    </Form>
    {show 
      ? <div className="mt-4"> 
      <ul className="list-unstyled">
          <li><strong>Job Role: </strong>{props.predictionData.job_role}</li>
          <li><strong>Work Location: </strong>{props.predictionData.work_locale}</li>
          <li><strong>Predicted Salary: </strong>{props.predictionResponse.results}</li>
        </ul> 
        </div>
        : null}
    </div>
    </div>
  )

 
}

export default Prediction;
