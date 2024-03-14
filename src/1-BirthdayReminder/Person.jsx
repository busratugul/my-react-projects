import React, { useState, useEffect } from 'react'
import { persons } from './data/persons'

function Person() {
  const [personList, setPersonList] = useState([])

  useEffect(() => {
    setPersonList([...persons])
  }, [])

  let imageStyle = {
    width: '4rem',
    height: '4rem',
    marginTop: '1rem',
    objectFit: 'cover',
  }

  let PersonDiv = {
    display: 'flex',
  }

  return (
    <>
      <h2
        className="text-center"
        style={{ letterSpacing: '0.1rem' }}
      >{`${personList.length} Birthdays Today`}</h2>
      {personList.map((person, idx) => (
        <div key={idx} className="border-bottom pb-3 person" style={PersonDiv}>
          <img
            src={person.image}
            style={imageStyle}
            className="rounded-circle"
          />
          <div className="ms-3 my-auto">
            <b className="fs-10">{person.name}</b>
            <small className="d-block">{person.age} years </small>
          </div>
        </div>
      ))}

      {personList.length > 0 ? (
        <button
          className="btn btn-dark my-3 text-light"
          onClick={() => setPersonList([])}
        >
          Clear All
        </button>
      ) : (
        <p className="text-center my-auto"> Today is nobody's birthday 😒 </p>
      )}
    </>
  )
}

export default Person
