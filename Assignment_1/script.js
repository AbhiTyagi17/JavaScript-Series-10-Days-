function AddTwoNumbers(num1,num2){
	console.log(`Sum of ${num1} & ${num2} is ${num1+num2}`);
}

AddTwoNumbers(2,3);

function isValid(a, b){
	console.log (a < 10 && a > b)
}

isValid(5,3);

function check(a, b){
	console.log((a%10==0 && b%10==0) && !(a%10==0 && b%10==0) && (a%10==0) || b%10==0);
}

check(12,20);

function First_Digit(num){
	console.log((Math.floor)(num/1000));
}

First_Digit(4563);

function Last_Digit(num){
	console.log((Math.floor)(num%10));
}

Last_Digit(4563);

console.log(Math.round(4.9216));

function Find_the_remainder(num , NUM){
	console.log(NUM % num);
}

Find_the_remainder(2,9);

function Multiply_two_number(a, b){
	console.log(a*b);
}

Multiply_two_number(2,5);

function sum(a, b, c){
	console.log(a+b+c);
}
function average(a,  b, c){
	console.log(((a+b+c)/3).toPrecision(4));
}

sum(50,20,100);
average(50,20,100)
