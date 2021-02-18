import React from 'react'

const Weather = (props) => {
  const { city, country, termpriture, description, error } = props.data
  const ifError = () => {
    if (error)
      return (
        <div className="heading">
          <h3>
            <span>City:</span>
            {city}
          </h3>
          <h3>
            <span>Country:</span>
            {country}
          </h3>
          <h3>
            <span>error:</span>
            {error}
          </h3>
        </div>
      )
    return (
      <div className="heading">
        <h3>
          <span>City:</span>
          {city}
        </h3>
        <h3>
          <span>Country:</span>
          {country}
        </h3>
        <h3>
          <span>Termpriture:</span>
          {termpriture}
        </h3>
        <h3>
          <span>Description:</span>
          {description}
        </h3>
      </div>
    )
  }

  return ifError()
}

export default Weather
