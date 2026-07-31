const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 200) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", function(e){

    e.preventDefault();

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});