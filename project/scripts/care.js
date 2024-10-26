const currentyear = document.querySelector("#currentyear");
const today = new Date()

currentyear.innerHTML = `@ <span
class="highlight">${today.getFullYear()}</span>`;

const date = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = date;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu')


hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});
function displayCards() {
    const storedCards = localStorage.getItem("storedCards");

    if (storedCards) {
        const cardArray = JSON.parse(storedCards);

        console.log(cardArray);
        const cardContainer = document.getElementById('card-container');
        cardContainer.innerHTML = '';

        cardArray.forEach((card) => {
            let image = document.createElement('img');
            const cardDiv = document.createElement('div');
            const cardDiv1 = document.createElement('div');
            cardDiv.classList.add('card');
            cardDiv1.classList.add('cards');
            cardDiv.innerHTML = `
            <h2>${card.common_name || 'Unknown Plant'}</h2>`
            cardDiv1.innerHTML = `
            <h2>Information</h2>
            <p> The plant is a vegetable? ${card.vegetable}`
            if (card.main_species.growth.ph_minimum !== null) {
                cardDiv1.innerHTML += `<p> Minimum pH ${card.main_species.growth.ph_minimum}</p>`
            }
            if (card.main_species.growth.ph_maximum !== null) {
                cardDiv1.innerHTML += `<p> Maximum pH ${card.main_species.growth.ph_maximum}</p>`
            }
            if (card.main_species.edible !== null) {
                cardDiv1.innerHTML += `<p> Is it edible? ${card.main_species.edible}</p>`
            }
            if (card.main_species.growth.bloom_months !== null) {
                cardDiv1.innerHTML += `<p> The months that it blooms is ${card.main_species.growth.bloom_months}</p>`
            }
            if (card.main_species.fruit_or_seed.color !== null) {
                cardDiv1.innerHTML += `<p> The color of its fruit is ${card.main_species.fruit_or_seed.color}</p>`
            }
            if (card.main_species.observations !== null) {
                cardDiv1.innerHTML += `<p> Observations about this plant ${card.main_species.observations}</p>`
            }
            if (card.main_species.specifications.growth_rate !== null) {
                cardDiv1.innerHTML += `<p> Growth rate of plant ${card.main_species.specifications.growth_rate}</p>`
            }
            if (card.main_species.growth.light !== null) {
                cardDiv1.innerHTML += `<p> Light requirement for plant ${card.main_species.growth.light}/10</p>`
            }


            image.setAttribute('src', card.image_url);
            image.setAttribute('loading', 'lazy');
            image.setAttribute('alt', `Picture of ${card.common_name}`);

            cardDiv.appendChild(image);


            cardContainer.appendChild(cardDiv);
            cardContainer.appendChild(cardDiv1);


        })
    }

}
displayCards();
