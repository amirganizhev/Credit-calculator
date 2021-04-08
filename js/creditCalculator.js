/*Формы ввода*/
const creditAmount = document.querySelector(".credit-amount");
const creditTerm = document.querySelector(".credit-term");
const creditPercent = document.querySelector(".credit-percent");

/*Валидация форм*/
creditAmount.onkeypress = (event) => {
	if (event.keyCode >= 48 && event.keyCode <= 57) {
		return true;
	} else {
		return false;
	}
}

creditTerm.onkeypress = (event) => {
	if (event.keyCode >= 48 && event.keyCode <= 57) {
		return true;
	} else {
		return false;
	}
}

creditPercent.onkeypress = (event) => {
	if (event.keyCode >= 48 && event.keyCode <= 57) {
		return true;
	} else {
		return false;
	}
}

/*Кнопка подсчета*/
const countButton = document.querySelector(".count-button");

countButton.onclick = () => {
	/*Очистка форм*/
	setTimeout(() => creditAmount.value = "", 1000);
	setTimeout(() => creditTerm.value = "", 1000);
	setTimeout(() => creditPercent.value = "", 1000);
	/*Парсинг из строки в число*/
	const amount = parseInt(creditAmount.value);
	const term = parseInt(creditTerm.value);
	const percent = parseInt(creditPercent.value);
	/*Подсчет общей суммы и ежемесячного платежа*/
	let totalAmount = amount + (((amount / 100) * (percent / 12)) * (term * 12));
	let monthlyPayment = totalAmount / (term * 12);
	/*Вывод результата*/
	alert("Общая сумма к возврату: " + Math.round(totalAmount) + " рублей");
	alert("Ежемесячный платеж: " + Math.round(monthlyPayment) + " рублей");
}
