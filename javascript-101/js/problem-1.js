// Odin Project
// Javascript 101
// Project Euler - Problem 1

var divisible_by_5_3 = function (number) {
    if ((number % 3 === 0) || (number % 5 === 0)) {
        return number;
    } else return 0;
};

var sum_of_multiples_of_3_and_5 = function () {
  var input1 = document.getElementById("prob_1_input");
  var answer1 = document.getElementById("answer_1");
  var sum = 0;
  for (var i = 1; i < input1.value; i++) {
    sum += divisible_by_5_3(i);
  }
  answer1.innerHTML = sum;
};