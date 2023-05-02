import React from "react";

export default function WeatherTemperature(props) {
 
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
      <span className="unit">ºF</span> 
    
      </div>
    );
  }

