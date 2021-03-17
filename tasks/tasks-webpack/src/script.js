import { renderSearch } from './modules/search/script'
import { renderWeather } from './modules/weather/script'


1 - get root element - parentElement
//params === {city: , country}
async function onCallSearch (params) {
  //1 - get weather from api (data)
  const data = await = getWeather(params)
  //2 - renderWeather(parentElement, data)
  renderWeather(parentElement, data)

}

function getWeather() {

}
2 - renderSearch(parentElement, onCallSearch)
