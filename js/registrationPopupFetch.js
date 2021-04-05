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