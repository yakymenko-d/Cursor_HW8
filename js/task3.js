function value(a, b){
	if (a > b) {
		return('Первое число больше');
	} else if (a < b) {
		return('Второе число больше');
	} else {
		return('Эти числа равны');
	}
};
console.log(value(9, 7));
console.log(value(1, 6));
console.log(value(3, 3));