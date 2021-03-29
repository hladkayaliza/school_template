const FORM = document.getElementById('location-form')
const CITY = document.getElementById('city')
const COUNTRY = document.getElementById('country')
const APIKEY = 'e6dd5a990a4a4b7c5f138f291de09d4c'
const URL = `http://api.weatherstack.com/current?access_key=${APIKEY}`
const container = document.getElementsByClassName('weather-container')

const WEATHER_TEMPLATE = document.getElementById('weather')

const checkStatus = function (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

const parseJson = function (result) {
  return result.json()
}

const getWeatherData = async function (city, country) {
  try {
    const url = `${URL}&query=${city},${country}`
    const response = await fetch(url)
    const checkedResponse = checkStatus(response)
    if (checkedResponse) {
      return parseJson(checkedResponse)
    }
    return null
  } catch (error) {
    console.log(error)
    return null
  }
}

const renderWeatherData = function (data) {
  const weatherNode = WEATHER_TEMPLATE.content.querySelector('.weather-item')
  const weather = weatherNode.cloneNode(true)
  const temperature = data.current.temperature
  const weather_icon = data..current.weather_icons[0]
  const city = data.location.name
  const country = data.location.country
  const time = data.current.observation_time
  const feeling = data.current.feeling
  const weather_descriptions = data.current.weather_descriptions[0]
  const wind_speed = data.current.wind_speed
  const pressure = data.current.pressure

  weather.querySelector('.weather-img').src = weather_icon
  weather.querySelector('.grad').textContent = `${temperature} °C`
  weather.querySelector('.location').textContent = `${city}, ${country}`
  weather.querySelector('.time').textContent = `Time: ${time}`
  weather.querySelector('.like').textContent = `Like: ${feeling}`
  weather.querySelector('.state').textContent = weather_descriptions
  weather.querySelector('.wind').textContent = `Wind: ${wind_dir}`
  weather.querySelector('.speed').textContent = `Speed: ${wind_speed}`
  weather.querySelector('.pressure').textContent = `Pressure: ${pressure}`
  container[0].append(weather)
}

async function GetWeather(city, country) {
  try {
    const data = await getWeatherData(city, country)
    renderWeatherData(data)
  } catch (error) {
    console.log(error)
  }
}

FORM.addEventListener('submit', (evt) => {
  evt.preventDefault()
  container[0].innerHTML = ''
  const cityValue = CITY.value
  const countryValue = COUNTRY.value
  if (!cityValue) {
    container[0].innerHTML = '<span style="text-align: center">Please, input city</span>'
  } else {
    GetWeather(cityValue, countryValue)
  }
  CITY.value = ''
  COUNTRY.value = ''
})
