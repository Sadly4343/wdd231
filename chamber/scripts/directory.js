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

const url = 'https://raw.githubusercontent.com/Sadly4343/wdd231/refs/heads/main/chamber/data/members.json'
const cards = document.querySelector('#cards')

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.companies); // temporary testing of data response
    displayCompanies(data.companies);
}

getCompanyData();

const displayCompanies = (companies) => {
    companies.forEach((companie) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h8'); // fill in the blank
        let portrait = document.createElement('img');

        // Build the h2 content out to show the prophet's full name
        fullName.textContent = `${companie.name} totally`; // fill in the blank
        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', companie.imageurl);
        portrait.setAttribute('alt', `Portrait of ${companie.name} totally`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(fullName); //fill in the blank
        card.appendChild(portrait);

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}