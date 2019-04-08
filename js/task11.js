function countLetters(str) {
    let arrLetters = str.split("");
    let result = {};
    arrLetters.forEach((letter) => {
        if (!result[letter]) {
            result[letter] = 1;
        } else {
            result[letter] += 1;
        }
    });
    return result;
}
console.log(countLetters('Hello World!'))