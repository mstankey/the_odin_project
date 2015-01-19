// Odin Project
// Javascript 101
// Project Euler - Problem 1

var solution = function(input){
	var sum = 0;
	var MultOfThree;
	var MultOfFive;

	for(var i; i < input/3; i++){
		MultOfThree = i*3;
		MultOfFive = i*5;
		if(MultOfFive < input && MultOfFive % 3 > 0){
			sum += MultOfFive;
		}
		sum += MultOfThree;
	}
	return sum;
};