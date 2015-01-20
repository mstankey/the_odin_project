// Odin Project
// Javascript 101
// Project Euler - Problem 3

var prime_test = function (prime_verif) {                    //defined a function to verify the prime number
	var prime = true;
	for (var nr_a=2; nr_a<prime_verif; nr_a++) {      //tested before with FOR in FOR and did not work
		if (prime_verif % nr_a === 0) {
			prime = false;
		}
	}
	return prime;
}


var prime_factors = function () {	
	var prime_number = 0;
	var input_nr1 = document.getElementById('prob_3_input');
	var input_nr = input_nr1.value;  // IMPORTANT !!! add ".value" otherwise to generate number. Otherwise will be zero

	for (var nr_b = 2; nr_b <= input_nr; nr_b++) {   
		if (input_nr % nr_b === 0) {
			input_nr = input_nr/nr_b;
			console.log ("nrb " + nr_b);
			console.log ("input_nr" + input_nr);
			if ( prime_test(nr_b) === true) {
				prime_number = nr_b;
			}
		}
	}
	console.log ("biggest prime : " + prime_number);

	document.getElementById('answer_3').innerHTML = prime_number;
}
