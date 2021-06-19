import React from 'react'
import '../App.css'

export default function MoveReCord({
    moveRecords,
    playerNameA,
    playerNameB 
}) {
  const chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    return (      
      <div className="right-bar">
        <h2>Step number: {moveRecords.length}</h2>
        <div className="move-records">
        {moveRecords.map((record, index) => (
          <p  style={{textAlign: 'left', paddingLeft:'6%', paddingRight:'6%'}} className={index % 2 === 0 ? "move-records-o" : "move-records-x"}>
          <span>{index%2 === 0 ? playerNameB : playerNameA}</span><span style={{float:'right',}}><i class="fas fa-long-arrow-alt-right"></i>&nbsp;{record[0]+1}-{chars[record[1]]}</span>
          </p>
        ))}
      </div>
      </div>
    )
}
