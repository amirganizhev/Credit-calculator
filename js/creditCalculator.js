let creditAmount = document.querySelector(".credit-amount");
let creditTerm = document.querySelector(".credit-term");
let creditPercent = document.querySelector(".credit-percent");

let countButton = document.querySelector(".count-button");

countButton.onclick = () => {
	let amount = parseInt(creditAmount.value);
	let term = parseInt(creditTerm.value);
	let percent = parseInt(creditPercent.value);
	let summ = amount + (((amount / 100) * (percent / 12)) * (term * 12));
	let summMounth = summ / (term * 12);
	alert("Общая сумма к возврату: " + summ + " рублей");
	alert("Ежемесячный платеж: " + summMounth + " рублей");
}
