import React,{useState} from 'react'
import '../App.css'
import ParticlesBg from "particles-bg";

function NextRound(props) {
        const[trigger,setTrigger]=useState(props.trigger)
        const NewRoundHandle = () => {
          props.setIsWinner(false)
          props.setWinner('_')
          props.setMoveRecords([])
          props.setCountRound(props.isTimeUp?(props.round):(props.round+1))
          props.setIsTimeUp(false)
          setTrigger(false)
          props.setMatrix(props.initMatrix)
          props.setPlayerTimeB(props.playerTimeB)
          props.setPlayerTimeA(props.playerTimeA)
        }
        return trigger ?  (
            <>
            <div className="popup">
                <div className="popup-inner">
                    <div className="infor">
                        <h1>{props.notification}</h1>
                        <h1>Round {props.round}</h1>
                        <h2>Player {props.winner} win</h2>
                        <h3> with {props.steps} steps</h3>
                        <button className="restart-btn" onClick={NewRoundHandle} >Next Round</button>
                        <ParticlesBg type="color" bg={true}/>

                    </div>
                </div>
            </div>
            </>
        ) : ""
}

export default NextRound
