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
            <h2>Information</h2>`
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
