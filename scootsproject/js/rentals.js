const requestURL = '../scootsproject/data.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing

        const rental = jsonObject['priceChart'];

        for (let i = 0; i < rental.length; i++) {

            let table = document.createElement('section');
            let rentalType = document.createElement('h2');
            let maxPersons = document.createElement('p');
            let resHalfDay = document.createElement('p');
            let resFullDay = document.createElement('p');
            let walkHalfDay = document.createElement('p');
            let walkFullDay = document.createElement('p');

            type.textContent = rental[i].rentalType;
            maxPersons.textContent = rental[i].maxPersons;
            resHalfDay.textContent = rental[i].resHalfDay;
            resFullDay.textContent = rental[i].resFullDay;
            walkHalfDay.textContent = rental[i].walkHalfDay;
            walkFullDay.textContent = rental[i].walkFullDay;

            table.appendChild(rentalType);
            table.appendChild(maxPersons)
            table.appendChild(resHalfDay);
            table.appendChild(resFullDay);
            table.appendChild(walkHalfDay);
            table.appendChild(walkFullDay);
            document.querySelector('div.tableInfo').appendChild(section);
        }

    });