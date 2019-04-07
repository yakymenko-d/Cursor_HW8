function prepareName(name) {
	let upperFirst = name.charAt().toUpperCase();
	let lowerOther = name.slice(1, name.length).toLowerCase();
	return upperFirst + lowerOther;
}
console.log(prepareName('deNyS'));