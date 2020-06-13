//get elements
const btn = document.querySelector('#btn');
const show = document.querySelector('.show');
const temp = document.querySelector('#temp');

class Weather {
  constructor(city) {
    this.apiKey = '68c3106aa48e79f1edb3e62785243942';
    this.city = city;
  }

  async showWeather() {
    let unit;
    const input = document.querySelector('#inputField').value;
    if (!input) {
      return (show.innerHTML = `<div class="card"> 
        <p>Location Can't Be Blanked</p>
        </div>
        `);
    }
    if (temp.value === 'C') {
      unit = 'metric';
    } else {
      unit = 'imperial';
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=${unit}`
    );
    const responseData = await response.json();

    if (responseData.cod === '404') {
      return (show.innerHTML = `<div class="card"> 
        <h3>Error Location Not Found</h3>
        <p>Try Another Location</p>
        </div>
        `);
    }

    show.innerHTML = `<div class="card">
          <h3>${inputField.value} Weather Is :</h3>
          <div class="card-body>
          <ul class="list-group">
          <li class="list-group-item">Temperature: ${responseData.main.temp} ${
      temp.value
    }</li> 
          <li class="list-group-item">Min Temperature: ${
            responseData.main.temp_min
          } ${temp.value}</li> 
          <li class="list-group-item">Max Temperature: ${
            responseData.main.temp_max
          } ${temp.value}</li> 
          <li class="list-group-item">Humidity: ${responseData.main.humidity} ${
      temp.value
    }</li> 
          <li class="list-group-item">Longitude: ${responseData.coord.lon}</li>
          <li class="list-group-item">Latitude : ${responseData.coord.lat}</li>
          <li class="list-group-item">Weather Description: ${responseData.weather[0].description.toUpperCase()}</li>
          
          <li class="list-group-item">Country: ${responseData.sys.country}</li>
          <li class="list-group-item">Country: ${responseData.timezone}</li>
          
          </ul>
          </div>
          </div>`;
  }
}
