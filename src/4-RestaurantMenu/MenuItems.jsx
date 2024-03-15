import React from 'react'

function MenuItems({ items, orderNow }) {
  let imgStyle = {
    objectFit: 'cover',
    height: '200px',
    width: '100%',
    display: 'block',
  }
  return (
    <div className="my-3 row row-cols-xs-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 me-4">
      {items.map((item) => (
        <div className="col mb-4" key={item.id}>
          <div
            className="card position-relative"
            style={{ minHeight: '30rem', minWidth: '15rem' }}
          >
            <div className="card-body">
              <img className="card-img" style={imgStyle} src={item.img} />
              <h5
                className="card-title mt-3"
                style={{ textTransform: 'capitalize' }}
              >
                {item.title}
              </h5>
              <p className="card-text">{item.desc}</p>
              <div className="position-absolute" style={{ bottom: '1rem' }}>
                <h5 className="text-danger d-inline-block me-5">
                  <small>${item.price}</small>
                </h5>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => orderNow(item.title)}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MenuItems
