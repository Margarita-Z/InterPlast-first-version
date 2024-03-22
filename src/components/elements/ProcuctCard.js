import React, { useState, useEffect } from "react";

function ProcuctCard() {
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    setData(data.photos)
    console.log(data);
}

const URL = 'https://api.slingacademy.com/v1/sample-data/photos'

useEffect(() => {
    fetchData(URL)
  }, []);

  return (
    <div className="mainContainer">
         {data.map((dataObj, index) => {
             return (
      <div key={index} className="box-card">
        <div className="product-card">
          <div className="card-image">
            <img src={dataObj.url} alt="" />
          </div>
          <div className="card-desc">
            <h1 className="title">{dataObj.title}</h1>
            <p className="desc">{dataObj.description}</p>
          </div>
        </div>
      </div>
             )
         })}
    </div>
  );
}

export default ProcuctCard;
