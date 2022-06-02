const hamburger = document.querySelector("#hamburger")
const mobileMenu = document.querySelector(".mobilemenu")

hamburger.addEventListener("click", ()=>{
    mobileMenu.classList.toggle("show")
    mobileMenu.classList.add("no-scroll")

    if (mobileMenu.classList.contains("show")) {
        hamburger.src = "images/icon-close.svg"
    }else{
        hamburger.src = "images/icon-hamburger.svg"
        mobileMenu.classList.remove("no-scroll")
    }
})