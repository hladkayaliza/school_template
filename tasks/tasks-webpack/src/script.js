import './style.css'
import { renderSearch } from './modules/search/script'
import { renderWeather } from './modules/weather/script'

const searchRootElement = document.getElementById('root')
const APIKEY = 'e6dd5a990a4a4b7c5f138f291de09d4c'
const URL = `http://api.weatherstack.com/current?access_key=${APIKEY}`

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

const getWeatherData = async function (params) {
  const url = `${URL}&query=${params.city},${params.country}`
  const response = await fetch(url)
  const checkedResponse = checkStatus(response)
  if (checkedResponse) {
    return parseJson(checkedResponse)
  }
  return null
}

async function getWeather(params) {
  try {
    const data = await getWeatherData(params)
    return data
  } catch (error) {
    console.log(error)
  }
}

async function onCallSearch(evt) {
  evt.preventDefault()
  const cityInput = document.getElementById('city')
  const countryInput = document.getElementById('country')
  const params = {
    city: cityInput.value,
    country: countryInput.value,
  }

  const data = await getWeather(params)
  const weatherRootElement = document.getElementsByClassName('weather-container')
  renderWeather(weatherRootElement, data)
  cityInput.value = ''
  countryInput.value = ''
}

renderSearch(searchRootElement, onCallSearch)
