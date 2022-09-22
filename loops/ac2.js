//// Guest list

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');

const refused = document.querySelector('.refused');

for (const peep of people) {
    if (peep === 'Phil' || peep === 'Lola') {
        refused.textContent += `${peep}, `;
    } else {
        admitted.textContent += `${peep}, `;

    }
}

refused.textContent = refused.textContent.slice(0, -2);

admitted.textContent = admitted.textContent.slice(0, -2);