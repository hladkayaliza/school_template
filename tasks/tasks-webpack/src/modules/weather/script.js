import './style.css'

export function renderWeather(parentElement, data) {
  if (data) {
    const weatherBlock = `<div class="weather-item">
                          <div class="main-data">
                              <img class="weather-img" src="${data.current.weather_icons[0]}" />
                              <span class="grad">${data.current.temperature} °C</span>
                              <span class="location">${data.location.name}, ${data.location.country}</span>
                          </div>
                          <div class="additional-data">
                            <div class="additional-data__row">
                                <div class="time">Time: ${data.current.observation_time}</div>
                                <div class="like">Like: ${data.current.feelslike}</div>
                                <div class="state">${data.current.weather_descriptions[0]}</div>
                            </div>
                            <div class="additional-data__row">
                                <div class="wind">Wind: ${data.current.wind_dir}</div>
                                <div class="speed">Speed: ${data.current.wind_speed}</div>
                                <div class="pressure">Pressure: ${data.current.pressure}</div>
                            </div>
                          </div>
                        </div>`
    parentElement[0].innerHTML = weatherBlock
  } else {
    parentElement[0].innerHTML = 'Sorry, check entered data!'
  }
}
