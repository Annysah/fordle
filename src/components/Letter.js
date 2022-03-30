import React, { useContext } from 'react'

import { AppContext } from '../App'

const Letter = ({ letterPosition, attemptValue }) => {
    const { grid } = useContext(AppContext)
    const letter = grid[attemptValue][letterPosition]
  return (
    <div className='letter'>{letter}</div>
  )
}

export default Letter