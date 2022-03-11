// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
import { getHash,isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";
let block = document.querySelector(".menu__item");
//document.addEventListener("click", documentActions);
if (getHash()) {
	const nav = getHash();
	const link = document.querySelector(`a[href="${nav}"]`);
	if (link) {
		window.addEventListener("load", function () {
			link.click();
		});
	}
}
function _removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
}
function createSlides() {
	const sliders = document.querySelectorAll('.slider');
	if(sliders.length > 0) {
		sliders.forEach((slider,i) => {
			const images = document.createElement('div');
			let   slides = [];
			let inputs = [];
			let labels = [];
			const links = slider.dataset.slider.replace(/\s{2,}/g, '').split(';',5);
			links.forEach(link => {
				slides.push(link);
			});
			slides.forEach((slide,index) => {
				const input = document.createElement('input');
				input.type = 'radio';
				input.name = `radio-btn-${i + 1}`;
				input.id = `radio${index + 1}-${i+1}`;
				inputs.push(input);
				const label = document.createElement('label');
				label.setAttribute('for',`radio${index + 1}-${i+1}`);
				label.classList.add('navigation-btn');
				labels.push(label);
			});
			inputs.forEach(input => {
				slider.append(input);
			})
			labels.forEach(label => {
				slider.append(label);
			})
			
			images.classList.add('imgs_slides');
		})
	}
}
if(1) {
	document.addEventListener('mouseover', (e) => {
		const target = e.target;
		if(target.classList.contains('card-preview-slider__item')) {
			const span = target.querySelector('span');
			const href = span.dataset.href ? span.dataset.href : 'https://mavery.ru/';
			const images = target.closest('.card-preview-slider').querySelectorAll('img');
			images.forEach((img,i) => {
				img.classList.remove('_active');
			})
			target.closest('.card-preview-slider').querySelector(href).classList.add('_active');
		} else if(target.closest('.card-preview-slider__item')) {
			const href = target.dataset.href ? target.dataset.href : 'https://mavery.ru/';
			const images = target.closest('.card-preview-slider').querySelectorAll('img');
			images.forEach(img => {
				img.classList.remove('_active');
			})
			target.closest('.card-preview-slider').querySelector(href).classList.add('_active');
		} 
	});
	const cards = document.querySelectorAll('.card-preview-slider');
	if(cards.length > 0) {
		cards.forEach(card => {
			card.addEventListener('mouseleave',(e) => {
				const images = card.querySelectorAll('img');
				images.forEach(img => {
					img.classList.remove('_active');
				});
				card.querySelector('img:nth-of-type(1)').classList.add('_active');
			})
		})
	}
}
document.addEventListener('click', (e) => {
	const targetElement = e.target;	
	if(targetElement.matches('[id^="card-preview-slide"]') || targetElement.matches('.card-preview-slider__item')) {
		const parent = targetElement.closest('.card-preview-slider');
		window.location.href = parent.dataset.href;
	}
});
if(isMobile.any()) {
	const cards = document.querySelectorAll('.card-preview-slider');
	if(cards.length > 0) {
		cards.forEach(card => {
			const hammertime = new Hammer(card);
			const rowSlider = card.querySelector('.card-preview-slider__row');
			const images = Array.from(card.querySelectorAll('img'));
			const dots = Array.from(card.querySelectorAll('.card-preview-slider__dots span'));
			let activeIndex = 0;
			rowSlider.addEventListener('transitionend', () => {
				if(activeIndex == images.length - 2) {
					rowSlider.classList.add('no-transition');
					rowSlider.style.transform = `translate3d(0%,0,0)`;
					images[0].classList.add('_active');
					images[images.length - 1].classList.remove('_active');
					setTimeout(function() {
						rowSlider.classList.remove('no-transition');
					},800);
				}
			})
			hammertime.on('swiperight', function(ev) {	
				images.some((img,i) => {	
					if(img.classList.contains('_active')) {
						activeIndex = i;
						if(i > 0) {
							img.classList.remove('_active');
							img.previousElementSibling.classList.add('_active');
						}
						if(i == 0 ) {
							img.classList.remove('_active');
							card.querySelector('img:nth-last-of-type(1)').classList.add('_active');
							return true;
						}
					}	
				});
				if(activeIndex == 0) {
					rowSlider.style.transform = `translate3d(-${(images.length - 1) * 100}%,0,0)`;
				} else {
					rowSlider.style.transform = `translate3d(-${(activeIndex - 1) * 100}%,0,0)`;
				}
				dots.some((item,i,arr) => {
					if(item.classList.contains('_active')) {
						if(i == 0) {
							item.classList.remove('_active');
							arr[2].classList.add('_active');
							return true;
						}
						if(i == 1) {
							item.classList.remove('_active');
							arr[0].classList.add('_active');
							return true;
						}
						if(i == 2) {
							item.classList.remove('_active');
							arr[1].classList.add('_active');
							return true;
						}
					}
				});
			});
			hammertime.on('swipeleft', function(ev) {
				Array.from(images).some((img,i,arr) => {
					if(img.classList.contains('_active')) {
						activeIndex = i;
						if(i + 1 != arr.length) {
							img.classList.remove('_active');
							img.nextElementSibling.classList.add('_active');
							return true;
						}
						if(i + 1 == arr.length) {
							img.classList.remove('_active');
							card.querySelector('img').classList.add('_active');
						}
					}
				});
				if(activeIndex + 1 == images.length) {
					rowSlider.style.transform = `translate3d(0%,0,0)`;
				} else {
					rowSlider.style.transform = `translate3d(-${(activeIndex + 1) * 100}%,0,0)`;
				}
				dots.some((item,i,arr) => {
					if(item.classList.contains('_active')) {
						if(i == 0) {
							item.classList.remove('_active');
							arr[1].classList.add('_active');
							return true;
						}
						if(i == 1) {
							item.classList.remove('_active');
							arr[2].classList.add('_active');
							return true;
						}
						if(i == 2) {
							item.classList.remove('_active');
							arr[0].classList.add('_active');
							return true;
						}
					}
				});
			});
		})
	}
}
//createSlides();
function documentActions(e) {
	let targetElement = e.target;
	let targetPrevItem = targetElement.parentElement;
	let blockOk = document.querySelectorAll(".menu__item._ok");

	if (targetElement.classList.contains("_icon-arrow-down")) {
		targetPrevItem.classList.toggle("_ok");
	}

	if (blockOk.length > 1) {
		_removeClasses(blockOk, "_ok");
	}

	if (!targetElement.closest(".menu__item") && blockOk.length > 0) {
		_removeClasses(blockOk, "_ok");
	}

	if (targetElement.classList.contains("_icon-search")) {
		document
			.querySelector(".header__form")
			.classList.toggle("_search-active");
	} else if (
		!targetElement.closest(".header__form") &&
		document.querySelector(".header__form._search-active")
	) {
		document
			.querySelector(".header__form")
			.classList.remove("_search-active");
	}
	if(targetElement.matches('[id^="card-preview-slide"]') || targetElement.matches('.card-preview-slider__item')) {
		const parent = targetElement.closest('.card-preview-slider');
		window.location.href = parent.dataset.href;
	}
}
