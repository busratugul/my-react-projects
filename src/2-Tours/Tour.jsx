import React, { useState, useRef } from 'react'

function Tour({ name, image, descriptions, price }) {
  const [readMore, setReadMore] = useState(false)

  const focusRef = useRef(null)

  let tourImg = {
    objectFit: 'cover',
    maxHeight: '200px',
  }

  let priceDiv = {
    width: '4rem',
    position: 'absolute',
    right: 0,
    paddingLeft: '5px',
  }

  return (
      <div
        className="card shadow"
        style={{ maxHeight: '30rem', position: 'relative', cursor: 'pointer' }}
      >
        <img src={image} alt="" className="card-img-top" style={tourImg} />
        <span className="bg-primary text-light fs-10" style={priceDiv}>
          {price}$
        </span>
        <div
          className="card-body fs-10"
          style={{ height: '20rem', overflow: readMore ? 'scroll' : 'hidden' }}
        >
          <h5 className="card-title">{name}</h5>
          <p className="card-text pb-1">
            {readMore ? descriptions : `${descriptions.substring(0, 200)}...`}
            <button
              className="btn btn-link btn-sm p-0 mb-1"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? 'Show Less' : 'Read More'}
            </button>
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-primary btn-sm">Not Interested</button>
          </div>
        </div>
      </div>
  )
}

export default Tour
