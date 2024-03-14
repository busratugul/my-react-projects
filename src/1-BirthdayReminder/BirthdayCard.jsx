import React from 'react'
import Person from './Person'
import {persons} from './data/persons'

function BirthdayCard() {
  let birthdayDiv = {
    width: '70%',
    minHeight: "15%",
    cursor: "pointer",
  }
  console.log(persons)
  return (
    <div className="card shadow pt-3 px-5 bg-secondary text-light" style={birthdayDiv}>
      <Person/>
    </div>
  )
}

export default BirthdayCard
