let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let count = document.getElementById("amount");
let cartPriceElement = document.querySelector(".pricee p");
let amount = 0;
let pricePerItem = 125.00;
let shoppingcarticon = document.querySelector(".shoppingcarticon");
let shoppingcart = document.querySelector(".shoppingcart");
let emptycart = document.querySelector(".shoppingcartempty");

function updateDisplaycount() {
    count.textContent = amount;
}

function updateDisplay() {
    count.textContent = amount;
    updateTotalPrice();
    // Display or hide cart based on the amount
    if (amount === 0) {
        shoppingcart.style.display = 'none';
    } else {
        shoppingcart.style.display = 'flex';
    }
}

function updateTotalPrice() {
    let totalPrice = amount * pricePerItem;
    cartPriceElement.innerHTML = `$${pricePerItem} * ${amount} <span id="bold"> $${totalPrice.toFixed(2)}</span>`;
}

plus.addEventListener("click", function() {
    amount++;
    updateDisplaycount();
});

minus.addEventListener("click", function() {
    amount = Math.max(amount - 1, 0);
    updateDisplaycount();
});

// Initialize the display based on the initial amount
updateDisplay();

shoppingcarticon.addEventListener("click", function() {
    if (shoppingcart.style.display === 'none' || shoppingcart.style.display === '') {
        shoppingcart.style.display = 'flex';
    } else {
        shoppingcart.style.display = 'none';
        emptycart.style.display = 'none';
    }
});
