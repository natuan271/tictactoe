import React,{useState} from 'react'
import {Link} from 'react-router-dom'
function TimeUpPopup(props) {
    const[trigger,setTrigger]=useState(props.trigger)
    const NewRoundHandle = () => {
      props.setIsWinner(false)
      props.setWinner('_')
      props.setMoveRecords([])
      props.setCountRound(props.round+1)
      setTrigger(false)
      props.setMatrix(props.initMatrix)
      props.setPlayerTimeA(props.playerTimeA)
      props.setplayerTimeB(props.playerTimeB)
    }
    return trigger ?  (
        <div className="popup">
            <div className="popup-inner">
                <div className="infor">
                    <h1> Time Up </h1>
                    <h2> {props.winner} winner </h2>
                    <h2> with {props.steps} </h2>
                </div>
                <button className="restart-btn" onClick={NewRoundHandle}> Next Round </button>
                </div>
        </div>
    ) : ""
}

export default TimeUpPopup
