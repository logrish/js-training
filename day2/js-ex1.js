// Creatw a js-Ex1.js file. Create a function called 'math' which is a higher order function.
// math function has a list of 10 numbers. 
// 12,4,56,3,123,74,8,3,234,987.

// What does math function do with these numbers? :). Now, you've to tell it as it's a higher order function.

// 1) Ask math to print the even numbers
// 2) Ask math to print the odd numbers
// 3) Ask math to print the largest number

function math(logic){
	numArray = [12,4,56,3,123,74,8,3,234,987];
	for (var i = 0; i < numArray.length; i++) {
		logic(numArray[i]);
	}
}
var even = function(num){
	if (num % 2 == 0) {
		console.log(num);
	}
};
var odd = function(num){
	if (num % 2 != 0) {
		console.log(num);
	}
};
var printLargest = function(num){

};
console.log("--** Odd **--")
math(odd);
console.log("--** Even **--")
math(even);
var largest = -1;
math(function(num){
	if (num>largest) {
		largest = num
	}
});
console.log("** largest --> "+largest)
