import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from './components/NasaCard.js';
import "./App.css";

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
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <NasaCard
                //title
                title={data.title}
                //date
                date={data.date}
                //url
                url={data.url}
                //explanation
                explanation={data.explanation} />
                
    </div>
  );
}

export default App;
