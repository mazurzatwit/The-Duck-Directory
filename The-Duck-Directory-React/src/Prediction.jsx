import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Prediction(props) {
  const handleJobRoleChange = (e) => {
    props.setJobRole(e.target.value);
    //console.log(e.target.value);
  };

  const handleWorkLocaleChange = (e) => {
    props.setWorkLocale(e.target.value);
    //console.log(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    // do something to process the user input
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
    {/* <div className="ml-3"> */}
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

  // return (
  //   <>
  //     <h1>Salary Prediction</h1>
  //     <form>
  //       <label>
  //         Job Role
  //         <input
  //           type="text"
  //           value={props.jobRole}
  //           onChange={handleJobRoleChange}
  //         />
  //       </label>
  //     </form>
  //     <form>
  //       <label>
  //         Work Location
  //         <input
  //           type="text"
  //           value={props.workLocale}
  //           onChange={handleWorkLocaleChange}
  //         />
  //       </label>
  //     </form>
  //     <button onClick={handleClick}>
  //       {props.madePrediction
  //       ? <span>Predict Again!</span>
  //       : <span>Predict!</span>}
  //     </button>
  //     {show 
  //     ? <ul>
  //         <li>Job Role: {props.predictionData.job_role}</li>
  //         <li>Work Location: {props.predictionData.work_locale}</li>
  //         <li>Predicted Salary: {props.predictionResponse.results}</li>
  //       </ul> 
  //       : null}
  //   </>
  // );
}

export default Prediction;
