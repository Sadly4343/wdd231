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
const arrayMemberDetails = [
    {
        "cost": "Free",
        "benefits": "Free Newsletter and the chance for winning the sweepstakes each month."
    },
    {
        "cost": "1000$",
        "benefits": "Free Newsletter and the chance for winning the sweepstakes each month, invitation to weekly meetings."
    },
    {
        "cost": "1500",
        "benefits": "Free Newsletter and the chance for winning the sweepstakes each month, invitation to weekly meetings, improved advertisement."
    },
    {
        "cost": "30000",
        "benefits": "Free Newsletter and the chance for winning the sweepstakes each month, invitation to weekly meetings, improved advertisement and home page placement."
    }
];

const url = 'https://raw.githubusercontent.com/Sadly4343/wdd231/refs/heads/main/chamber/data/membership.json'
const cards = document.querySelector('#cards');
const memberDetails = document.getElementById('memberDetails');

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.companies); // temporary testing of data response
    displayMembership(data.memberships);
}

getCompanyData();

function displayMemberDetails(arrayMemberDetail) {
    memberDetails.innerHTML = '';
    memberDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${arrayMemberDetail.cost}</h2>
    <h3>${arrayMemberDetail.benefits}</h3>`;

    memberDetails.showModal();
    const closeModal = document.getElementById('closeModal');
    closeModal.addEventListener("click", () => {
        memberDetails.close();
    });
}

const displayMembership = (memberships) => {
    memberships.forEach((membership, index) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); // fill in the blank
        let infobutton = document.createElement('button');

        fullName.textContent = membership.name;
        infobutton.textContent = 'Learn More';
        // Append the section(card) with the created elements
        card.appendChild(fullName);
        card.appendChild(infobutton); //fill in the blank
        infobutton.addEventListener('click', () => {
            displayMemberDetails(arrayMemberDetails[index]);
        });

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}
