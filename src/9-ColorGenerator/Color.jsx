import React, {useState} from 'react'

function Color() {
    const [color, setColor] = useState("")
  return (
    <>
      <form
        className="mx-auto text-center d-flex mb-4 w-100 justify-content-center align-items-center"
        style={{ cursor: 'pointer', height: '3rem', maxWidth: '40rem' }}
      >
        <p className="me-5 fs-2 mt-2" style={{ width: '30rem' }}>
          Color Generator
        </p>
        <div className="input-group rounded border d-flex">
          <input
            type="color"
            className="border-0 me-auto"
            placeholder="#00000"
            style={{height:"3rem"}}
          />
          <button className="btn btn-success ms-2" type="button">
            Generate
          </button>
        </div>
      </form>
      <section
        className="bg-dark row"
        style={{ width: '100vw', height: '80vh' }}
      >
        <div
          className="col bg-light text-dark"
          style={{ height: '7rem' }}
        >
          <p>100%</p>
          <p>#1111</p>
        </div>
      </section>
    </>
  )
}

export default Color
