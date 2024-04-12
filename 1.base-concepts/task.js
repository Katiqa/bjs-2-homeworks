"use strict";

function solveEquation(a, b, c) {
	let d = b ** 2 - 4 * a * c;

	if (d === 0) {
		let x = -b / (2 * a);
		return [x];
	} else if (d > 0) {
		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);
		return [x1, x2];
	} else {
		return [];
	}
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const monthlyPercent = percent / 100 / 12;
	const loanBody = amount - contribution;
	const monthlyPayment = loanBody * (monthlyPercent + monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1));
	const totalAmount = monthlyPayment * countMonths;

	return Number(totalAmount.toFixed(2));
}