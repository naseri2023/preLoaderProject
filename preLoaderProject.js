let preLoader = document.getElementById("preloader")
let content = document.getElementById("content")

window.addEventListener("load",function () {
    preLoader.classList.remove("spinner")
    preLoader.classList.add("hide-preloader")
    content.style.display = "block"
})

