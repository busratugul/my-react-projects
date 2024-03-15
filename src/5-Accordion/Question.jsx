import React, { useState } from 'react'

function Question({ id, title, info }) {
  const [show, setShow] = useState(false)

  return (
    <div className="accordion-item mb-3 shadow rounded">
      <h2 className="accordion-header">
        <button
          className="accordion-button d-inline-block"
          type="button"
          data-bs-toggle="collapse"
          onClick={() => setShow(!show)}
        >
          <strong>{title}</strong>
        </button>
      </h2>
      <div
        id={id}
        className={`accordion-collapse collapse ${show && 'show'}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body"> {info}</div>
      </div>
    </div>
  )
}

export default Question
