// Discover.js - shows a random puppy friend

import React, { Component } from "react";
import axios from "axios";

class Discover extends Component {
  state = {
    term: "",
    image: "",
    dogs: "",
    processing: false,
    error: false,
    friends: 0
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
        this.setState({ dogs: response.data.message, processing: false, error: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ dogs: [], processing: false, error: "Error: that search didn't work" });
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
    this.setState({ term: "", dogs: [], processing: true, error: false });

  };

  handleYesButton = () => {
    this.setState({ friends: this.state.friends + 1 }); // TODO: use prevstate form
    this.getRandomDog();
  }

  handleNoButton = () => {
    this.getRandomDog();
  }

  getRandomDog() {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        console.log(response);
        console.log(response.data.message);
        this.setState({ image: response.data.message });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //
  // LIFECYCLE METHODS
  //

  componentDidMount() {
    this.getRandomDog();
  }

  render() {
    // TODO: Turn dog images inside doglist into their own component
    var spinner = this.state.processing ? (<p><i className="fa fa-spinner fa-spin" style={{ fontSize: "36px" }}></i></p>) : null
    var image = this.state.image ? (<div><div className="img-container"><img alt="puppy" height="200px" src={this.state.image} /></div></div>) : null
    return (<div>
      <h1>A Dog That Could Be Your Friend!</h1>
      <p>Do you want this dog to be your friend?</p>
      {spinner}
      {image}
      <button onClick={this.handleYesButton}>Yes</button>
      <button onClick={this.handleNoButton}>No</button>
      <p>{this.state.error}</p>
      <hr />
        <p>You have {this.state.friends} dog friends</p>
    </div>)
    }
  }

  export default Discover;
