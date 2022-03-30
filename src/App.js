import React, { useState, createContext } from 'react'

import GameGrid from './components/GameGrid'
import Keyboard from './components/Keyboard'
import { DefaultGrid } from './components/DefaultGrid'

export const AppContext = createContext()

const App = () => {
  const [grid, setGrid] = useState(DefaultGrid)
  return (
    <div className='App'>
      <nav>
        <h1>Fordle</h1>
      </nav>
      <AppContext.Provider value={{ grid, setGrid}}>
        <GameGrid />
        <Keyboard />
      </AppContext.Provider>
    </div>
  )
}

export default App