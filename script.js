// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


// Shop Now Button

const shopBtn = document.querySelector(".btn");

shopBtn.addEventListener("click", function () {

    console.log("Shop Button Clicked");

});


// Header Shadow on Scroll

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";

    } else {

        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    }

});

// Hero Slider

const hero = document.querySelector(".hero");

const heroImages = [

"https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1600",

"https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1600",

"https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600"

];

let currentImage = 0;

changeHeroImage();

setInterval(changeHeroImage,4000);

function changeHeroImage(){

    hero.style.backgroundImage = `url(${heroImages[currentImage]})`;

    const h3 = document.querySelector(".hero-content h3");
    const h1 = document.querySelector(".hero-content h1");
    const btn = document.querySelector(".btn");

    h3.style.animation = "none";
    h1.style.animation = "none";
    btn.style.animation = "none";

    setTimeout(() => {

        h3.style.animation = "fadeUp 1s ease forwards";
        h1.style.animation = "fadeUp 1s ease forwards";
        h1.style.animationDelay = ".5s";

        btn.style.animation = "fadeUp 1s ease forwards";
        btn.style.animationDelay = "1s";

    },100);

    currentImage++;

    if(currentImage===heroImages.length){

        currentImage=0;

    }

}

const prevSlide = document.querySelector(".prev-slide");
const nextSlide = document.querySelector(".next-slide");

// Featured Products API

const productContainer = document.querySelector(".product-container");

if (productContainer) {

    fetch("https://fakestoreapi.com/products")

    .then(response => response.json())

    .then(products => {

        const fashionProducts = products.filter(product =>

            product.category === "men's clothing" ||
            product.category === "women's clothing" ||
            product.category === "jewelery"

        );

        fashionProducts.slice(0, 8).forEach(product => {

            productContainer.innerHTML += `

            <div class="product-card">

                <div class="product-image">

                    <img src="${product.image}" alt="${product.title}">

                    <div class="wishlist">❤</div>

                    <button class="quick-view">
                        Quick View
                    </button>

                </div>

                <h3>${product.title}</h3>

                <p>$${product.price}</p>

                <button class="cart-btn">
                    Add To Cart
                </button>

            </div>

            `;

        });

    })

    .catch(error => console.log(error));

}
nextSlide.addEventListener("click", function(){

    changeHeroImage();

});

prevSlide.addEventListener("click", function(){

    currentImage--;

    if(currentImage < 0){

        currentImage = heroImages.length - 1;

    }

    hero.style.backgroundImage = `url(${heroImages[currentImage]})`;

});


// Cart

let cart = [];

const cartCount = document.querySelector(".cart-count");

document.addEventListener("click", function(event){

    if(event.target.classList.contains("cart-btn")){

        const product = {

            id: event.target.dataset.id,
            title: event.target.dataset.title,
            price: event.target.dataset.price,
            image: event.target.dataset.image

        };

        cart.push(product);

        cartCount.innerText = cart.length;

        console.log(cart);

        alert(product.title + " added to cart");

    }

});

const subscribeBtn = document.querySelector("#subscribe-btn");
const emailInput = document.querySelector("#email");

subscribeBtn.addEventListener("click", function(){

    if(emailInput.value === ""){

        alert("Please enter your email.");

    }else{

        alert("Thank you for subscribing!");

        emailInput.value = "";

    }

});

