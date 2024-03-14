import React, { useState, useEffect } from 'react'
import { tours_data } from './tours_data'
import Loading from '../components/Loading'
import Tour from './Tour'

function Tours() {
  const [tours, setTours] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setTours(tours_data)
    }, 2000)
  }, [])
  console.log(tours)

  return (
    <>
      {tours.length <= 0 ? (
        <Loading />
      ) : (
        <>
          <h1>Our Tour</h1>
          <div
            style={{ width: '7rem' }}
            className="border border-success-subtle border-2 mb-4"
          ></div>

          <div
            className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
            style={{ height: '80vh' }}
          >
            {tours.map((tour, idx) => (
               <div className="col">
              <Tour key={idx} {...tour} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default Tours
