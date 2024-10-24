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
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <h3>${item.common_name || 'Unknown Plant'}</h3>
        `;
        image.setAttribute('src', item.image_url);
        image.setAttribute('loading', 'lazy');
        card.appendChild(image);
        cardContainer.appendChild(card);
    });
}
async function searchPlantsByName() {

    const targetUrl = 'https://trefle.io/api/v1/plants?token=uPa9xse-P3R35sGhnwy-H0MQr0J6IJQHIyO2ZG7OZeg&filter[common_name]=beach%20strawberry';


    const response = await fetch(targetUrl);
    const json = await response.json();
    //const data = JSON.parse(json.contents); // Parse the contents of the response
    console.log(json);
}

apiFetch();
searchPlantsByName();
