const currentyear = document.querySelector("#currentyear");
const today = new Date()

function getDate() {
    const timestamps = document.getElementById('timestamp');
    const timestamp = new Date();
    timestamps.value = timestamp;


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