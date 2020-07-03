const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing

        const towns = jsonObject['towns'];
        const cityPlace = towns.filter(towns => (towns.name == 'Fish Haven' || towns.name == 'Preston' || towns.name == 'Soda Springs'));
        cityPlace.forEach(towns => {

            /*let towns = towns[i];
            let townNames = ["Fish Haven", "Preston", "Soda Springs"];
            if (townNames.includes(towns.name))*/
            //{
            let section = document.createElement('section');
            let name = document.createElement('h2');
            let motto = document.createElement('h3');
            let year = document.createElement('p');
            let pop = document.createElement('p');
            let rain = document.createElement('p');
            let image = document.createElement('img');
            let alt = document.createElement('alt');

            alt.setAttribute('alt', towns.name);
            image.setAttribute('src', `images/${towns.photo}`);
            name.textContent = towns.name;
            //let image = document.createElement('img');
            image.setAttribute('alt', towns.name);
            image.setAttribute('src', "images/" + towns.photo);
            motto.textContent = 'Motto: ' + towns.motto;
            year.textContent = 'Year Founded: ' + towns.yearFounded;
            pop.textContent = 'Population: ' + towns.currentPopulation;
            rain.textContent = 'Annual Rainfall: ' + towns.averageRainfall;

            section.appendChild(name);
            section.appendChild(motto);
            section.appendChild(year);
            section.appendChild(pop);
            section.appendChild(rain);
            section.appendChild(image);
            section.appendChild(alt);


            //let image = document.createElement('img');
            //image.setAttribute('alt', towns.name);
            //image.setAttribute('src', "images/" + towns.photo);

            document.querySelector('div.city').appendChild(section);
            //}
        });

    });