import React from 'react'
import './App.css'
import Reviews from './projects/3-Review/Reviews'
import BirthdayCard from './projects/1-BirthdayReminder/BirthdayCard'

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
      <BirthdayCard />
    </div>
  )
}

export default App
