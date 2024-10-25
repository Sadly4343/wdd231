function getPageUrl() {
    return `https://trefle.io/api/v1/plants?token=uPa9xse-P3R35sGhnwy-H0MQr0J6IJQHIyO2ZG7OZeg&page=${firstPage}`
}

async function apiFetchPlant(url) {
    let items = "";
    try {
        const response = await fetch(url);
        if (response.ok) {
            const dataArray = await response.json();
            items = dataArray.data;
            console.log(items);
            //plantCards(items);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
    return items;
}