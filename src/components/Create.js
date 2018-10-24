import React, { Component } from 'react';
import { Card, CardImg, CardBody, Button, Input } from 'reactstrap';
import axios from 'axios';

class Create extends Component {
  state = {
    topText: '',
    bottomText: ''
  }

  handleInputChange = (e) => {

    let value = e.target.value;
    let name = e.target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    // this.props.handleSubmit(this.state)

    const formData = new FormData()
    formData.append("text0", this.state.topText)
    formData.append("text1", this.state.bottomText)
    formData.append("template_id", this.props.memeData.id)
    formData.append("username", "imgflip_hubot")
    formData.append("password", "imgflip_hubot")

    axios.post("https://cors-anywhere.herokuapp.com/https://api.imgflip.com/caption_image", formData ).then((res)=> {
      console.log(res.data.data.url)

      this.props.history.push(`/meme?img=${res.data.data.url}`)
    })
  }
  render() {

    return (
      <div>
      <Card>
        <CardImg className='meme-image' top width="100%" src={this.props.memeData.image} alt="Card image cap" />
        <CardBody>
          <form>
          <Input
            placeholder='Enter top text' 
            name='topText'
            onChange={this.handleInputChange}
          />
          <br />
          <Input
            placeholder='Enter bottom text' 
            name='bottomText'
            onChange={this.handleInputChange}
          />
          <br />
          <Button
            onClick={this.handleSubmit}
            type='submit'
          >Create</Button>
          </form>
        </CardBody>
      </Card>
      </div>
    )
  }
}

export default Create;