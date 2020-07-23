const requestURL = '../scootsproject/data.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing

        const rental = jsonObject['priceChart'];

        for (let i = 0; i < rental.length; i++) {

            let table = document.createElement('tr');
            let rentalType = document.createElement('td');
            let maxPersons = document.createElement('td');
            let resHalfDay = document.createElement('td')
            let resFullDay = document.createElement('td');
            let walkHalfDay = document.createElement('td');
            let walkFullDay = document.createElement('td');
            
            rentalType.textContent = rental[i].rentalType;
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

            document.querySelector('div.tableInfo').appendChild(table);

            
        }

    });