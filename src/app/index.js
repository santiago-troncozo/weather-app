const { Weather } = require('./Weather');
const { UI } = require('./UI');
const { Store } = require('./Store');
require('./index.css');

const ui = new UI();
const store = new Store();
const { city, countryCode } = store.getLocationData();
const weather = new Weather(city, countryCode);

async function fetchWeather() {
    const data = await weather.getWeather();
    ui.render(data);
}
document.getElementById('w-form').addEventListener('submit', submitForm);

function submitForm(ev) {
    const formValues = getFormValues();
    weather.changeLocation(formValues);
    store.setLocationData(formValues);
    fetchWeather();
    ev.preventDefault();
}

function getFormValues() {
    return {
        city: document.getElementById('city').value,
        countryCode: document.getElementById('countryCode').value
    }
}

document.addEventListener('DOMContentLoaded', fetchWeather);