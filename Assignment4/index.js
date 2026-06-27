	// Assignment 4


// Write a program that takes an array as input from the user and find out the product of the elements. 
// Note: You have to complete Find_Prod. No need to take any input.

function FinfProd(ar){
	let prod = 1
	for(let el of ar){
		prod *= el
	}
	return prod ;
}

// console.log(FinfProd([1,2,3,4,5]));


// Write a program which takes an array as input from the user and find out the sum of the array elements. 
// Note: You have to complete Find_Sum. No need to take any input.

function Find_Sum(ar){
	sum = 0 ; 
	for(let el of ar){
		sum += el
	}
	return sum 
}

// console.log(Find_Sum([1,2,3,4,5]))


// You are given an array A containing N integer elements and an integer K, and your task is to return the count of 
// occurrences of K in array A.
// Note: You have to complete findCount function. No need to take any input.


function findCount(k, ar){
	count = 0 
	for(let el of ar){
		if(el === k){
			count++
		}
	}
	return count ;
}

// console.log(findCount(2,[2,2,2,3]));

// You are given an array A containing N integer elements, and your task is to return an array B ((having a size equal to 22)), 
// where B[0] contains the sum of all even elements of array A and B[1] has the sum of all odd elements of the array A. 
// Note: You have to complete findEvenOdd function. No need to take any input. 

function findEvenOdd(ar){
	let B = new Array(22).fill(0)
	for(let el of ar){
		if(el%2==0){
			B[0] += el 
		}
		else{
			B[1] += el
		}
	}
	return B 
}

// console.log(findEvenOdd([1,2,3,4,5,6]));

// Write a program which takes an array as input from the user and a number. Check whether the number is present or not. 
// Note: You have to complete Find_Num. No need to take any input. 

function Find_Num(n, ar){
	for(let el of ar){
		if(n === el){
			return true
		}
	}
	return false
}

// console.log(Find_Num(2,[3,2,4,5,6]));

// You are given an array A containing the age of persons in your locality, and your task is to find and return an array 
// containing the age of persons that are over 1818 (18(18 included)). 
// Note: Also, in the output array, the age should be in the same order as in the input array. You have to complete highAge 
// function. No need to take any input. 

function FindAge(ar){
	let ans = new Array()
	for(let el of ar){
		if(el >= 18){
			ans.push(el)
		}
	}
	return ans 
}

// console.log(FindAge([12,23,56,45,12,11]));

// You are provided an array of integers and you have to increment all array elements by 1 and then print whole array. 
// You have to complete Inc_Arr. No need to take any input.

function  Inc_Arr(ar){
	return ar.map(el => {
		return el+1 ;
	})
}

// console.log(Inc_Arr([1,2,3]));


// You are given an array A containing the maths marks of students in your class, and your task is to determine if all the 
// students pass in your class or not. A student is declared pass if his maths marks are greater than or equal to 32. 
// If all the students pass in your class, return "YES" (without quotes); otherwise, return "NO" (without quotes). 
// Note: You have to complete isAllPass function. No need to take any input. 

function isAllPass(ar){
	return ar.every(el => {
		return el >= 32 
	})
}

// console.log(isAllPass([79,89,56,54]));

// Prepbuddy is very tasteful of clothes. He has N numbers of shirts hanging in the hanger in his wardrobe. Prepbuddy likes to 
// wear different colored clothes. So, whenever he see there are two or more shirts with the same color, he removes all the shirt 
// of that color from his wardrobe. Now, he wants to know how many M unique color shirts are left in the wardrobe. Prepbuddy 
// wants you to find M. 
// Note: As there are many shades of a color so consider integers as a color name. i.e, color of shirt is 0,1,2, … , N.

function shirts(ar){
	let count = 0 
	ar.sort()
	for(let i = 0 ; i < ar.length - 1  ; i++){
		if(ar.at(i) == ar.at(i+1)){
			count++
			i++
		}
	}
	return count
}

// console.log(shirts([1,2,3,4,5,6,1,3,4]));

// Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. If you know how to 
// iterate through the array, you will easily be able to solve this. The problem statement is simple- given N elements, find the 
// minimum and maximum numbers among those elements. 


function min_max(ar){
	let ans = new Array
	ans.push(Math.min(...ar))
	ans.push(Math.max(...ar))
	return ans
}

// console.log(`MIn is ${min_max([1,2,3,4,5,6])[0]} and max is ${min_max([1,2,3,4,5,6])[1]}`)






