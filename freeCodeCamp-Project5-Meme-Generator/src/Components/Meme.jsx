import React, { useEffect } from "react";
import { useState } from "react";
import memesData from "../assets/data/memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    image: "https://i.imgflip.com/3si4.jpg",
    topText: "Top Text",
    bottomText: "Bottom Text",
  });

  const [allMemeImages, setAllMemeImages] = React.useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomIndex = Math.floor(Math.random() * allMemeImages.length);

    const url = allMemeImages[randomIndex].url;

    setMeme((prevMeme) => {
      return { ...prevMeme, image: url };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return { ...prevMeme, [name]: value };
    });
  }

  return (
    <main>
      <div className="form">
        <input
          className="top-text-input text-input"
          type="text"
          placeholder="Top text"
          onChange={handleChange}
          name="topText"
          value={meme.topText}
        ></input>

        <input
          className="bottom-text-input text-input"
          type="text"
          placeholder="Bottom text"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
        ></input>

        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image 🖼️
        </button>
      </div>

      <div className="meme-container">
        <img className="meme-img" src={meme.image} />
        <h2 className="top-text meme-text"> {meme.topText} </h2>
        <h2 className="bottom-text meme-text">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
