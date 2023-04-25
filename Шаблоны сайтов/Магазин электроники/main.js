/* Код для корзины товаров */
let cartItems = [];

// Функция для добавления товара в корзину
function addToCart(item) {
cartItems.push(item);
updateCart();
}

// Функция для обновления корзины на странице
function updateCart() {
const cart = document.getElementById('cart');
cart.innerHTML = '';
if (cartItems.length > 0) {
cartItems.forEach(item => {
const cartItem = document.createElement('li');
cartItem.textContent = item.name;
cart.appendChild(cartItem);
});
} else {
const emptyCart = document.createElement('p');
emptyCart.textContent = 'Корзина пуста';
cart.appendChild(emptyCart);
}
}

// Обработчик нажатия на кнопку "В корзину"
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
button.addEventListener('click', () => {
const itemName = button.getAttribute('data-name');
addToCart({ name: itemName });
});
});

// Функция для отправки формы обратной связи
function submitForm() {
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;
// Здесь можно добавить код для отправки данных на сервер
alert(Сообщение отправлено:\nИмя: ${name}\nEmail: ${email}\nСообщение: ${message});
document.getElementById('name').value = '';
document.getElementById('email').value = '';
document.getElementById('message').value = '';
}

// Обработчик отправки формы обратной связи
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', event => {
event.preventDefault();
submitForm();
});

// Функция для отображения и скрытия меню на мобильных устройствах
function toggleMobileMenu() {
const mobileMenu = document.getElementById('mobile-menu');
mobileMenu.classList.toggle('d-none');
}

// Обработчик нажатия на кнопку меню на мобильных устройствах
const mobileMenuButton = document.getElementById('mobile-menu-button');
mobileMenuButton.addEventListener('click', toggleMobileMenu);
// Функция для скролла до элемента на странице
function scrollTo(element) {
window.scroll({
behavior: 'smooth',
left: 0,
top: element.offsetTop
});
}

// Обработчики нажатия на ссылки в меню
const navbarLinks = document.querySelectorAll('.navbar-nav a');
navbarLinks.forEach(link => {
link.addEventListener('click', event => {
event.preventDefault();
const targetElement = document.querySelector(link.getAttribute('href'));
scrollTo(targetElement);
if (mobileMenuButton.offsetParent !== null) {
toggleMobileMenu();
}
});
});

// Функция для отображения анимации при прокрутке страницы
function animateOnScroll() {
const animationElements = document.querySelectorAll('.animation');
animationElements.forEach(element => {
const elementPosition = element.getBoundingClientRect().top + window.scrollY;
const scrollPosition = window.pageYOffset + window.innerHeight;
if (scrollPosition > elementPosition) {
element.classList.add('animate__animated', 'animate__fadeInUp');
}
});
}

// Обработчик прокрутки страницы для отображения анимации
window.addEventListener('scroll', animateOnScroll);
animateOnScroll();