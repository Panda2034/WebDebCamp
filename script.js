
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    for(let i=0;i<slides.length;i++){
        slides[i].computedStyleMap.display = "none";
    
    }

    slideIndex++;

    if(slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex-1].Style.display = "block";
    setTimeout(showSlides, 2000);

}
showSlides();