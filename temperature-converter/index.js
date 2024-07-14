const submit = document.getElementById('submit');
const temperatureToConvert = document.getElementById('temperature');
const isCelsiusToFahrenheit = document.getElementById('celsiusToFahrenheit');
const isFahrenheitToCelsius = document.getElementById('fahrenheitToCelsius');
const container = document.getElementById('container');

const toFahrenheit = (currentTemp) => {
    const convertToFahrenheit = (currentTemp * 9 / 5) + 32;
    const render = document.createElement('h1');
    render.textContent = `${convertToFahrenheit.toFixed(1)} °F`;
    container.innerHTML = '';
    container.appendChild(render);
};

const toCelsius = (currentTemp) => {
    const convertToCelsius = (currentTemp - 32) * 5 / 9;
    const render = document.createElement('h1');
    render.textContent = `${convertToCelsius.toFixed(1)} °C`;
    container.innerHTML = '';
    container.appendChild(render);
};

submit.addEventListener('click', (e) => {
    e.preventDefault();

    // Check if the form is valid
    if (!temperatureToConvert.checkValidity()) {
        // If not valid, report validity to show the default browser validation message
        temperatureToConvert.reportValidity(); 
        return;
    }

    // Get the current temperature value
    const currentTemp = Number(temperatureToConvert.value);

    // Check if a conversion option is selected
    if (isCelsiusToFahrenheit.checked) {
        toFahrenheit(currentTemp);
    } else if (isFahrenheitToCelsius.checked) {
        toCelsius(currentTemp);
    } else {
        alert('Please select a conversion option.');
    }
});
