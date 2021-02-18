import React from 'react'
import './App.css'
import Form from './components/Form/form.component'
import Heading from './components/Heading/heading.component'
import Weather from './components/Weather/weather.component'
const key = 'ba0e541ca7cdbba97ebb83e58d0366c7'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.getWeather.bind(this)
    this.state = {
      input: { city: '', country: '' },
      city: '',
      country: '',
      termpriture: null,
      humidity: null,
      description: null,
      error: false,
    }
  }
  changeHandler = (e) => {
    this.setState({
      input: { [e.target.name]: e.target.value },
    })
  }

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const apiCall = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}&units=metric`
    )
    const data = await apiCall.json()

    if (data.cod !== '404') {
      this.setState({
        input: { city: '', country: '' },
        city: data.name,
        country: data.sys.country,
        termpriture: data.main.temp,
        description: data.weather[0].description,
        error: false,
      })
    } else {
      this.setState({
        input: { city: '', country: '' },
        city: city || 'empty',
        country: country || 'empty',
        termpriture: null,
        description: null,
        error: data.message,
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Heading />
        <Form
          getWeather={this.getWeather}
          data={this.state.input}
          changeHandler={this.changeHandler}
        />
        <Weather data={this.state} />
      </div>
    )
  }
}

export default App
