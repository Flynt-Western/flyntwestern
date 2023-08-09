const cartButton = document.getElementById('cartButton');
const iconSpan = cartButton.querySelector('.icon');

const numberSpan = cartButton.querySelector('.nav-icon__cart-number');
const labelSpan = cartButton.querySelector('.nav-icon__cart-label');

if (!numberSpan.textContent.trim() && !labelSpan.textContent.trim()) {
    iconSpan.style.display = 'none';
}