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



const url = 'https://raw.githubusercontent.com/Sadly4343/wdd231/refs/heads/main/chamber/data/images.json'
const cards = document.querySelector('#cards')

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.images);
}

getCompanyData();

const displayCompanies = (images) => {
    images.forEach((image) => {

        let card = document.createElement('figure');
        let fullName = document.createElement('figcaption');
        let imageURL = document.createElement("img");

        fullName.textContent = image.name;
        imageURL.setAttribute('src', image.url);
        imageURL.setAttribute('alt', `images of ${image.name} totally`);
        imageURL.setAttribute('loading', 'lazy');


        card.appendChild(fullName);
        card.appendChild(imageURL);

        cardss.appendChild(card);
    });
}

time_check();
function time_check() {
    const timeShow = document.getElementById('yes')
    let timestored = localStorage.getItem('timestamp');


    if (!timestored) {
        timestored = Date.now();
        localStorage.setItem('timestamp', timestored);
        timeShow.innerHTML = "First Visit!"
    }
    else {
        timeShow.innerHTML = "Not first visit!"
    }
}
