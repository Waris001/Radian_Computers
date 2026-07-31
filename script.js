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

const viewButtons = document.querySelectorAll(".view-btns button");

viewButtons.forEach(button => {

    button.addEventListener("click", () => {

        viewButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

    });

});

const searchInput = document.getElementById("searchInput");

const categoryFilter = document.getElementById("categoryFilter");

const sortProducts = document.getElementById("sortProducts");

const productContainer = document.getElementById("productContainer");

const products = [...document.querySelectorAll(".product-item")];

const noProduct = document.getElementById("noProduct");



function filterProducts(){

    const keyword = searchInput.value.toLowerCase();

    const category = categoryFilter.value;

    let visible = 0;

    products.forEach(product=>{

        const name = product.dataset.name.toLowerCase();

        const brand = product.dataset.brand.toLowerCase();

        const cat = product.dataset.category;

        const searchMatch =

            name.includes(keyword) ||

            brand.includes(keyword) ||

            cat.toLowerCase().includes(keyword);

        const categoryMatch =

            category==="all" ||

            cat===category;

        if(searchMatch && categoryMatch){

            product.style.display="block";

            visible++;

        }else{

            product.style.display="none";

        }

    });

    noProduct.classList.toggle("d-none",visible>0);

}



searchInput.addEventListener("keyup",filterProducts);

categoryFilter.addEventListener("change",filterProducts);



sortProducts.addEventListener("change",()=>{

    const cards=[...products];

    cards.sort((a,b)=>{

        const first=a.dataset.name;

        const second=b.dataset.name;

        if(sortProducts.value==="az"){

            return first.localeCompare(second);

        }

        if(sortProducts.value==="za"){

            return second.localeCompare(first);

        }

        return 0;

    });

    cards.forEach(card=>productContainer.appendChild(card));

});



document.getElementById("gridView")

.addEventListener("click",()=>{

    productContainer.classList.remove("list-view");

    document.getElementById("gridView").classList.add("active");

    document.getElementById("listView").classList.remove("active");

});



document.getElementById("listView")

.addEventListener("click",()=>{

    productContainer.classList.add("list-view");

    document.getElementById("listView").classList.add("active");

    document.getElementById("gridView").classList.remove("active");

});