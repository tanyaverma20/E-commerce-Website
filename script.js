const products = [
    { id: 1, name: "T-Shirt", price: 500 },
    { id: 2, name: "Shoes", price: 1500 },
    { id: 3, name: "Watch", price: 2500 }
  ];
  
  function showProducts() {
    const container = document.getElementById("product-list");
    if (!container) return;
  
    products.forEach(product => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      container.appendChild(div);
    });
  }
  
  function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = products.find(p => p.id === id);
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} added to cart!`);
  }
  
  function showCart() {
    const container = document.getElementById("cart-items");
    const total = document.getElementById("total");
    if (!container) return;
  
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalAmount = 0;
  
    cart.forEach(item => {
      const div = document.createElement("div");
      div.textContent = `${item.name} - ₹${item.price}`;
      container.appendChild(div);
      totalAmount += item.price;
    });
  
    total.textContent = `Total: ₹${totalAmount}`;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    showProducts();
    showCart();
  });
  