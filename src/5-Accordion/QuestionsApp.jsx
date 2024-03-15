import React, { useState } from 'react'
import data from './data/data'
import Question from './Question'

function QuestionsApp() {
  const [questions, setQuestions] = useState(data)
  console.log(questions)

  return (
    <main>
      <h3 className="mt-3" style={{ textTransform: 'capitalize' }}>
        questions and answers about login
      </h3>
      <section className="accordion mt-2" id="accordion" style={{minWidth:"45rem"}}>
        {questions.map((question,idx) => {
          return <Question {...question} key={idx} />
        })}
      </section>
    </main>
  )
}

export default QuestionsApp
