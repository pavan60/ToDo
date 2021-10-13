import React from 'react';
import ReactDOM from 'react-dom';
import './Time_css.css';
import Seconds_div from './Seconds_div';
import Minutes_div from './Minutes_div';
import Hours_div from './Hours_div';

console.log("In Time JS");

ReactDOM.render(
  <React.StrictMode>
    <div className="Main_div">
        <div className="Hour_div">
            <Hours_div></Hours_div>
        </div>
        <div className="Minute_div">
            <Minutes_div></Minutes_div>
        </div>
        <div className="Second_div">
            <Seconds_div></Seconds_div>
        </div>
        
    </div>
    <div className="frame_div">
        </div>
  </React.StrictMode>,
  document.getElementById('root')
);