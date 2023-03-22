if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark-mode")
}
else{
    document.body.classList.add("light-mode")
}
function ChangeTheme(){
    if (document.body.classList.contains("light-mode")){
        document.body.classList.remove("light-mode","dark-mode")
        document.body.classList.add("dark-mode")
    }
    else{
        document.body.classList.remove("light-mode","dark-mode")
        document.body.classList.add("light-mode")
    }
}