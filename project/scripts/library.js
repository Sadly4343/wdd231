
const myKey = "uPa9xse-P3R35sGhnwy-H0MQr0J6IJQHIyO2ZG7OZeg";
const myURL = `https://trefle.io/api/v1/plants?token=uPa9xse-P3R35sGhnwy-H0MQr0J6IJQHIyO2ZG7OZeg`

const names = document.querySelector('#name');
const image = document.querySelector('#img');

async function apiFetch() {
    try {
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
function plantCards(items) {

    if (!Array.isArray(items)) {
        console.error("expected an array but got:", items);
        return;
    }

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
