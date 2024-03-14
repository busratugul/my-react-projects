import React, { useState } from 'react'

function Tour({ name, image, descriptions, price, removeTour }) {
  const [readMore, setReadMore] = useState(false)

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
      style={{ maxHeight: '35rem', position: 'relative', cursor: 'pointer' }}
    >
      <img src={image} alt="" className="card-img-top" style={tourImg} />
      <span className="bg-success text-light fs-10 rounded-bottom-1" style={priceDiv}>
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
            className="btn btn-link text-success btn-sm p-0 mb-1"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn btn-outline-success btn-sm"
            onClick={() => removeTour(name)}
          >
            Not Interested
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tour
