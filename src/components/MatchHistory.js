import React from 'react'
import '../App.css'

function MatchHistory(props){
    const history = props.history;
    const setIsCloseHistory =props.setIsShowHistory;
    return (
        <div className="history-table" style={{zIndex:1000000}}>
            <div className="table-scroll">
                <table className="table">
                        <thead>
                        <tr>
                        <th scope="col">Player 1</th>
                        <th scope="col">Player 2</th>
                        <th scope="col">Winner</th>
                        <th scope="col">Steps</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map(h => {
                            return <tr>
                            <td>{h.player1}</td>
                            <td>{h.player2}</td>
                            <td>{h.winner}</td>
                            <td>{h.moveStep}</td>
                        </tr>
                        })}
                    </tbody>
                    </table>
                </div>
            <button className="close-button" onClick={() => setIsCloseHistory()}>Close</button>
        </div>
    );
}

export default MatchHistory