const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {

            let towns = town[i];
            let townNames = ["Fish Haven", "Preston", "Soda Springs"];
            /*if (townNames.includes(towns.name))*/
            {

                let section = document.createElement('section');
                let h2 = document.createElement('h2');
                let motto = document.createElement('h3');
                let year = document.createElement('p');
                let pop = document.createElement('p');
                let rain = document.createElement('p');
                let alt = document.createElement('alt');

                h2.textContent = towns.name;
                motto.textContent = 'Motto: ' + towns.motto;
                year.textContent = 'Year Founded: ' + towns.year;
                pop.textContent = 'Population: ' + towns.pop;
                rain.textContent = 'Annual Rainfall: ' + towns.rain;

                section.appendChild(h2);
                section.appendChild(alt);
                section.appendChild(motto);
                section.appendChild(year);
                section.appendChild(pop);
                section.appendChild(rain);

                let image = createElement('img');
                image.setAttribute('alt', towns.name);
                image.setAttribute('src', "images/" + towns.photo);

                document.querySelector('div.town').appendChild(section);
            }
        }

    });