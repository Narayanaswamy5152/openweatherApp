import React, {useState} from 'react'

const App = () => {
  const [city, setCity] = useState('')
  const [result, setResult] = useState('')
  const changeHandler = e => {
    setCity(e.target.value)
  }
  const submitHandler = e => {
    e.preventDefault()
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=af21293282f8a508ba45b78a1442dea8`,
    )
      .then(response => response.json())
      .then(data => {
        const kelvin = data.main.temp
        const celcius = kelvin - 273.15
        setResult(`Temperature at  ${city}  ${Math.round(celcius)} °C`)
        console.log(data.main.pressure)
      })
      .catch(error => console.log(error))
    setCity('')
  }

  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Weather App</h4>
            <img
              src="https://cdn.pixabay.com/photo/2016/11/21/03/56/landscape-1844226_960_720.png"
              alt="weather"
              className="weather-image"
            />
            <form onSubmit={submitHandler}>
              <input
                size="30"
                type="text"
                name="city"
                onChange={changeHandler}
                value={city}
              />{' '}
              <br />
              <br />
              <input type="submit" value="Get Temperature" />
            </form>
            <br /> <br />
            <div>
              <h1>{result}</h1>
            </div>
          </div>
        </div>
      </center>
    </div>
  )
}

export default App
