import React from 'react'
import './App.css'
import Reviews from './3-Review/Reviews'
import BirthdayCard from './1-BirthdayReminder/BirthdayCard'
import Tours from './2-Tours/Tours'
import Menu from './4-RestaurantMenu/Menu'
import QuestionsApp from './5-Accordion/QuestionsApp'
import Tabs from './6-Tabs/Tabs'
import Slider from './7-Slider/Slider'
import Lorem from './8-Lorem_ipsum/Lorem'
import Color from './9-ColorGenerator/Color'


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
      {/* <Slider/> */}
      {/* <Lorem/> */}
      <Color/>
    </div>
  )
}

export default App
