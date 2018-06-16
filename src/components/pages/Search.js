import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  state = {
    term: "",
    image: "",
    dogs: ""
  };

  // Highly generic input change handling function
  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  searchPuppies = query => {
    var url = `https://dog.ceo/api/breed/${query}/images`;
    axios.get(url)
      .then((response) => {
        // console.log(response.data.message);
        this.setState({ dogs: response.data.message });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ dogs: [] });
      });
    /*
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        console.log(response);
        console.log(response.data.message);
        this.setState({ image: response.data.message });
      })
      .catch(function (error) {
        console.log(error);
      });
      */
  };

  handleSearchSubmit = event => {
    event.preventDefault();
    // console.log(`Searching for: ${this.state.term}`);
    this.searchPuppies(this.state.term);
    this.setState({ term: "" });

  };

  render() {
    // TODO: Turn dog images inside doglist into their own component
    var image = this.state.image ? (<div><h1>Random Doggo</h1><div className="img-container"><img alt="puppy" src={this.state.image} /></div></div>) : null
    var dogList = this.state.dogs ? (<div>Dog List: <ul>{this.state.dogs.map((item, index) => {
      if (index > 3) { return null }
      return (<li className="list-group-item" key={index}><img alt="dog" src={item} height="125" /></li>)
    })
    }</ul></div>) : null
    return (<div>
      <h1>Search for a breed:</h1>
      <p>(ex: poodle, hound, corgi, retriever)</p>
      <input
        type="text"
        placeholder="choose a breed"
        name="term"
        value={this.state.term}
        onChange={this.handleInputChange}
      />
      <button onClick={this.handleSearchSubmit}>Search</button>
      {image}
      {dogList}
    </div>)
  }
}

export default Search;
