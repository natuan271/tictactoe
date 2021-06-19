import React from "react";
import "../App.css"
import CountdownTime from './CountdownTime'
import { green } from "@material-ui/core/colors";

export default function CurrentPlayer({ 
    player, playerNameA, playerNameB,playerTimeA, 
    playerTimeB,setPlayerTimeA,setPlayerTimeB,
    setWinFinal,setWinner,setIsWinner,setScores,moveStep
  }) 
    {
      const SurrenderHandle=() => {
        if(player === 'X'){
          setWinner(playerNameB)
          setScores(playerTimeB*10 + moveStep*10)
        }
        else {
          setWinner(playerNameA)
          setScores(playerTimeA*10+moveStep*10)
        }
        setWinFinal(true)
        setIsWinner(true)
      }  
  return (
    <>
    <div className="left-bar">
        <h2 id="turn">Player turn:</h2>
        <div className="player-info">
          <h2 style={{ color: '#ea243e' }} className={player==='X' ? 'now-player':'player'}>{playerNameA}</h2>       
          <div class="icon-left">
            <div class="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-x"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#ff2825"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          </div>
          <CountdownTime counter={playerTimeA} setCounter={setPlayerTimeA} isYourTurn={player === 'X'?true:false}></CountdownTime>
        </div>
        <div className="player-info">
          <h2 style={{ color: '#4b9f82' }}className={player=='X' ? 'player':'now-player'}>{playerNameB}</h2>
          <div class="icon-left">
            <div class="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-circle"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#7bc62d"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="9" />
              </svg>
            </div>
          </div>      
          <CountdownTime counter={playerTimeB} setCounter={setPlayerTimeB} isYourTurn={player === 'X'?false:true}></CountdownTime>
        </div>
        <button className="surrender-button" onClick={SurrenderHandle}>Đầu hàng</button>
    </div> 
    </>
  );
}
