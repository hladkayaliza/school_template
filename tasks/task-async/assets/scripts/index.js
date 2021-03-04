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
  const url = `${URL}&query=${city},${country}`
  const response = await fetch(url)
  return response
}

const renderWeatherData = function (data) {

  const weatherNode = WEATHER_TEMPLATE.content.querySelector('.weather-item')
  const weather = weatherNode.cloneNode(true)
  weather.querySelector('.weather-img').src = data.current.weather_icons[0]
  weather.querySelector('.grad').textContent = `${data.current.temperature} °C`
  weather.querySelector('.location').textContent = `${data.location.name}, ${data.location.country}`
  weather.querySelector('.time').textContent = `Time: ${data.current.observation_time}`
  weather.querySelector('.like').textContent = `Like: ${data.current.feelslike}`
  weather.querySelector('.state').textContent = data.current.weather_descriptions[0]
  weather.querySelector('.wind').textContent = `Wind: ${data.current.wind_dir}`
  weather.querySelector('.speed').textContent = `Speed: ${data.current.wind_speed}`
  weather.querySelector('.pressure').textContent = `Pressure: ${data.current.pressure}`
  container[0].append(weather)
}

async function GetWeather(city, country) {
  try {
    await getWeatherData(city, country)
      .then((response) => checkStatus(response))
      .then((result) => parseJson(result))
      .then((data) => renderWeatherData(data))
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
