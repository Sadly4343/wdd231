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

const url = 'https://raw.githubusercontent.com/Sadly4343/wdd231/refs/heads/main/chamber/data/members.json'
const cards = document.querySelector('#cards')

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.companies);
}

getCompanyData();

const displayCompanies = (companies) => {
    companies.forEach((companie) => {

        if (companie.membership != "1") {

            let card = document.createElement('section');
            let fullName = document.createElement('h8');
            let image = document.createElement('img');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let website = document.createElement('a');


            fullName.textContent = companie.name;
            address.textContent = companie.address;
            phone.textContent = companie.phone;
            website.textContent = companie.website;
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

            cards.appendChild(card);
        }
    });


}