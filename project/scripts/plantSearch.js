
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
