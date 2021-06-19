import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import BestOfRoundComboBox from './BestOfRoundComboBox'
import MatchHistory from './MatchHistory'
import ParticlesBg from "particles-bg";

function Start() {
  const [player1, setPlayer1] = useState("")
  const [player2, setPlayer2] = useState("")
  const [enable, setEnable] = useState(false)
  const [BestOfRound, setBestOfRound] = useState(1)
  let [isShowHistory,setIsShowHistory] = useState(false);
  const [history,setHistory] = useState([]);
  
  useEffect (() =>{
    if(player1 === "" || player2 === "") setEnable(false)
    else setEnable(true)
  },[player2,player1])

  const handleChange1 = (e) => {
    e.preventDefault()
    setPlayer1(e.target.value);
    if (player1 === "" || player2 === "") {
      setEnable(false);
      console.log("pl1f")
    }
    else {
      setEnable(true);
      console.log("pl1t")
    }
  }
  const handleChange2 = (e) => {
    e.preventDefault()
    setPlayer2(e.target.value);
    if (player1 === "" || player2 === "") {
      setEnable(false);
      console.log("pl2f")
    }
    else {
      setEnable(true);
      console.log("pl2t")
    }
  }
  const onShowHistory =() => {
    setIsShowHistory(!isShowHistory);
    if(isShowHistory) {
      let winnerStorage = localStorage.getItem('winner');
      setHistory(JSON.parse(winnerStorage))
    }
  }

  return (
    <>
    <div className="ui main">
      <h2>Tic Tac Toe</h2>
      <form className="ui form">
        <div className="field">
          <label className="lb">Player 1</label>
          <input
            type="text"
            name="player1"
            placeholder="Tên người chơi 1"
            value={player1}
            onChange={handleChange1}
          />
        </div>
        <div className="field">
          <label className="lb">Player 2</label>
          <input
            type="text"
            name="player2"
            placeholder="Tên người chơi 2"
            value={player2}
            onChange={handleChange2}
          />
        </div>
        <div className="bo">
          <BestOfRoundComboBox className="BestOfRoundCbb" setBestOfRound={setBestOfRound}/>
        </div>
        {enable ?<Link to={"/Game?player1=" + player1 + "&player2=" + player2 + "&BO=" + BestOfRound}>
            <button className="login-btn effect01"  ><span>Login</span></button>
          </Link>
           :
          <div>
            <button className="login-btn" disabled={true} style={{border:"4px solid #666"}}><span>Login</span></button>
          </div>
        }
        

      </form>
      <div className="button">
        <button className="history-button effect01" onClick={() => onShowHistory()}>Match History</button>
      </div>
    </div>
    {(history.length > 0 && isShowHistory ) && <MatchHistory setIsShowHistory={setIsShowHistory} history={history}></MatchHistory>}
    <ParticlesBg  type="circle" bg={true}/>
    </>
  );
}

export default Start
