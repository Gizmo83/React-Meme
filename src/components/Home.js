import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

const Home = (props) => {
  console.log(props)
  return (
    <div id="images">
    {props.memeData.map((images) => {
      return (
        <img 
          src={images.url} 
          alt={images.name}
          data-value={images.url}
          onClick={()=>{props.history.push(`/create/?img=${images.url}`)}}
        />
      )
    })}
    </div>
  )
}

export default Home;