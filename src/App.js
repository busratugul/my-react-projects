import React from 'react'
import './App.css'
import Reviews from './3-Review/Reviews'
import BirthdayCard from './1-BirthdayReminder/BirthdayCard'
import Tours from './2-Tours/Tours'

function App() {
  let App = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <div style={App} className="container">
      {/*  <Reviews /> */}
      {/* <BirthdayCard /> */}
      <Tours/>
    </div>
  )
}

export default App
