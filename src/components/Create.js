import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Input } from 'reactstrap';

class Create extends Component {
  render() {
    const img = this.props.location.search.replace("?img=", "");
    return (
      <div>
      <Card>
        <CardImg top width="100%" src={img} alt="Card image cap" />
        <CardBody>
          <Input
            placeholder='Enter top text' 
          />
          <br />
          <Input
            placeholder='Enter bottom text' 
          />
          <br />
          <Button>Button</Button>
        </CardBody>
      </Card>
      </div>
    )
  }
}

export default Create;