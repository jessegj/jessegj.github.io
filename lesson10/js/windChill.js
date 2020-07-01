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

//forecast API
const apiURLI = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=ec1da9735ed79464d9674d9bfcb53a59&units=imperial';

fetch(apiURLI)
    .then((response) => response.json())
    .then((jsObject) => {

        const fiveDayForecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

        const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day = 0;
        fiveDayForecast.forEach(forecast => {
            let d = new Date(forecast.dt_txt);
            //document.getElementById(`forecast${day+1}`).textContent = forecast.main.temp.toFixed(0);
            document.getElementById(`weekday${day+1}`).textContent = weekdays[d.getDay()];
            day++;
        });

        //This for loop was used with permission from Lance Rob

        for (let index = 0; index < fiveDayForecast.length; index++) {
            const imagesrc = 'https://openweathermap.org/img/w/' + fiveDayForecast[index].weather[0].icon + '.png';
            const desc = fiveDayForecast[index].weather[0].description;
            document.getElementById(`icon${index+1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${index+1}`).setAttribute('alt', desc);
            document.getElementById(`day${index+1}`).innerHTML = `${Math.round(fiveDayForecast[index].main.temp)}`;
        }

    });

function windChill() {
    let temp = (parseFloat(document.getElementById('temp').innerHTML));
    let wind = (parseFloat(document.getElementById('wind').innerHTML));
    let chill = "";

    chill = ((35.74 + (0.6215 * temp)) - (35.75 * Math.pow(wind, 0.16)) + ((0.4275 * temp) * Math.pow(wind, 0.16)));

    document.getElementById('chill').innerHTML = chill.toFixed(0);
}