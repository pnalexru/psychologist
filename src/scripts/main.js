// Импортируем стилы
import '../styles/main.scss'

// Базовый JavaScript
console.log('Сайт психолога загружен')

// Простая функция для кнопок
document.addEventListener('DOMContentLoaded', function () {
	// Пример: обработчик для кнопки записи
	const appointmentBtns = document.querySelectorAll(
		'.btn--primary, .btn--large'
	)

	appointmentBtns.forEach((btn) => {
		btn.addEventListener('click', function () {
			alert('Форма записи будет здесь!')
			// Здесь позже добавим модальное окно
		})
	})
})
