const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`https://fakestoreapi.com/products/${id}`)
.then(response => response.json())
.then(product => {

document.getElementById("product-details").innerHTML = `
    <div class="detail-card">
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <h3>$${product.price}</h3>
        <p><strong>Category:</strong> ${product.category}</p>
        <p>${product.description}</p>
    </div>
`;

});