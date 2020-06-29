const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=ec1da9735ed79464d9674d9bfcb53a59&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const currentTemp = document.querySelector('#current-temp');
        const icon = document.querySelector('#icon');

        currentTemp.textContent = jsObject.main.temp;

        const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].descritpion;

        icon.setAttribute('src', imagesrc);
        icon.setAttribute('alt', desc);

    });