
const currentUrl = window.location.href;
console.log(currentUrl)

const everything = currentUrl.split('?')
console.log(everything)

let formData = everything[1].split('&')
console.log(formData)

const showInfo = document.querySelector('#info')
showInfo.innerHTML = formData[0] + formData[1]