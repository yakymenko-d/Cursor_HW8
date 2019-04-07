//FIRST
function taxesValue(salary) {
	const recieveTax = salary * 0.18;
	const warTax = salary * 0.01;
	const allTaxes = recieveTax + warTax;
	let result = {
		'Salary': salary,
		'Recieve Tax': recieveTax,
		'War Tax': warTax,
		'Tax': allTaxes,
	}
	return (result);
}
console.log(taxesValue(100))

//SECOND
function taxesValue(salary) {
	const recieve = 0.18;
	const war = 0.01;
	const recieveTax = salary * recieve;
	const warTax = salary * war;
	const allTaxes = recieveTax + warTax;
	let result = {
		'Salary': salary,
		'Recieve Tax': recieveTax,
		'War Tax': warTax,
		'Tax': allTaxes,
	}
	return (result);
}
console.log(taxesValue(100))