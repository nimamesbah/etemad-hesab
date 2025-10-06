const phone = document.getElementById("phone")
const email = document.getElementById("email")
const insta = document.getElementById("insta")
const hamburger = document.getElementById("hamburger")
const menuHam = document.getElementById("menuHam")
const contacts = document.getElementById("contacts")
const loading = document.getElementById("loading")
const firstText = document.getElementById("firstText")




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
        top: contacts.offsetTop - 300
    })
    contacts.classList.add("animate-pulse")
    setTimeout(() => contacts.classList.remove("animate-pulse"), 4000)
}

function loadingHandle() {
    // debugger
    if (location.pathname === "/index.html" || location.pathname === "/etemad_hesab/index.html") {

        setTimeout(() => {
            loading.classList.remove("opacity-100")
            loading.classList.add("opacity-0")
        }, 2000)
        setTimeout(() => {
            loading.classList.remove("flex")
            loading.classList.add("hidden")
            document.body.style.overflow = ''
            enableScroll()

        }, 2300)
        setTimeout(() => {
            firstText.classList.remove("brightness-0")
            contacts.classList.remove("brightness-0")
        }, 2300)
    } else
        setTimeout(() => otherPage(), 100)

}

function boxHandle() {
    const dives = document.querySelectorAll("#boxes > div")
    if (window.screen.width < 800) {

        for (const div of dives) {
            if (window.scrollY > div.offsetTop - 200 && window.scrollY < div.offsetTop + 200) {
                if (div.classList.contains("max-800:translate-x-[500px]"))
                    div.classList.remove("max-800:translate-x-[500px]")
                else
                    div.classList.remove("max-800:translate-x-[-500px]")

            }


        }
    }


}

function otherPage() {
    enableScroll()
    document.body.style.overflow = "visible"

}

loadingHandle()

disableScroll()
document.body.style.overflow = "hidden"

window.addEventListener("scroll", scrollFunc)
window.addEventListener("scroll", boxHandle)
console.log("loc", location.pathname)

function disableScroll() {
    document.addEventListener('touchmove', preventDefault, {
        passive: false
    });
}

function enableScroll() {
    document.removeEventListener('touchmove', preventDefault);
}

function preventDefault(e) {
    e.preventDefault();
}