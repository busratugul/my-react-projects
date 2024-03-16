import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import data from './data/data'

function Slider() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)
  console.log(people)
  useEffect(() => {
    const lastIndex = people.length -1
    if(index < 0) {
        setIndex(lastIndex)
    }
    if(index > lastIndex) {
        setIndex(0)
    }
  }, [index, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000)
    return() => {
        clearInterval(slider)
    }
  }, [index])

  return (
    <main className="w-100 h-100">
      {people.map((person, personIndex) => {
        const { id, name, image, quote, title } = person
        let position = 'nextSlide'
        if (personIndex === index) {
          position = 'activeSlide'
        }
        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
        ) {
          position = 'lastSlide'
        }

        return (
          <article className={`w-100 h-100 text-center d-relative ${position}`} key={id}>
            <img
              src={image}
              alt="profil"
              className="rounded-circle border border-danger-subtle border-4 shadow mb-5"
              width="150px"
              height="150px"
              style={{ objectFit: 'cover' }}
            />
            <h4 className="mb-3">{name.toUpperCase()}</h4>
            <p
              className="blockquote-footer text-dark"
              style={{ textTransform: 'capitalize' }}
            >
              {title}
            </p>
            <p className="blockquote text-secondary">{quote}</p>
          </article>
        )
      })}
      <button className="prev slider" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className="next slider" onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>
    </main>
  )
}

export default Slider
