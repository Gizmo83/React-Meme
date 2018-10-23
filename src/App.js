import React, { Component } from 'react';
import { Container, Jumbotron } from 'reactstrap';
import axios from 'axios';

class App extends Component {
  state = {
    memeData: [],
    selectedMeme:''
  }

  componentDidMount = () => {
    this.getImages();
  }
  // Get Images from API
  getImages = () => {
    axios.get("https://api.imgflip.com/get_memes")
    .then((response) => {
      console.log(response.data.data.memes)
      this.setState({
        memeData: response.data.data.memes
      })
    })
  }
  
  handleClick = (e) => {
    const selectedMeme = e.target.attributes.getNamedItem("data-value").value;

    this.setState({
      selectedMeme
    })
  }

  render() {

    return (
      <div className="App">
      <Container>
        <Jumbotron>
          <h1>Meme Generator</h1>
        </Jumbotron>
        
        <div id="images">
        {this.state.memeData.map((images) => {
          return (
            <img 
              src={images.url} 
              alt={images.name}
              data-value={images.url}
              onClick={this.handleClick}
            />
          )
        })}
        </div>
      </Container>

      </div>
    );
  }
}

export default App;
