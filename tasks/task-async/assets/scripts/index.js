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
    } else {
       return null
    }
  } catch (error) {
      console.log(error)
      return null
    }
}

const renderWeatherData = function (data) {
  const weatherNode = WEATHER_TEMPLATE.content.querySelector('.weather-item')
  const weather = weatherNode.cloneNode(true)
  const resultData = data
  weather.querySelector('.weather-img').src = resultData.current.weather_icons[0]
  weather.querySelector('.grad').textContent = `${resultData.current.temperature} °C`
  weather.querySelector('.location').textContent = `${resultData.location.name}, ${resultData.location.country}`
  weather.querySelector('.time').textContent = `Time: ${resultData.current.observation_time}`
  weather.querySelector('.like').textContent = `Like: ${resultData.current.feelslike}`
  weather.querySelector('.state').textContent = resultData.current.weather_descriptions[0]
  weather.querySelector('.wind').textContent = `Wind: ${resultData.current.wind_dir}`
  weather.querySelector('.speed').textContent = `Speed: ${resultData.current.wind_speed}`
  weather.querySelector('.pressure').textContent = `Pressure: ${resultData.current.pressure}`
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
