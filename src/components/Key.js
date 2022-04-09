import React, { useContext } from 'react'

import { AppContext } from '../App'

const Key = ({ keyValue, bigKey }) => {
    const { grid, setGrid, currentAttempt, setCurrentAttempt } = useContext(AppContext)

    const selectKey = () => {
        if(keyValue === "ENTER") {
            if(currentAttempt !== 5) return;
            setCurrentAttempt({attempt: currentAttempt.attempt + 1, letterPos: 0})
        } else {
            if(currentAttempt.letterPos > 4) return;

            const newGrid = [...grid]

            newGrid[currentAttempt.attempt][currentAttempt.letterPos] = keyValue
            setGrid(newGrid)

            setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos + 1})
        }
    }
  return (
    <div className='key' id ={bigKey && "big"} onClick={selectKey} >
        {keyValue}
    </div>
  )
}

export default Key