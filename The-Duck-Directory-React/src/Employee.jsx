function Employee(props) {
  let show = false;

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
      <span>
        {props.data.first_name} {props.data.last_name}
      </span>
      <br />
      <span>{props.data.phone}</span>
      <br />
      <span>{props.data.job_role}</span>
      <br />
      <span>{props.data.work_location}</span>
      <br />
      {show ? <span>{props.data.salary}</span> : null}
    </>
  );
}

export default Employee;
