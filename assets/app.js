const phone = document.getElementById("phone")
const email = document.getElementById("email")
const insta = document.getElementById("insta")
const hamburger = document.getElementById("hamburger")
const menuHam = document.getElementById("menuHam")
const contacts = document.getElementById("contacts")


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

function hamburgerHandle() {
    menuHam.classList.toggle("h-0")
    menuHam.classList.toggle("h-12")
    menuHam.classList.toggle("py-3")
    hamburger.classList.toggle("rotate-90")
    hamburger.classList.toggle("animate-pulse")
}

function scrollFunc() {
    if (menuHam.classList.contains("h-12")) {
        menuHam.classList.add("h-0")
        menuHam.classList.remove("h-12", "py-3")
        hamburger.classList.remove("rotate-90", "animate-pulse")
    }
}

function goToContacts() {
    window.scrollTo({
        top: contacts.offsetTop - 200
    })
    contacts.classList.add("animate-pulse")
    setTimeout(() => contacts.classList.remove("animate-pulse"), 4000)
}
window.addEventListener("scroll", scrollFunc)