const requestURL = '../scootsproject/data.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing

        const rental = jsonObject['priceChart'];

        for (let i = 0; i < rental.length; i++) {

            let section = document.createElement('table');
            let rentalType = document.createElement('tr');
            let maxPersons = document.createElement('td');
            let resHalfDay = document.createElement('td');
            let resFullDay = document.createElement('td');
            let walkHalfDay = document.createElement('td');
            let walkFullDay = document.createElement('td');

            rentalType.textContent = rental[i].rentalType;
            maxPersons.textContent = rental[i].maxPersons;
            resHalfDay.textContent = rental[i].resHalfDay;
            resFullDay.textContent = rental[i].resFullDay;
            walkHalfDay.textContent = rental[i].walkHalfDay;
            walkFullDay.textContent = rental[i].walkFullDay;

            section.appendChild(rentalType);
            section.appendChild(maxPersons)
            section.appendChild(resHalfDay);
            section.appendChild(resFullDay);
            section.appendChild(walkHalfDay);
            section.appendChild(walkFullDay);
            document.querySelector('div.tableInfo').appendChild(section);
        }

    });