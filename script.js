const count = document.getElementById('cartCount');
const toast = document.getElementById('toast');
let cart = 0;
document.querySelectorAll('.add-button').forEach(button => {
  button.addEventListener('click', () => {
    cart += 1;
    count.textContent = cart;
    toast.textContent = `${button.dataset.item} added to your cart`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2200);
  });
});
document.getElementById('menuToggle').addEventListener('click', () => {
  const nav = document.querySelector('.desktop-nav');
  const open = nav.style.display === 'flex';
  nav.style.display = open ? '' : 'flex';
  nav.style.position = 'absolute'; nav.style.top = '76px'; nav.style.left = '0'; nav.style.right = '0';
  nav.style.background = 'var(--cream)'; nav.style.padding = '20px 5%'; nav.style.flexDirection = 'column'; nav.style.gap = '18px';
});
