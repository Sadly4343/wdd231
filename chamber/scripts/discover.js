const currentyear = document.querySelector("#currentyear");
const today = new Date()

currentyear.innerHTML = `@ <span
class="highlight">${today.getFullYear()}</span>`;

const date = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = date;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu')



const url = 'https://raw.githubusercontent.com/Sadly4343/wdd231/refs/heads/main/chamber/data/images.json'
const cards = document.querySelector('#cards')

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.companies); // temporary testing of data response
    displayCompanies(data.companies);
}

getCompanyData();

const displayCompanies = (images) => {
    images.forEach((image) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');

        fullName.textContent = image.name;
        image.setAttribute('src', image.url);
        image.setAttribute('alt', `images of ${image.name} totally`); // fill in the blank
        image.setAttribute('loading', 'lazy');

        // Append the section(card) with the created elements
        card.appendChild(fullName); //fill in the blank
        card.appendChild(image);

        cardss.appendChild(card);
    }); // end of arrow function and forEach loop
}