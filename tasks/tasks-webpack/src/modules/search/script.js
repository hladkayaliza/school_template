import './style.css'

export function renderSearch(parentElement, onCallSearch) {
  const parentContainer = parentElement
  const searchBlock = `<div>
      <section class="align location">
      <form class="location-form" id="location-form">
        <input id="city" class="location-form__item location-input" type="text" name="city"
         placeholder="Enter your city here">
        <input id="country" class="location-form__item location-input" type="text" name="country"
         placeholder="Enter your country here">
        <button class="location-form__item btn" type="submit">Submit</button>
      </form>
    </section>
    <div class="weather-container">
    </div>
  </div>`

  parentContainer.innerHTML = searchBlock
  const form = document.getElementById('location-form')
  form.addEventListener('submit', (event) => onCallSearch(event))
}
