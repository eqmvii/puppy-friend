import React, { Component } from "react";
import axios from "axios";

// const Search = () => (
//   <div>
//     <h1>Search For Doggos
//     </h1>
//   </div>
// );

class Search extends Component {
  state = {
    term: "",
    image: ""
  };

  // Highly generic input change handling function
  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  searchPuppies = query => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        console.log(response);
        console.log(response.data.message);
        this.setState({ image: response.data.message });
      })
      .catch(function (error) {
        console.log(error);
      });
    // API.search(query)
    //   .then(res => this.setState({ results: res.data.data }))
    //   .catch(err => console.log(err));
  };

  handleSearchSubmit = event => {
    event.preventDefault();
    alert(`Searching for: ${this.state.term}`);
    this.searchPuppies(this.state.term);
    this.setState({ term: "" });

  };

  render() {
    var image = this.state.image ? (<div><h1>Random Doggo</h1><div className="img-container"><img alt="puppy" src={this.state.image} /></div></div>): null
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
      {image}
    </div>)
  }
}


export default Search;
