// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
 import { getHash } from "./functions.js";
// import { formsModules } from "./forms/forms.js";
let block = document.querySelector('.menu__item');
document.addEventListener('click', documentActions);
if (getHash()) {
	const nav = getHash();
	const link = document.querySelector(`a[href="${nav}"]`);
	if (link) {
		window.addEventListener('load', function () {
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
	let blockOk = document.querySelectorAll('.menu__item._ok');

	if (targetElement.classList.contains('_icon-arrow-down')) {
		targetPrevItem.classList.toggle('_ok');
	}

	if (blockOk.length > 1) {
		_removeClasses(blockOk, "_ok");
	}

	if (!targetElement.closest('.menu__item') && blockOk.length > 0) {
		_removeClasses(blockOk, "_ok");
	}


	if (targetElement.classList.contains('_icon-search')) {
		document.querySelector('.header__form').classList.toggle('_search-active');
	} else if (!targetElement.closest('.header__form') && document.querySelector('.header__form._search-active')) {
		document.querySelector('.header__form').classList.remove('_search-active');
	}

}
