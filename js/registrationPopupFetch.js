/*Форма регистрации*/
const registrationForm = document.querySelector(".registration-form");

/*Кнопка Регистрация*/
const registrationLink = document.querySelector(".registration-link");

/*Имя*/
const registrationName = document.querySelector(".registration-name");
/*Фамилия*/
const registrationSurname = document.querySelector(".registration-surname");
/*Почта*/
const registrationMail = document.querySelector(".registration-mail");
/*Пароль*/
const registrationPassword = document.querySelector(".registration-password");

registrationLink.onclick = () => {
	registrationForm.style.display = "block";
}

/*Крестик закрытия формы регистрации*/
const registrationCross = document.querySelector(".registration-cross");

registrationCross.onclick = () => {
	clearForm();
}

/*----------------------------------Fetch-запрос----------------------------------*/
/*Кнопка отправки формы*/
const registrationButton = document.querySelector(".registration-button");

/*AJAX запрос по клику на кнопку*/
registrationButton.onclick = () => {

	/*Регулярные выражения*/
	const russian_letters_reg = /[а-я]/i;
	const mail_reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
	const password_reg = /[A-Za-z0-9]/;
	/*Валидация имени*/
	if (!russian_letters_reg.test(registrationName.value)) {
		alert("НЕКОРРЕКТНОЕ ИМЯ: используйте только русские буквы");
		return false;
	} 
	/*Валидация фамилии*/
	if (!russian_letters_reg.test(registrationSurname.value)) {
		alert("НЕКОРРЕКТНАЯ ФАМИЛИЯ: используйте только русские буквы");
		return false;
	} 
	/*Валидация почты*/
	if (!mail_reg.test(registrationMail.value)) {
		alert("НЕКОРРЕКТНЫЙ @MAIL");
		return false;
	} 
	/*Валидация пароля*/
	if (!password_reg.test(registrationPassword.value)) {
		alert("НЕКОРРЕКТНЫЙ ПАРОЛЬ: используйте только латинские буквы и цифры");
		return false;
	} 

	/*--------------------------------------------------------------------------------*/
	const params = registrationName.value + ' ' + registrationSurname.value + ' ' + registrationMail.value + ' ' + registrationPassword.value;
	const url = 'ССЫЛКА_НА_СЕРВЕР';

	fetch(url, {
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		redirect: 'follow',
		referrer: 'no-referrer',
		body: params,
	})
	.then(response => {
		console.log('Запрос отправлен');
	})
	/*--------------------------------------------------------------------------------*/

	/*Очистка форм*/
	clearForm(); 
}
/*----------------------------------Конец Fetch-запроса----------------------------------*/

/*Очистка форм*/
function clearForm() {
	registrationForm.style.display = "none";
	setTimeout(() => {
		registrationName.value = '';
		registrationSurname.value = '';
		registrationMail.value = '';
		registrationPassword.value = '';
	}, 1000);
}