import React from 'react'
import '../App.css'

function CountdownTime(props) {
  React.useEffect(() => {
    const timer =
      props.counter > 0 && setInterval(() => props.isYourTurn?props.setCounter(props.counter - 1):"", 1000);
    return () => clearInterval(timer);
  }, [props.counter,props.isYourTurn]);
  return (
    <div className="">
      <div className="time-remaining">Time: <span style={{fontWeight: "bold"}}>{props.counter}</span></div>
    </div>
  );
}

export default CountdownTime
