import React, { useState, createContext } from 'react'

import GameGrid from './components/GameGrid'
import Keyboard from './components/Keyboard'
import { DefaultGrid } from './components/DefaultGrid'

export const AppContext = createContext()

const App = () => {
  const [grid, setGrid] = useState(DefaultGrid)
  const [currentAttempt, setCurrentAttempt] = useState({ attempt: 0, letterPos: 0})
  return (
    <div className='App'>
      <nav>
        <h1>Fordle</h1>
      </nav>
      <AppContext.Provider value={{ grid, setGrid, currentAttempt, setCurrentAttempt}}>
        <div className='game'>
          <GameGrid />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  )
}

export default App