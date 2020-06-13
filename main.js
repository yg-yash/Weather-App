const inputField = document.querySelector('#inputField');
function showWeather() {
  const weather = new Weather(inputField.value);
  weather
    .showWeather()
    .then((msg) => {})
    .catch((err) => {});
}
