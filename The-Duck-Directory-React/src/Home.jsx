function Home(props) {
  
const handleTextChange = (e) => {
  props.setUserInput(e.target.value);
  console.log(e.target.value)
}

const handleClick = (e) => {
  e.preventDefault();
  // do something to process the user input
  props.setSearchTerm(props.userInput)
  // clear the box of userInput
  props.setUserInput("")
}

const data_to_display = JSON.parse(props.data)

  
  return (
    <>
      <h1>Home</h1>
      <div>
        <h1>{data_to_display.first_name}</h1>
        <h2>{data_to_display.last_name}</h2>

      </div>
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
