import React, { useState, useEffect } from 'react';
import axios from "axios";

import Image from "./image";

export default function App() {
  // State
  const [data, setData] = useState("");
  const [darkmodeOn, setDarkmode] = useState(false);

  // Fetching API
  useEffect(() => {
    function getAPI() {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => console.error(err))
    }
    getAPI();
  }, []);

  // Callback Functions
  // Changes dark mode on or off
  const darkmode = () => {
    if (!darkmodeOn) {
      setDarkmode(true);
    } else if (darkmode) {
      setDarkmode(false);
    }
  };


  
  return (
    <div>
      <Image data={data} darkmode={darkmode} darkmodeOn={darkmodeOn}/>
    </div>
  )
}

