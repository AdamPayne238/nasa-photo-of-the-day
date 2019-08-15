import React, { useState, useEffect } from "react";

import NavBar from './components/NavBar.js';

import Header from './components/Header.js';

import axios from "axios";

import NasaCard from './components/NasaCard.js';

import ButtonSUI from './components/ButtonSUI.js';

import Footer from './components/Footer.js';

import AppTwo from './AppTwo'

import "./App.scss";

function App() {
  //changed to data object instead of individual
  //titles, urls, and explanations
  const [data, setData] = useState({});
  useEffect(() => {
      //these old const below will work if you remove data from 
  //brackets in nasa card ie {data.title} to {title}
  // const [title, setTitle] = useState("");
  // const [url, setUrl] = useState("image");
  // const [explanation, setExplanation] = useState("");
  axios.get("https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo")
  .then(response => {
    console.log(response.data);
    // Used data instead of data.title etc
    setData(response.data);
    // setTitle(response.data.title);
    // setUrl(response.data.hdurl);
    // setExplanation(response.data.explanation);
  });
  }, [])
  return (
    <div className="App">

      <NavBar />

      <Header />

      <NasaCard
                //title
                title={data.title}
                //date
                date={data.date}
                //url
                url={data.url}
                //explanation
                explanation={data.explanation} />
                
      <ButtonSUI />

      <Footer />

    </div>
  );
}

export default App;


