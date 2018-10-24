import React from "react";

const Home = props => {
  const handleClick = e => {
    const selectedMeme = {
      image: e.target.attributes.getNamedItem("src").value,
      id: e.target.attributes.getNamedItem("data-id").value
    };

    props.handleClick(selectedMeme);
    props.history.push("/create");
  };

  return (
    <div id="images">
      {props.memeData.map(images => {
        return (
          <img
            key={images.id}
            src={images.url}
            alt={images.name}
            data-id={images.id}
            onClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default Home;
