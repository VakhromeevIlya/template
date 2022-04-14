// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
import { getHash } from "./functions.js";
// import { formsModules } from "./forms/forms.js";
let block = document.querySelector(".menu__item");
document.addEventListener("click", documentActions);
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
	if (targetElement.id === "reviews-set-item") {
		const parent = targetElement.closest(".product-reviews__grid");
		parent.querySelector("#back-to-reviews").classList.toggle("_active");
		parent.classList.toggle("_show-form");
	}
	if (targetElement.id === "back-to-reviews") {
		const parent = targetElement.closest(".product-reviews__grid");
		targetElement.classList.remove("_active");
		parent.classList.remove("_show-form");
	}
	if(targetElement.parentElement.classList.contains('product-reviews-bottom-front__like-or-dislike')) {
		const parent = targetElement.parentElement;
		const buttons = parent.querySelectorAll('button');
		if(buttons.length) {
			if(targetElement === parent.querySelector('button._active')) targetElement.classList.toggle('_active');
			else {
				buttons.forEach(button => {
					button.classList.remove('_active');
				});
				targetElement.classList.add('_active');
			}
		}
	}
}
