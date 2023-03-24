if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark-mode")
}
else{
    document.body.classList.add("light-mode")
}

themechanger = document.getElementsById("themechanger")
themechanger.addEventListener("click", ChangeTheme, {
    passive: true
})

function ChangeTheme(){
    const ClassList = document.body.classList

    if (ClassList.contains("light-mode")){
        ClassList.remove("light-mode","dark-mode")
        ClassList.add("dark-mode")
    }
    else{
        ClassList.remove("light-mode","dark-mode")
        ClassList.add("light-mode")
    }
}