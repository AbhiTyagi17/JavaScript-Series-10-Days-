// ASSIGNMENT 2

// Your school has the following grading system based upon the marks (M) obtained by a student: 
//  If M≤10, the grade will be E. 
//  If 11≥M≤20, the grade will be D. 
//  If 21≥M≤30, the grade will be C. 
//  If 31≥M≤40, the grade will be B. 
//  If 41≥M≤50, the grade will be A. 
// Your friend will enter his marks out of 5050, and your task is to print his grades using a switch statement. 
// Note: You have to complete findGrades function. No need to take any input.


let grade = 43 ; // out of 50
switch(true){
	case grade>40:
		console.log("A");
		break ;
	case grade>30 && grade<=40 : 
		console.log("B");
		break ;
	case grade>20 && grade<=30: 
		console.log("C");
		break ;
	case grade>10 && grade<=20 : 
		console.log("D");
		break ;
	case grade>1 && grade <=10 : 
		console.log("E");
		break ;
	default : 
		console.log("invalid grade!");
		break ;
}


// You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the 
// table corresponding to an input character and return it. 
// | P or p - PrepBytes | 
// | Z or z - Zenith |  
// | E or e - Expert Coder |  
// | D or d - Data Structure | 

function getValue(char){
	if(char == 'P' || char == 'p'){
		return "PrepInsta" ;
	}
	else if(char == 'Z' || char == 'z'){
		return "Zenith" ;
	}
	else if(char == 'E' || char == 'e'){
		return "Expert Coder" ;
	}
	else if(char == 'D' || char == 'd'){
		return "Data Structure" ;
	}
	else{
		return "Enter a valid input" ;
	}
}

console.log(getValue('D'));

// Take three numbers and print the largest number among them if all of three are same print −1−1. 
// Note: You have to complete Max_out_of_three. No need to take any input.

function getmax(a, b, c){
	if(a==b && b==c){
		return -1 ;
	}
	if(a > b){
		if(b > c){
			return a ;
		}
	}
	else{
		if(c > b){
			return c ;
		}
		else{
			return b ;
		}
	}
}

console.log(getmax(4,5,8));

// You are given distinct integers X, Y and Z and your task is to find and return the second smallest integer among the three provided 
// integers. 
// Note: You have to complete findSndSmallest function. No need to take any input.

function secsmall(a, b, c){
	if(a > b){
		if(c < b){
			return c ;
		}
	}
	else{
		if(c < a){
			return a ;
		}
		else{
			return b
		}
	}
}

console.log(secsmall(2,23, 1));


// Write a program takes takes three angles and checks whether the triangle is acute or obtuse. 
// Note: You have to complete Triangle_Check. No need to take any input 

function checktri(a, b, c){
	if(a > 90 || b > 90 || c > 90){
		return "Obtuse Triangle";
	}
	else{
		return "Acute Triangle"
	}
}


console.log(checktri(91,39,50));

