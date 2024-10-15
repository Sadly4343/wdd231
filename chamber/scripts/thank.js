
const currentUrl = window.location.href;
console.log(currentUrl)

const everything = currentUrl.split('?')
console.log(everything)

let formData = everything[1].split('&')
console.log(formData)

function show(end) {
    console.log(end)
    formData.forEach(element) => {
        console.log(element)
        if (element.startsWith(end)) {
            result = element
        }
    }
    return (result)
}
const showInfo = document.querySelector('#info')
showInfo.innerHTML = show("phone")

