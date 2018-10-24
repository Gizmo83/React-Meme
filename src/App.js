import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Jumbotron } from 'reactstrap';
import axios from 'axios';

// Import Components
import Home from './components/Home';
import Create from './components/Create';

class App extends Component {
  state = {
    memeData: [],
    selectedMeme:'',
    redirect: false
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
      selectedMeme,
      redirect: '/create'
    }, () => {
      Router.push('/create')
    })

  }

  render() {
    //console.log(this.state.selectedMeme)
    return (
      <Router>
        <div className="App">
          <Container>
            <Jumbotron>
              <h1>Meme Generator</h1>
            </Jumbotron>
            {/* {this.state.redirect ? <Redirect to={this.state.redirect}/> : null} */}
            <Route
              exact path='/'
              render={(props) => 
                <Home 
                  memeData={this.state.memeData}
                  handleClick={this.handleClick}
                  {...props}
                />
              }
            />
            <Route 
              exact path='/create/'
              render={(props) =>
                <Create 
                  meme={this.state.selectedMeme}
                  {...props}
                />
              }
            />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
