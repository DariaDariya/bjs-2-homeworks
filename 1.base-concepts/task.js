"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	const discriminant = Math.pow(b, 2) - 4 * a * c;
	console.log(discriminant);

	if (discriminant < 0) {
		arr = [];
	} else if (discriminant === 0) {
		arr = [-b / (2 * a)];
	} else {
		arr = [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
	}

	return arr;

}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (!isNaN(percent) && !isNaN(contribution) && !isNaN(amount) && !isNaN(countMonths)) {
		const percentPerMonth = percent / 100 / 12;

		const bodyCredit = amount - contribution;
		const payment = bodyCredit * (percentPerMonth + (percentPerMonth / (((1 + percentPerMonth) ** countMonths) - 1)));
		const fullSumOfCredit = parseFloat((payment * countMonths).toFixed(2));
		return fullSumOfCredit;

	}

	return false;

}


