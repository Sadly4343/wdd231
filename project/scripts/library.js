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







const myKey = "uPa9xse-P3R35sGhnwy-H0MQr0J6IJQHIyO2ZG7OZeg";
const myURL = `https://trefle.io/api/v1/plants?token=uPa9xse-P3R35sGhnwy-H0MQr0J6IJQHIyO2ZG7OZeg&page=2`

const names = document.querySelector('#name');
const image = document.querySelector('#img');
let firstPage = 1;
async function apiFetch() {
    try {
        const myURL = `https://trefle.io/api/v1/plants?token=uPa9xse-P3R35sGhnwy-H0MQr0J6IJQHIyO2ZG7OZeg&page=${firstPage}`
        const response = await fetch(myURL);
        if (response.ok) {
            const dataArray = await response.json();
            const items = dataArray.data;
            console.log(items);
            plantCards(items);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


const cardContainer = document.getElementById('card-container');
function pageForward() {
    cardContainer.innerHTML = "";
    firstPage += 1;
    apiFetch();
}
function pageBack() {
    cardContainer.innerHTML = "";
    firstPage -= 1;
    apiFetch();
}



function plantCards(items) {

    items.forEach(item => {
        let image = document.createElement('img');
        let infoButton = document.createElement('button');
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <h2>${item.common_name || 'Unknown Plant'}</h2>`
        infoButton.textContent = `Add${item.common_name}`
        image.setAttribute('src', item.image_url);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('alt', `Picture of ${item.common_name}`);
        infoButton.setAttribute('class', 'open-modal');
        card.appendChild(image);
        card.appendChild(infoButton);
        const modal = document.createElement('dialog');
        modal.innerHTML = `
        <form method="dialog">
            <h2>${item.common_name}</h2>
            <button type="submit">close</button>
        </form>
        `;
        card.appendChild(modal);
        cardContainer.appendChild(card);
        card.querySelector('.open-modal').addEventListener('click', () => { modal.showModal(); })
    });
}

apiFetch();
