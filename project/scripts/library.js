
const myKey = "uPa9xse-P3R35sGhnwy-H0MQr0J6IJQHIyO2ZG7OZeg";
const myURL = `https://trefle.io/api/v1/plants?token=uPa9xse-P3R35sGhnwy-H0MQr0J6IJQHIyO2ZG7OZeg&filter[common_name]=beach%20strawberry`

const names = document.querySelector('#name');
const image = document.querySelector('#img');

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
function displayResults(data) {
    names.innerHTML = `${data.data[0].common_name}`
    const imgElement = data.data[0].image_url;
    document.getElementById('img').src = imgElement;
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
