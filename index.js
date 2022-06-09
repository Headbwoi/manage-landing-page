const hamburger = document.querySelector("#hamburger")
const mobileMenu = document.querySelector(".mobilemenu")
const slideCards = document.querySelectorAll(".card")


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

//slider

let slideIndex = 0

const slideTestimonial = () => {
    
    if(window.screen.width > 768){
        return
    }
    slideIndex++

    if(slideIndex > slideCards.length - 1){
        slideIndex = 0
    }
    slideCards.forEach((slide) => {
        slide.classList.add("hidden")
    })
    slideCards[slideIndex].classList.remove("hidden")

}
setInterval(() => slideTestimonial(), 1000);

slideTestimonial()