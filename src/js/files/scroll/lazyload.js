import LazyLoad from "vanilla-lazyload";

// Работает с объектами с класом ._lazy
const lazyMedia = new LazyLoad({
	elements_selector: '._lazy',
	class_loaded: '_lazy-loaded',
	use_native: false,
});

// Обновить модуль
lazyMedia.update();