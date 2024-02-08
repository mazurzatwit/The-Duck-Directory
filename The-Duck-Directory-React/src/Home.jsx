function Home() {
  return (
    <>
      <h1>Home</h1>
      <div>
        <h1>Star Wars Universe Lookup</h1>
        <label for="searchString">Who you looking for?</label>
        <input id="searchString" />
      </div>
      <form>
        <label>
          Who you looking for?
          <input
            type="text"
            // value={this.state.value}
            // onChange={this.handleChange}
          />
        </label>
        {/* <input type="submit" value="Submit" /> */}
      </form>
    </>
  );
}

export default Home;
