if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark-mode")
} else {
    document.body.classList.add("light-mode")
}



const themechanger = document.getElementById("themechanger")
themechanger.addEventListener("click", ChangeTheme, {
    passive: true
})

function ChangeTheme() {
    const ClassList = document.body.classList

    if (ClassList.contains("light-mode")) {
        ClassList.remove("light-mode", "dark-mode")
        ClassList.add("dark-mode")
    } else {
        ClassList.remove("light-mode", "dark-mode")
        ClassList.add("light-mode")
    }
}

const carousel = document.getElementById("carousel")
let interval
if (carousel) {
    const prev = document.getElementById("prev")
    const next = document.getElementById("next")
    const carouselItems = carousel.querySelectorAll("ol li")
    let currentItem = 0
    prev.addEventListener("click", prevItem)
    next.addEventListener("click", nextItem)

    

    function carouselAutoplay() {
        interval = setInterval(nextItem, 4000)
    }

    carouselAutoplay()

    function prevItem() {
        clearInterval(interval)
        carouselAutoplay()
        currentItem -= 1
        if (currentItem < 0) currentItem = carouselItems.length - 1
        setActiveItem(true)
    }

    function nextItem() {
        clearInterval(interval)
        carouselAutoplay()
        currentItem += 1
        if (currentItem > carouselItems.length - 1) currentItem = 0
        setActiveItem()
    }

    function setActiveItem(left = false) {

        carouselItems[currentItem].classList.add(left ? "after-active" : "before-active")
        for (item of carouselItems) {
            item.classList.replace("active", left ? "before-active" : "after-active")
        }
        setTimeout(() => {
            carouselItems[currentItem].classList.replace(left ? "after-active" : "before-active", "active")
        }, 5)
        setTimeout(() => {
            for (item of carouselItems) {
                item.classList.remove(left ? "before-active" : "after-active")
            }
        }, 500)
    }
}
document.addEventListener('scroll', AfficheBouton, {
    passive: true
})
const bouton = document.getElementById("bouton")

function AfficheBouton() {
    if (carousel) clearInterval(interval)
    if (scrollY > 50) {
        bouton.classList.remove("inactif")
        bouton.classList.add("actif")
    }
    if (scrollY < 50) {
        if (carousel) carouselAutoplay()
        bouton.classList.remove("actif")
        bouton.classList.add("inactif")
    }
}