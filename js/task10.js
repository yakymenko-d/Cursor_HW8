// function randomArr(a, b){
// 	let arr = [Math.random(0, 101)];
// 	return (arr)
// }
// console.log(randomArr(1, 4))

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10))