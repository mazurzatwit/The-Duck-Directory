import { useNavigate } from "react-router-dom";

function Home(props) {
  const handleTextChange = (e) => {
    props.setUserInput(e.target.value);
    console.log(e.target.value);
  };

  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    // do something to process the user input
    props.setSearchTerm(props.userInput);
    // clear the box of userInput
    props.setUserInput("");
    navigate('/employee');
  };

  const data_to_display = JSON.parse(props.data);

  return (
    <>
      <h1>Home</h1>
      <form>
        <label>
          Employee ID
          <input
            type="text"
            value={props.userInput}
            onChange={handleTextChange}
          />
        </label>
        <button onClick={handleClick}>Search!</button>
      </form>
    </>
  );
}

export default Home;
