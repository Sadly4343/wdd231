
const currentUrl = window.location.href;


const everything = currentUrl.split('?')


let formData = everything[1].split('&')

function show(cup) {
    console.log(cup)
    formData.forEach((element) => {
        if (element.startsWith(cup)) {
            result = element.split('=')[1].replace("%40", "@")
        }
    })
    return (result)
}
const showInfo = document.querySelector('#info')
showInfo.innerHTML = `
<p>Membership Details For ${show('fname')} ${show('lname')}</p>
<p>Confirmation Email ${show('email')}</p>
<p>Phone Number used ${show('phone')}</p>
<p>Organization title ${show('organtitle')}
<p>Organization name ${show('organ')}`
