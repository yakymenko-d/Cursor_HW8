function randomArr(a, b) {
	let count = 10;
        arr = [];
    for (let i = 0; i < count; i++) {
        arr[i] = Math.floor(Math.random() * (b - a + 1) + a);
    }
    return (arr)
}
console.log(randomArr(1, 10));
