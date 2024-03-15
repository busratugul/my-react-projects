import React, { useState, useEffect } from 'react'
import { tours_data } from './data/tours_data'
import Loading from '../components/Loading'
import Tour from './Tour'

function Tours() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      setTours(tours_data)
    }, 1000)
  }, [])
  //console.log(tours)

  function removeTour(name) {
    const newTours = tours.filter((tour) => name !== tour.name)
    setTours(newTours)
  }

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
    <main>
      <div className="title">no tours left...</div>
      <button className="btn btn-success" onClick={() => setTours(tours_data)}>REFRESH</button>
    </main>
    )
  }

  return (
    <main>
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
          <div className="col" key={idx}>
            <Tour {...tour} removeTour={removeTour} />
          </div>
        ))}
      </div>
    </main>
  )
}

export default Tours
