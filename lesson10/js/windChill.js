//weather summary API
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=ec1da9735ed79464d9674d9bfcb53a59&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const currentCondition = document.querySelector('#condition')
        const temp = document.querySelector('#temp');
        const humid = document.querySelector('#humid');
        const wind = document.querySelector('#wind');
        const icon = document.querySelector('#icon');

        currentCondition.textContent = jsObject.weather[0].description;
        temp.textContent = jsObject.main.temp.toFixed(0);
        humid.textContent = jsObject.main.humidity.toFixed(0);
        wind.textContent = jsObject.wind.speed.toFixed(0);

        //const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        //const desc = jsObject.weather[0].descritpion;

        //icon.setAttribute('src', imagesrc);
        //icon.setAttribute('alt', desc);

    });

function windChill() {
    let temp = (parseFloat(document.getElementById('temp').innerHTML));
    let wind = (parseFloat(document.getElementById('wind').innerHTML));
    let chill = "";

    chill = ((35.74 + (0.6215 * temp)) - (35.75 * Math.pow(wind, 0.16)) + ((0.4275 * temp) * Math.pow(wind, 0.16)));

    document.getElementById('chill').innerHTML = chill.toFixed(0);
}