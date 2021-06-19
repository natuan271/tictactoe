import React, { useState,useCallback,useEffect } from 'react'
import { useLocation } from "react-router-dom"
import Board from './Board'
import CurrentPlayer from './CurrentPlayer'
import MoveReCord from './MoveReCord'
import NextRound from './NextRound'
import Popup from './Popup'
import ParticlesBg from "particles-bg";


function Game() {
  const [moveStep, setMoveStep] = useState(0) 
  const [currentPlayer, setCurrentPlayer] = useState('O')
  const [winner, setWinner] = useState('_')
  const [moveRecords, setMoveRecords] = useState([]);
  const [isWinner, setIsWinner] = useState(false)
  const [winFinal, setWinFinal] = useState(false)
  const [scores,setScores]=useState(0)
  let location = useLocation();
  let query = new URLSearchParams(location.search)
  const [player1, setPlayer1] = useState(query.get("player1"))
  const [player2, setPlayer2] = useState(query.get("player2"))
  const [countWinRoundPlayer1, setCountWinRoundPlayer1] = useState(1)
  const [countWinRoundPlayer2, setCountWinRoundPlayer2] = useState(1)
  const [playerTimeA,setPlayerTimeA] = useState(600)
  const [playerTimeB,setPlayerTimeB] = useState(600)
  let numberOfRound = query.get("BO")
  const [countRound, setCountRound] = useState(1)
  const [notification,setNotification] = useState("")
  const [isTimeUp,setIsTimeUp]=useState(false)
  const initMatrix = []
  for (let i=0; i<10; i++){
      initMatrix[i] = []
      for (let j=0; j<10; j++) initMatrix[i][j] = '_'
  }

  const [matrix, setMatrix] = useState(initMatrix)

  useEffect(() => {
    if(isWinner) {
      let winnerStorage = localStorage.getItem('winner');

      if(winnerStorage) {
        let arr = JSON.parse(winnerStorage);
        console.log(arr)
        arr.push({player1: player1,player2: player2,winner: winner, moveStep:moveRecords.length});
        localStorage.setItem('winner',JSON.stringify(arr));
      }
      else {
        let winning = [
          {player1: player1,player2: player2,winner: winner,moveStep:moveRecords.length}
        ]
        localStorage.setItem('winner',JSON.stringify(winning));
      }
    }

  },[isWinner])

  const check = (matrix, r, c) => {
    let s1, s2, s3, s4;
    s1 = s2 = ''
    for (let i = 0; i < 10; i++) {
      s1 += matrix[i][c]
      s2 += matrix[r][i]
    }
    let k = 1;
    s3 = s4 = matrix[r][c]
    while (1) {
      let flag = 0;
      if (r - k >= 0 && c + k < 10) s3 += matrix[r - k][c + k]; else flag++;
      if (r + k < 10 && c - k >= 0) s3 = matrix[r + k][c - k] + s3; else flag++;
      if (r + k < 10 && c + k < 10) s4 += matrix[r + k][c + k]; else flag++;
      if (r - k >= 0 && c - k >= 0) s4 = matrix[r - k][c - k] + s4; else flag++;
      k++;
      if (flag === 4) break
    }
    let s = `${s1} ${s2} ${s3} ${s4}`
    if (s.includes('X'.repeat(5))) {
      setWinner(player1)
      setIsWinner(true)
      setCountWinRoundPlayer1(countWinRoundPlayer1 + 1)
      if (countWinRoundPlayer1 === (numberOfRound / 2 + 0.5)) {
        setScores(playerTimeA*10+moveStep*10)
        setWinFinal(true)
      }
    }
    if (s.includes('O'.repeat(5))) {
      setWinner(player2)
      setIsWinner(true)
      setCountWinRoundPlayer2(countWinRoundPlayer2 + 1)
      if (countWinRoundPlayer2 === (numberOfRound / 2 + 0.5)) {
        setScores(playerTimeB*10+moveStep*10)
        setWinFinal(true)
      }
    }
  }
  const handleNewMove = useCallback((r, c) => {
    setMoveRecords((oldArray) => [...oldArray,[r, c]]);
  }, []);

  const checkIsTimeUp=()=>{
    if(playerTimeB === 0){
      setNotification("Time Up")
      setWinner(player1)
      setIsWinner(true)
      setIsTimeUp(true)
      setCountWinRoundPlayer1(countWinRoundPlayer1 + 1)
      if (countWinRoundPlayer1 === (numberOfRound / 2 + 0.5)) {
        setScores(playerTimeA* + moveRecords*10)
        setWinFinal(true)
      }
    }
    if(playerTimeA === 0){
      setNotification("Time Up")
      setWinner(player2)
      setIsWinner(true)
      setIsTimeUp(true)
      setCountWinRoundPlayer2(countWinRoundPlayer2 + 1)
      if (countWinRoundPlayer2 === (numberOfRound / 2 + 0.5)) {
        setScores(playerTimeB*10 + moveRecords*10)
        setWinFinal(true)
      }
    }
  }

  useEffect (() =>{
    checkIsTimeUp()
  },[playerTimeB,playerTimeA])
  return (
    <>
      <div className="container">
        <CurrentPlayer player={currentPlayer} playerNameA={player1}
        playerNameB={player2} playerTimeA={playerTimeA} playerTimeB={playerTimeB}
        setPlayerTimeA={setPlayerTimeA} setPlayerTimeB={setPlayerTimeB}
        setWinner={setWinner} setWinFinal={setWinFinal} setIsWinner={setIsWinner} setScores={setScores} moveStep={moveStep}
        />
        <Board
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          check={check}
          initMatrix={initMatrix}
          matrix={matrix}
          setMatrix={setMatrix}
          onNewMove={handleNewMove}
          moveStep={moveStep}
          setMoveStep={setMoveStep}
        />
        <MoveReCord  moveRecords={moveRecords} playerNameA={player1} playerNameB={player2} />

        {isWinner ? (winFinal ?(
           
          <Popup trigger={true}
            notification={notification}
            winner={winner}
            scores={scores}
          />
          
          )
          :
          <NextRound
            notification={notification}
            trigger={true}
            round={countRound}
            winner={winner}
            steps={moveRecords.length}
            setCountRound={setCountRound}
            setMoveRecords={setMoveRecords}
            setIsWinner={setIsWinner}
            setWinner={setWinner}
            setMatrix={setMatrix}
            initMatrix={initMatrix}
            playerTimeA={playerTimeA}
            playerTimeB={playerTimeB}
            setPlayerTimeA={setPlayerTimeA}
            setPlayerTimeB={setPlayerTimeB}
            isTimeUp={isTimeUp}
            setIsTimeUp={setIsTimeUp}
          />
        ) : ""
        }
      </div>
      <ParticlesBg type="cobweb" bg={true}/>
    </>
  )
}

export default Game
