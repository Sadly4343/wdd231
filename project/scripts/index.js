(async () => {
    const targetUrl = 'https://trefle.io/api/v1/plants?token=&filter[common_name]=beach%20strawberry';
    const requestOptions = {
        method: 'GET',
        mode: 'no-cors'
    };

    const response = await fetch(targetUrl);
    const json = await response.json();
    const data = JSON.parse(json.contents); // Parse the contents of the response
    console.log(data);
})();
