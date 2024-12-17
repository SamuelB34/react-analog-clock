import React, {useEffect, useState} from 'react';
import './App.css';
import {ClockNumbers} from "./ClockNumbers";
const { DateTime } = require("luxon");

function App() {
  const [hour, setHour] = useState<string>("");
  const [hours, setHours] = useState<string>("");
  const [minute, setMinute] = useState<string>("");
  const [second, setSecond] = useState<string>("");

  const getDate = () => {
    const dateNow = DateTime.now().setZone("utc")
      const { c } = dateNow
    setMinute(checkIfAddZero(c.minute))
    setSecond(checkIfAddZero(c.second))
    setHours(checkIfAddZero(c.hour))
    setHour(`${checkIfAddZero(c.hour)}:${checkIfAddZero(c.minute)}:${checkIfAddZero(c.second)}`)
  }

  const checkIfAddZero = (number: number): string => {
    return number < 10 ? "0"+number : `${number}`
  }

  useEffect(() => {
    if (!hour) {
      setInterval(getDate, 1000);
    }
  }, []);
  
  return (
      <div className="App">
        <span className={'clock'}>{hour}</span>

        <div style={
          {
            display: "flex",
            gap: "32px",
            backgroundColor: "black",
            padding: "16px",
            paddingTop: "16px",
            justifyContent: "center"
          }
        }>

          <ClockNumbers number={hours[0]}/>
          <ClockNumbers number={hours[1]}/>

          <span style={{fontSize: '52px', color: '#2eff00'}}>:</span>

          <ClockNumbers number={minute[0]}/>
          <ClockNumbers number={minute[1]}/>

          <span style={{fontSize: '52px', color: '#2eff00'}}>:</span>

          <ClockNumbers number={second[0]}/>
          <ClockNumbers number={second[1]}/>
        </div>
      </div>
  );
}

export default App;
