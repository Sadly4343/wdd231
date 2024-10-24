

(async () => {
    const targetUrl = 'https://trefle.io/api/v1/plants?token=uPa9xse-P3R35sGhnwy-H0MQr0J6IJQHIyO2ZG7OZeg&filter[id]=263319';
    //    const targetUrl = 'https://trefle.io/api/v1/plants?token=uPa9xse-P3R35sGhnwy-H0MQr0J6IJQHIyO2ZG7OZeg&filter[common_name]=beach%20strawberry';


    const response = await fetch(targetUrl);
    const json = await response.json();
    //const data = JSON.parse(json.contents); // Parse the contents of the response
    console.log(json);
})();

function searchPlantsByName() {
    async () => {
        const targetUrl = 'https://trefle.io/api/v1/plants/search?token=uPa9xse-P3R35sGhnwy-H0MQr0J6IJQHIyO2ZG7OZeg&q=coconut';
        //    const targetUrl = 'https://trefle.io/api/v1/plants?token=uPa9xse-P3R35sGhnwy-H0MQr0J6IJQHIyO2ZG7OZeg&filter[common_name]=beach%20strawberry';


        const response = await fetch(targetUrl);
        const json = await response.json();
        //const data = JSON.parse(json.contents); // Parse the contents of the response
        console.log(json);
    }
}
searchPlantsByName(name);
function searchPlantsByFilter(filter) { }

function invokeServer(url) {
    async () => {
        const targetUrl = 'https://trefle.io/api/v1/plants?token=uPa9xse-P3R35sGhnwy-H0MQr0J6IJQHIyO2ZG7OZeg&filter[id]=263319';
        //    const targetUrl = 'https://trefle.io/api/v1/plants?token=uPa9xse-P3R35sGhnwy-H0MQr0J6IJQHIyO2ZG7OZeg&filter[common_name]=beach%20strawberry';


        const response = await fetch(targetUrl);
        const json = await response.json();
        //const data = JSON.parse(json.contents); // Parse the contents of the response
        console.log(json);
    }
}

function getPlantById(id) { }
/*
async () => {
    const targetUrl = 'https://trefle.io/api/v1/plants?token=uPa9xse-P3R35sGhnwy-H0MQr0J6IJQHIyO2ZG7OZeg&filter[id]=263319';


    const response = await fetch(targetUrl);
    const json = await response.json();
    //const data = JSON.parse(json.contents); // Parse the contents of the response
    console.log(json);
}
    */