import React from 'react'

const Form = (props) => {
  const { city, country } = props.data
  return (
    <form
      className="form"
      onSubmit={props.getWeather}
      onChange={props.changeHandler}
    >
      <input type="text" name="city" placeholder="City..." value={city} />
      <input
        type="text"
        name="country"
        placeholder="Country ..."
        value={country}
      />
      <button>Get Weather</button>
    </form>
  )
}

export default Form
