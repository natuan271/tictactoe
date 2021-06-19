import React, { useState } from 'react'
import Square from './Square'
import '../App.css'

export default function Board({
    currentPlayer,
    setCurrentPlayer,
    check,
    initMatrix,
    matrix,
    setMatrix,
    onNewMove,
    moveStep,
    setMoveStep
}) {
    const chars = ['0', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const onClickSquare = (r, c) => {
        let temp = matrix
        if (temp[r][c] === 'X' || temp[r][c]==='O') return
        temp[r][c] = currentPlayer;
        setMatrix(temp)
        check(temp, r, c)
        setCurrentPlayer(currentPlayer==='X' ? 'O' : 'X')
        setMoveStep(moveStep+1)
        onNewMove(r, c);
    }
        return (
            <div className='board'>
                <div className='char'>
                {
                    chars.map(el =>
                        <span className='item'>{el}</span>
                    )
                }
                </div>
                <div className='under'>
                    <div className='nums'>
                    {
                        nums.map(el =>
                            <span className='item'>{el}</span>
                        )
                    }
                    </div>
                    <div className="playarea">
                    {
                        matrix.map((row, r) =>
                            row.map((e, c) =>
                                <Square
                                    onClick={() => onClickSquare(r, c)}
                                >{e}</Square>
                            )
                        )
                    }
                    </div>
                </div>
            </div>
        )
}
