const phone = document.getElementById("phone")
const email = document.getElementById("email")
const insta = document.getElementById("insta")


function phoneHandle() {
    document.querySelector("#phone > h1").classList.remove("hidden")


    phone.classList.remove("w-14")
    phone.classList.add("w-54")
}

function emailHandle() {
    document.querySelector("#email > h1").classList.remove("hidden")


    email.classList.remove("w-14")
    email.classList.add("w-80")
}

function instaHandle() {
    document.querySelector("#insta > h1").classList.remove("hidden")


    insta.classList.remove("w-14")
    insta.classList.add("w-48")
}