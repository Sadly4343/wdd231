const currentyear = document.querySelector("#currentyear");
const today = new Date()

currentyear.innerHTML = `@ <span
class="highlight">${today.getFullYear()}</span>`;

const date = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = date;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');


const currentTemp = document.querySelector('#temperature');
const oneDay = document.querySelector('#one');
const twoDay = document.querySelector('#two');
const threeDay = document.querySelector('#three');
const weathers = document.querySelector('#description');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const lat = "47.7099"
const lon = "-117.0798"

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const weather = await response.json();
            displayResults(weather); // Call displayResults with the fetched data
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
async function apiForecast() {
    try {
        const response = await fetch(myForecast);
        if (response.ok) {
            const data2 = await response.json();
            displayResults2(data2); // Call displayResults with the fetched data
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weather) {
    console.log(weather)
    currentTemp.innerHTML = `${weather.main.temp}&deg;F`;
    weathers.innerHTML = weather.weather[0].description


}
const index = 8;
function displayResults2(data2) {
    oneDay.innerHTML = `${data2.list[0].main.temp}&deg;F`
    twoDay.innerHTML = `${data2.list[8].main.temp}&deg;F`
    threeDay.innerHTML = `${data2.list[16].main.temp}&deg;F`




}
apiFetch();
apiForecast();

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
companiesData = [];
async function getCompanyData() {
    const response = await fetch(urls);
    const data = await response.json();
    companiesData = data.companies;
    shuffle(companiesData);
    displayCompanies(data.companies);
}

getCompanyData();

function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
}

const displayCompanies = (companiesData) => {
    let cardCount = 0;
    companiesData.forEach((companie) => {

        if (companie.membership != "1" && cardCount < 3) {
            cardCount += 1

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
