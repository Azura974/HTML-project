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
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const carouselItems = carousel.querySelectorAll("ol li")
let currentItem = 0

prev.addEventListener("click", prevItem)
next.addEventListener("click", nextItem)


function prevItem() {
    currentItem -= 1
    if (currentItem < 0) currentItem = carouselItems.length-1
    setActiveItem()
}

function nextItem() {
    currentItem += 1
    if (currentItem > carouselItems.length-1) currentItem = 0
    setActiveItem()
}

function setActiveItem() {
    for (item of carouselItems) {
        item.classList.remove("active")
    }
    carouselItems[currentItem].classList.add("active")
}
