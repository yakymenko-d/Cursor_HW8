function maxMin(value) {
    let enteredNumbers = value.toString().split("");
    if(enteredNumbers[0] > enteredNumbers[1]) {
        return ('Максимальное число: ' + enteredNumbers[0] + '\n' + 'Минимальное число: ' + enteredNumbers[1]);
    } else if (enteredNumbers[0] < enteredNumbers[1]) {
        return ('Максимальное число: ' + enteredNumbers[0] + '\n' + 'Минимальное число: ' + enteredNumbers[1]);
    } else {
        return ('Числа равные!');
    };
}
console.log(maxMin(73));