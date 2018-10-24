import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Jumbotron } from "reactstrap";
import axios from "axios";

// Import Components
import Home from "./components/Home";
import Create from "./components/Create";
import Meme from "./components/Meme";

class App extends Component {
  state = {
    memeData: [],
    selectedMeme: ""
  };

  componentDidMount = () => {
    this.getImages();
  };

  // Get Images from API
  // https://api.imgflip.com
  getImages = () => {
    axios.get("https://api.imgflip.com/get_memes").then(response => {
      console.log(response.data.data.memes);
      this.setState({
        memeData: response.data.data.memes
      });
    });
  };

  handleClick = selectedMeme => {
    //console.log(selectedMeme)
    this.setState({
      selectedMeme
    });
  };

  render() {
    //console.log(this.state.selectedMeme)
    return (
      <Router>
        <div className="App">
          <Container>
            <Jumbotron>
              <h1>Meme Generator</h1>
            </Jumbotron>
            <Route
              exact
              path="/"
              render={props => (
                <Home
                  memeData={this.state.memeData}
                  handleClick={this.handleClick}
                  {...props}
                />
              )}
            />
            <Route
              exact
              path="/create"
              render={props => (
                <Create
                  memeData={this.state.selectedMeme}
                  handleSubmit={this.handleSubmit}
                  {...props}
                />
              )}
            />
            <Route exact path="/meme" render={props => <Meme {...props} />} />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
