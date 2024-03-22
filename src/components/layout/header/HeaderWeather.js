import React, { useState, useEffect } from "react";
import "../../../assets/css/dateTime.css";

function HeaderWeather() {
  const [cityName, setCityName] = useState("Radovish");
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2c7d08a307717eb84d6e2458735d6e28&units=metric`
    )
      .then((res) => {
        if (res.status === 200) {
          error && setError(false);
          return res.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [cityName, error]);

  function dateBuilder(datum) {
    let months = [
      "Јануари",
      "Февруари",
      "Март",
      "Април",
      "Мај",
      "Јуни",
      "Јули",
      "Август",
      "Септември",
      "Октомври",
      "Ноември",
      "Декември",
    ];
    let days = [
      "Недела",
      "Понеделник",
      "Вторник",
      "Среда",
      "Четврток",
      "Петок",
      "Сабота",
    ];
    let day = days[datum.getDay()];
    let date = datum.getDate();
    let month = months[datum.getMonth()];
    let year = datum.getFullYear();
    return `${day}, ${date} ${month} ${year}`;
  }
  return (
    <div className="weather">
      <div className="time">{time.toLocaleTimeString()}</div>
      <div className="date">{dateBuilder(new Date())}</div>
      <div className="city">{data.name}</div>
      <div className="temp-box">
        <div className="temp">
          {Math.round((data.main || {}).temp || "loading temp...")} &#8451;
        </div>
        <div className="icon">
          <img
            src={`http://openweathermap.org/img/w/${
              data.weather ? data.weather[0].icon : null
            }.png`}
            alt=""
          />{" "}
          <p>{data.weather ? data.weather[0].main : null}</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderWeather;
