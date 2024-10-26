const currentyear = document.querySelector("#currentyear");
const today = new Date()

function getDate() {
    const timestamps = document.getElementById('timestamp');
    const timestamp = new Date();
    timestamps.value = timestamp;


}
const urls = 'https://raw.githubusercontent.com/Sadly4343/wdd231/refs/heads/main/project/data/plants.json'
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

        if (companie.membership != "1" && cardCount < 2) {
            cardCount += 1

            let card = document.createElement('section');
            let fullName = document.createElement('h8');
            let image = document.createElement('img');
            let description = document.createElement('p');
            let careTips = document.createElement('p');


            fullName.textContent = companie.name;
            description.textContent = companie.description;
            careTips.textContent = companie.caretips;
            image.setAttribute('src', companie.image);
            image.setAttribute('alt', `images of ${companie.name} totally`);
            image.setAttribute('loading', 'lazy');


            card.appendChild(fullName);
            card.appendChild(description);
            card.appendChild(careTips);
            cards.appendChild(image);
            cards.appendChild(card);
        }
    });
}

document.querySelector('form').addEventListener('submit', getDate);

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

const memberForm = document.getElementById('memberForm');

const callAction = document.getElementById('call-action');

const closeAction = document.querySelector('#closeBtn');

callAction.addEventListener("click", () => {
    memberForm.showModal();
})
closeAction.addEventListener("click", () => {
    memberForm.close();
})

const adviceBtn = document.getElementById('advice');

const libraryBtn = document.getElementById('library');

const guideBtn = document.getElementById('guide');

adviceBtn.addEventListener("click", () => {
    window.location.href = 'care.html';
})
libraryBtn.addEventListener("click", () => {
    window.location.href = 'library.html';
})
guideBtn.addEventListener("click", () => {
    window.location.href = 'care.html';
})