import React from 'react';

const Meme = (props) => {
  console.log(props.location.search)
  const img = props.location.search.replace('?img=', '')
  console.log(img)
  return (
    <div>
      <img className="meme-image" src={img} alt='meme' />
    </div>
  )
}

export default Meme;