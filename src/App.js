import React from 'react'
import './App.css'
import Reviews from './3-Review/Reviews'
import BirthdayCard from './1-BirthdayReminder/BirthdayCard'
import Tours from './2-Tours/Tours'
import Menu from './4-RestaurantMenu/Menu'
import QuestionsApp from './5-Accordion/QuestionsApp'
import Tabs from './6-Tabs/Tabs'
import Slider from './7-Slider/Slider'


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
      {/* <Tours/> */}
      {/* <Menu/> */}
      {/* <QuestionsApp/> */}
      {/* <Tabs/> */}
      <Slider/>
    </div>
  )
}

export default App
