
let btnOpen = document.querySelector('._btn-open');
let btnClose = document.querySelector('._btn-close');
let btnOpenMobile = document.querySelector('._btn-open-mobile');
let btnCloseMobile = document.querySelector('._btn-close-mobile');
let openCart = document.querySelector('.body-content');
let openCartMobile = document.querySelector('.content-body-mobile');



btnOpen.addEventListener("click", function (e) {
	openCart.classList.add('_active');
	openCartMobile.classList.add('_active');
});

btnClose.addEventListener("click", function (e) {
	openCart.classList.remove('_active');
	openCartMobile.classList.remove('_active');
});


btnOpenMobile.addEventListener("click", function (e) {
	openCart.classList.add('_active');
	openCartMobile.classList.add('_active');
});

btnCloseMobile.addEventListener("click", function (e) {
	openCart.classList.remove('_active');
	openCartMobile.classList.remove('_active');
});

