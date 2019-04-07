function findSum(n, k, value = 0) {
	value += Math.pow(n, k);
  	while (n > 0) {
    return findSum(n - 1, k, value);
  	}
  	return value;
}
console.log(findSum(4, 2));
