import React, { Component } from "react";

// const Search = () => (
//   <div>
//     <h1>Search For Doggos
//     </h1>
//   </div>
// );

class Search extends Component {
  state = {
    term: "",
  };

  // Highly generic input change handling function
  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSearchSubmit = event => {
    event.preventDefault();
    alert(`Searching for: ${this.state.term}`);
    this.setState({ term: "" });
  };

  render() {
    return (<div>
      <h1>Search for a doggo</h1>
      <input
        type="text"
        placeholder="breed"
        name="term"
        value={this.state.term}
        onChange={this.handleInputChange}
      />
      <button onClick={this.handleSearchSubmit}>Search</button>

    </div>)
  }
}


export default Search;
