const shopProducts = document.querySelector(".shop-products");
const categoryButtons = document.querySelectorAll(".category-btn");

let allProducts = [];

function displayProducts(products){

    shopProducts.innerHTML = "";

    products.forEach(product => {

        shopProducts.innerHTML += `

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

}

fetch("https://fakestoreapi.com/products")

.then(response => response.json())

.then(products => {

    allProducts = products.filter(product =>

        product.category === "men's clothing" ||
        product.category === "women's clothing" ||
        product.category === "jewelery"

    );

    displayProducts(allProducts);

});

categoryButtons.forEach(button => {

    button.addEventListener("click", function(){

        document.querySelector(".category-btn.active")
        .classList.remove("active");

        this.classList.add("active");

        const category = this.dataset.category;

        if(category === "all"){

            displayProducts(allProducts);

        }else{

            const filteredProducts = allProducts.filter(product =>

                product.category === category

            );

            displayProducts(filteredProducts);

        }

    });

});

const searchInput = document.querySelector("#search");

searchInput.addEventListener("keyup", function () {

    const searchText = this.value.toLowerCase();

    const filteredProducts = allProducts.filter(product =>

        product.title.toLowerCase().includes(searchText)

    );

    displayProducts(filteredProducts);

});

const sortSelect = document.querySelector("#sort");

sortSelect.addEventListener("change", function () {

    let sortedProducts = [...allProducts];

    if (this.value === "low") {

        sortedProducts.sort((a, b) => a.price - b.price);

    } else if (this.value === "high") {

        sortedProducts.sort((a, b) => b.price - a.price);

    }

    displayProducts(sortedProducts);

});