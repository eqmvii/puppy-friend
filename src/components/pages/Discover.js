// Discover.js - shows a random puppy friend

import React, { Component } from "react";
import axios from "axios";

class Discover extends Component {
  state = {
    image: "",
    processing: false,
    error: false,
    friends: 0,
    notfriends: 0
  };

  handleYesButton = () => {
    if (this.state.processing) {
      return
    }
    this.setState((prevState) => {
      return { friends: prevState.friends + 1, processing: true, image: false };
    });
    this.getRandomDog();
  }

  handleNoButton = () => {
    if (this.state.processing) {
      return
    }
    this.setState((prevState) => {
      return { notfriends: prevState.notfriends + 1, processing: true, image: false };
    });
    this.getRandomDog();
  }

  getRandomDog() {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        console.log(response);
        console.log(response.data.message);
        this.setState({ image: response.data.message, processing: false, error: false });
      })
      .catch((error) => {
        this.setState({ image: false, processing: false, error: "API Error" });
        // TODO: Fall back to giphy API?
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
    var spinner = this.state.processing ? (<p><i className="fa fa-spinner fa-spin" style={{fontSize:"36px"}}></i></p>) : null
    var image = this.state.image ? (<div><div className="img-container"><img alt="puppy" height="200px" src={this.state.image} /></div></div>) : null
    return (<div>
      <h1>Do you want this dog to be your friend?</h1>
      <button onClick={this.handleYesButton}>Yes</button>
      <button onClick={this.handleNoButton}>No</button>
      {spinner}
      {image}
      <p>{this.state.error}</p>
      <hr />
      <p>You have {this.state.friends} dog friends</p>
      <p>You rejected {this.state.notfriends} dogs :(</p>
    </div>)
  }
}

export default Discover;
