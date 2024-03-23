import React, { useState, useEffect } from 'react';
import axios from "axios";

import Images from "./images";

export default function App() {
  const [data, setData] = useState("");
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


  return (
    <div>
      <Images data={data}/>
    </div>
  )
}

