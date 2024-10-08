const currentyear = document.querySelector("#currentyear");
const today = new Date()

currentyear.innerHTML = `@ <span
class="highlight">${today.getFullYear()}</span>`;

const date = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = date;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

const myTown = document.querySelector('#town');
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const lat = "47.7099";
const lon = "-117.0798";
const url = `https://api.openweathermap.org/data/2.5/`
const API_KEY = '7e24bd07a671401393a59148294ed723' //API KEY

async function getWeather() {
    try {
        const response = await fetch(`${url}weather?lat=${4.61}&lon=${-74.12}&units=metric&appid=${API_KEY}`)

        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            throw new Error(await response.json())
        }
    } catch (err) {
        console.error(err)
        return {}
    }
}
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data); // Call displayResults with the fetched data
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    console.log(data); // Display the fetched data
}

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

const urls = 'https://raw.githubusercontent.com/Sadly4343/wdd231/refs/heads/main/chamber/data/members.json'
const cards = document.querySelector('#cards')

async function getCompanyData() {
    const response = await fetch(urls);
    const data = await response.json();
    displayCompanies(data.companies);
}

getCompanyData();

function getRandomCompanies(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = companies[randomIndex]

    return item;
}
const result = getRandomCompanies(array);
console.log(result);

const displayCompanies = (companies) => {
    companies.forEach((companie) => {

        if (companie.membership != "1") {

            let card = document.createElement('section');
            let fullName = document.createElement('h8');
            let image = document.createElement('img');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let website = document.createElement('a');
            let membership = document.createElement('p');


            fullName.textContent = companie.name;
            address.textContent = companie.address;
            phone.textContent = companie.phone;
            website.textContent = companie.website;
            website.textContent = companie.membership
            website.setAttribute('href', companie.website)
            image.setAttribute('src', companie.image);
            image.setAttribute('alt', `images of ${companie.name} totally`);
            image.setAttribute('loading', 'lazy');
            image.setAttribute('width', '48');
            image.setAttribute('height', '48');


            card.appendChild(fullName);
            card.appendChild(image);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(website);
            card.appendChild(membership);

            cards.appendChild(card);
        }
    });
}