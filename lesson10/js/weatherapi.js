const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=ec1da9735ed79464d9674d9bfcb53a59';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    });