import React, { useState } from 'react'
import './App.css'
import Start from './components/Start'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import Game from './components/Game'
import NextRound from './components/BestOfRoundComboBox'
import Test from './components/Test'
import CountdownTime from './components/CountdownTime'
export default function App() {
 
  return (
    <Router>
      <Route exact path="/" component={Start}></Route>
      <Route exact path="/Game" component={Game}  ></Route>
    </Router>
  )
}
