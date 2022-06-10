const hamburger = document.querySelector("#hamburger")
const mobileMenu = document.querySelector(".mobilemenu")
const slideCards = document.querySelectorAll(".card")

 const sliderIndicatorParent = document.querySelector("#slideIndicator"),
    sliderIndicator = sliderIndicatorParent.querySelectorAll("span")

//     one = document.querySelector("#one"),
//     two = document.querySelector("#two"),
//     three = document.querySelector("#three"),
//     four = document.querySelector("#four")



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

    sliderIndicator.forEach(slider => {
        slider.style.backgroundColor = "white"
    })
    if (slideIndex === 0) {
        one.style.backgroundColor = "hsl(12, 88%, 59%)"
    }
    if (slideIndex === 1) {
        two.style.backgroundColor = "hsl(12, 88%, 59%)"
    }
    if (slideIndex === 2) {
        three.style.backgroundColor = "hsl(12, 88%, 59%)"
    }
    if (slideIndex === 3) {
        four.style.backgroundColor = "hsl(12, 88%, 59%)"
    }

}
setInterval(() => slideTestimonial(), 3000);

slideTestimonial()