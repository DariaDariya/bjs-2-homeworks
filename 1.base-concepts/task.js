"use strict"

function solveEquation(a, b, c) {
	let arr = [];

	const d = Math.pow(b, 2) - 4 * a * c;
	console.log(d);


	if (d < 0) {
		return arr = [];
	} else if (d = 0) {
		return arr[-b / (2 * a)]
	} else {
		return arr[(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
	}

	return arr;
  
}




function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (!isNaN(percent) && !isNaN(contribution) && !isNaN(amount) && !isNaN(countMonths)) {
		let percent = 1 / percent;

		let bodyCredit = amount - contribution;
		let payment = bodyCredit * (1 / 12 * percent + (1 / 12 * percent / ((Math.pow(1 + percent, countMonths) - 1))));
		let allSum = parseFloat((payment * countMonths).toFixed(2));
		return allSum;

		console.log("Ввод: " + calculateTotalMortgage() + "Вывод: " + calculateTotalMortgage.allSum);
	}

	return false;

}


