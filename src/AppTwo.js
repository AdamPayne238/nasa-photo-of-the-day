import React, { useState, useEffect } from "react";
import NavBar from './components/NavBar.js';
import Header from './components/Header.js';
import axios from "axios";
import Footer from './components/Footer.js';
import "./App.scss";

function AppTwo() {

    const [data, setData] = useState({});
    useEffect(() => {
        
    axios.get("https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy")
    .then(response => {
      console.log(response);
    
      setData(response);
      
    });
    }, [])
    return (
      <div className="AppTwo">
  
        <NavBar />
  
        <Header />

       
  
        <Footer />
  
      </div>
    );
  }
  
  export default AppTwo;

// function AppTwo(){
// fetch("https://api.spotify.com/v1/audio-analysis/6EJiVf7U0p1BBfs0qqeb1f", {
//   method: "GET",
//   headers: {
//     Authorization: `Bearer ${userAccessToken}`     
//   }
// })
// .then(response => response.json())
// .then(({beats})) => {
//   beats.forEach((beat, index) => {
//     console.log(`Beat ${index} starts at ${beat.start}`);
//   })
// }
// }

// export default AppTwo;
  

