const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const prophets = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {

            let towns = town[i]
            let townNames = ["Fish Haven", "Preston", "Soda Springs"]
            if (townNames.includes(town.name)) {

                let section = document.createElement('section');
                let h2 = document.createElement('h2');
                let motto = document.createElement('h3');
                let year = document.createElement('p');
                let pop = document.createElement('p');
                let rain = document.createElement('p');
                let alt = document.createElement('alt');

                h2.textContent = town.name;
                motto.textContent = 'Motto: ' + town.motto;
                year.textContent = 'Year Founded: ' + town.year;
                pop.textContent = 'Population: ' + town.pop;
                rain.textContent = 'Annual Rainfall: ' + town.rain;

                town.appendChild(h2);
                town.appendChild(alt);
                town.appendChild(motto);
                town.appendChild(year);
                town.appendChild(pop);
                town.appendChild(rain);

                alt.setAttribute('alt', town.name);
                let image = createElement('img');
                img.setAttribute('src', "images/" + town.photo);

                document.querySelector('div.town').appendChild(town);
            }
        }

    });