// Подключение функционала "Чертогов Фрилансера"
import { isMobile, menuClose, getHash,scrollBurgerMenu, FLS } from "../functions.js";
// Подключение дополнения для увеличения возможностей
// Документация: https://github.com/cferdinandi/smooth-scroll
// import SmoothScroll from 'smooth-scroll';
//==============================================================================================================================================================================================================================================================================================================================

// Модуль плавной проктутки к блоку
export let gotoBlock = (targetBlock, noHeader = false, speed = 500, offset = 0) => {
	const targetBlockElement = document.querySelector(targetBlock);
	const html = document.documentElement;
	const header = document.querySelector("header.header");
	if (targetBlockElement) {
		let headerItem = '';
		let headerItemHeight = 0;
		if (noHeader) {
			headerItem = 'header.header';
			headerItemHeight = document.querySelector(headerItem).offsetHeight;
		}
		let options = {
			speedAsDuration: true,
			speed: speed,
			header: headerItem,
			offset: offset,
			easing: 'easeOutQuad',
		};
		// Закрываем меню, если оно открыто
		// Закрываем меню, если оно открыто
		if (html.classList.contains("menu-open")) {
			menuClose();
			window.scrollTo(0, scrollBurgerMenu);
			if (scrollBurgerMenu > header.dataset.scroll) {
				header.classList.add("_no-transform");
				setTimeout(function () {
					header.classList.remove("_no-transform");
				}, 1000);
			}
		}

		if (typeof SmoothScroll !== 'undefined') {
			// Прокрутка с использованием дополнения
			new SmoothScroll().animateScroll(targetBlockElement, '', options);
		} else {
			// Прокрутка стандартными средствами
			let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
			window.scrollTo({
				top: headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition,
				behavior: "smooth"
			});
		}
		FLS(`[gotoBlock]: Юхуу...едем к ${targetBlock}`);
	} else {
		FLS(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${targetBlock}`);
	}
};