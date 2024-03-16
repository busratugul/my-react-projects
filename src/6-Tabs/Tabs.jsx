import React, { useEffect, useState } from 'react'
import Loading from '.././components/Loading'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

function Tabs() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  async function fetchData() {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])
  console.log(jobs)
  if (loading) {
    return <main>{loading && <Loading />}</main>
  }

  const { company, dates, duties, id, order, title } = jobs[value]
  console.log(duties)
  return (
    <main>
      <h3>
        <strong>E X P E R I E N C E S</strong>
      </h3>
      <div
        style={{ width: '7rem' }}
        className="border border-bottom border-info border-2 my-2"
      ></div>
      <section
        className="w-100 d-flex"
        style={{ alignItems: 'center', justifyContent: 'center' }}
      >
        {jobs.map((job, idx) => {
          return (
            <div key={idx}>
              <div>
                <button
                  className={`btn btn-outline-light text-info btn-sm border-info mx-2 ${
                    idx === value && 'active'
                  }`}
                  onClick={() => setValue(idx)}
                >
                  {job.company}
                </button>
              </div>
            </div>
          )
        })}
      </section>
      <section style={{ height: '10rem' }} className="h-100 my-5">
        <h4 className="my-2">{title}</h4>
        <h6 className="d-inline-block p-2 rounded">
          <mark>{company}</mark>
        </h6>
        <p className="blockquote-footer my-2">{dates}</p>
        {duties.map((duty, idx) => {
          return (
            <div key={idx} className="d-flex">
              <FaAngleDoubleRight className="fs-5 me-2 text-info" />
              <p>{duty}</p>
            </div>
          )
        })}
        <button className="btn btn-link">
          <a href="https://github.com/busratugul" className="text-dark">
            More Info
          </a>
        </button>
      </section>
    </main>
  )
}

export default Tabs
