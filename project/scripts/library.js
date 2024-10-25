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
const pageUrl = `https://trefle.io/api/v1/plants?token=uPa9xse-P3R35sGhnwy-H0MQr0J6IJQHIyO2ZG7OZeg&page=1`
const plantDetailUrl = `https://trefle.io/api/v1/plants/{id}/?token=uPa9xse-P3R35sGhnwy-H0MQr0J6IJQHIyO2ZG7OZeg`
const plantSearchURL = `https://trefle.io/api/v1/plants/search?token=YOUR_TREFLE_TOKEN&q={name}`

const names = document.querySelector('#name');
const image = document.querySelector('#img');

let firstPage = 1;

async function apiFetchPlants(url) {
    try {
        let items;
        //const myURL = `https://trefle.io/api/v1/plants?token=uPa9xse-P3R35sGhnwy-H0MQr0J6IJQHIyO2ZG7OZeg&page=${firstPage}`
        const response = await fetch(url);
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
    //return items;
}


async function apiFetchPlant(url) {
    let items = [];
    try {
        const response = await fetch(url);
        if (response.ok) {
            const dataArray = await response.json();
            items = dataArray.data;
            console.log(items);
            //plantCards(items);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
    return items;
}
async function apiFetchSearch(url) {
    let items = "";
    try {
        const response = await fetch(url);
        if (response.ok) {
            const dataArray = await response.json();
            items = dataArray.data;
            console.log(items);
            //plantCards(items);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
    return items;
}

let plantData = []
async function fetchDataPlants(url) {
    plantData = await apiFetchPlant(url);
    filterPlants(plantData);
}

function getPageUrl() {
    return `https://trefle.io/api/v1/plants?token=uPa9xse-P3R35sGhnwy-H0MQr0J6IJQHIyO2ZG7OZeg&page=${firstPage}`
}

const cardContainer = document.getElementById('card-container');
function pageForward() {
    cardContainer.innerHTML = "";
    firstPage += 1;
    apiFetchPlants(getPageUrl());
}
function pageBack() {
    cardContainer.innerHTML = "";
    firstPage -= 1;
    apiFetchPlants(getPageUrl());
}
function filterPlants(query) {
    const filterData = plantData.filter(item =>
        item.common_name && item.common_name.toLowerCase().includes(query.toLowerCase())
    );
    plantCards(filterData);
}

function storeItem(item) {
    localStorage.setItem('storedCard', JSON.stringify(item))
}

async function plantCards(items) {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';

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
        let url = plantDetailUrl.replace('{id}', item.id)
        let plantItem = item.id;
        (async () => {
            plantItem = await apiFetchPlant(url);
        })();
        infoButton.addEventListener('click', function () {
            let storedCards = JSON.parse(localStorage.getItem("storedCards")) || [];

            storedCards.push(plantItem);

            localStorage.setItem("storedCards", JSON.stringify(storedCards));
        });
        card.appendChild(modal);
        cardContainer.appendChild(card);
        card.querySelector('.open-modal').addEventListener('click', () => { modal.showModal(); })
    });
}
document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    filterPlants(query);

});
apiFetchPlants(getPageUrl());
