/* ----- DOM refs ----- */
const cartBtn = document.querySelector('#cartShop');
const cartSidebar = document.querySelector('.cart-sidebar');
const closeCartBtn = document.getElementById('closeCart');

// cart toggles
cartBtn.addEventListener('click', () => {
  if (!cartSidebar.classList.contains('open')) {
    cartSidebar.classList.add('open');
  } else {
    cartSidebar.classList.remove('open')
  }
});

closeCartBtn.addEventListener('click', () => toggleCart(false));
/* ----- Cart UI helpers ----- */
function toggleCart(open) {
  if (open) cartSidebar.classList.add('open'), cartSidebar.setAttribute('aria-hidden', 'false');
  else cartSidebar.classList.remove('open'), cartSidebar.setAttribute('aria-hidden', 'true');
}

