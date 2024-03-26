import React, { useState } from 'react'
import data from './data/data'

function Lorem() {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])

  console.log(count)

  function handleSubmit(e) {
    e.preventDefault()
    let amount = parseInt(count)
    let index = 0
    let fullText = data.slice(0, amount).join(' ')

    const textInterval = setInterval(() => {
      setText((prev) => [...prev, fullText[index]])
      index++
      if (index === fullText.length) {
        clearInterval(textInterval)
      }
    }, 10)
  }

  return (
    <section style={{ overflow: 'scroll' }} className="mt-3">
      <h1 className="text-center">TIRED OF BORING LOREM IPSUM? </h1>
      <form
        onSubmit={handleSubmit}
        className="d-flex my-3"
        style={{ alignItems: 'center', justifyContent: 'space-evenly' }}
      >
        <label
          style={{ fontWeight: '400', letterSpacing: '0.2rem' }}
          className="h4"
          htmlFor="countParagraph"
        >
          Paragraphs:
        </label>
        <input
          type="number"
          id="countParagraph"
          className="form-control bg-secondary fs-5"
          style={{ width: '5rem' }}
          min={1}
          max={8}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn btn-success p-2">Generate</button>
      </form>
      {text.length !== 0 && (
        <div className="p-5" style={{lineHeight:"2rem", lineBreak:'revert'}}>
          {text}
        </div>
      )}
    </section>
  )
}

export default Lorem
