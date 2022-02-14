//Импорт библиотеки
import Inputmask from 'inputmask';
//Базовые настройки только для валидациии телефонов.
const phones = document.querySelectorAll('input._phone');
if (phones.length > 0) {
	phones.forEach(item => {
		new Inputmask.default({
			"mask": "+7(999)-999-9999",
			clearIncomplete: true,
			clearMaskOnLostFocus: true,
		}).mask(item);
	})
}