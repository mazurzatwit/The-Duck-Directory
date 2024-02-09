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

  return (
    <>
      <h1>Salary Prediction</h1>
      <form>
        <label>
          Job Role
          <input
            type="text"
            value={props.jobRole}
            onChange={handleJobRoleChange}
          />
        </label>
      </form>
      <form>
        <label>
          Work Location
          <input
            type="text"
            value={props.workLocale}
            onChange={handleWorkLocaleChange}
          />
        </label>
      </form>
      <button onClick={handleClick}>Predict!</button>
    </>
  );
}

export default Prediction;
