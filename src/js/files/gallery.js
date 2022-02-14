
/*
Документация по работе в шаблоне: https://www.lightgalleryjs.com/docs/
Документация плагина: https://www.lightgalleryjs.com/docs/
Сниппет(HTML):
*/

// Подключение базового набора функционала

import lightGallery from 'lightgallery';
// Плагины
// lgZoom, lgAutoplay, lgComment, lgFullscreen, lgHash, lgPager, lgRotate, lgShare, lgThumbnail, lgVideo, lgMediumZoom
import lgZoom from 'lightgallery/plugins/zoom/lg-zoom.es5.js';
import lgFullscreen from 'lightgallery/plugins/fullscreen/lg-fullscreen.es5.js';
import lgRotate from 'lightgallery/plugins/rotate/lg-rotate.es5.js';

// Базовые стили
//! Если подключить данные стили в этом файле то не будет работать mixin rem() который превращает px
//! в rem так что осторожнее.
//! файлы стилей сейчас подключены в scss/base.scss
//import '@scss/libs/gallery/lightgallery.scss';
// Стили дополнений
//import '@scss/libs/gallery/lg-thumbnail.scss';
// import '@scss/libs/gallery/lg-video.scss';
// import '@scss/libs/gallery/lg-autoplay.scss';
//import '@scss/libs/gallery/lg-zoom.scss';
// import '@scss/libs/gallery/lg-pager.scss';
//import '@scss/libs/gallery/lg-fullscreen.scss';
// import '@scss/libs/gallery/lg-share.scss';
// import '@scss/libs/gallery/lg-comments.scss';s
//import '@scss/libs/gallery/lg-rotate.scss';
// import '@scss/libs/gallery/lg-medium-zoom.scss';
// import '@scss/libs/gallery/lg-relative-caption.scss';

// Все стили
// import '@scss/libs/gallery/lightgallery-bundle.scss';

// Запуск
const galleries = document.querySelectorAll('[data-gallery]');
if (galleries.length) {
	galleries.forEach(gallery => {
		gallery.addEventListener('lgInit', (e) => {
			console.log(e);
		});
		lightGallery(gallery, {
			plugins: [lgZoom, lgFullscreen, lgRotate],
			fullScreen: true,
			selector: "[data-gallery-item]",
			zoom: true,
			rotate: true,
			preload: 1,
			licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
			speed: 500,
		});
	});
}