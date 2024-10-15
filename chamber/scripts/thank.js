
const currentUrl = window.location.href;
console.log(currentUrl)

const everything = currentUrl.split('?')
console.log(everything)

let formData = everything[1].split('&')
console.log(formData)