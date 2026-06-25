//			Assignment 3

// You are given a string S, and your task is to return an array B(having a size of 2), where B[0] contains the count of
// character A (uppercase) in string S and B[1] contains the count of character D (uppercase) in string S.
// Note: You have to complete countCharacters function. No need to take any input.

function countCharacters(str) {
  let v1 = str.split("A").length - 1
  let v2 = str.split("D").length - 1
  return [v1, v2]
}

// console.log(countCharacters("AbDbAafDjhD"))

// Tina is given a string S which contains the first letter of all the student names in her class. She got a curiosity to check how
// many people have their names starting from the same alphabet. So given a string S, she decided to write a code that finds
// out the count of characters that occur more than once in the string.
// Note: You have to complete Count Head function. No need to take any input.

function CountHead(S) {
    let freq = {}

    for (let ch of S) {
        freq[ch] = (freq[ch] || 0) + 1
    }

    let result = ""

    Object.keys(freq)
        .sort()
        .forEach(ch => {
            if (freq[ch] > 1) {
                result += ch + freq[ch]
            }
        });

    return result
}

// console.log(CountHead("abcdabcdefghsjk"))


// You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels in the 
// given string. 
// Note: You have to complete Count_Vowel function. No need to take any input.

function CountVowel(s){
	let count2 = 0 
	let vowels = "aeiouAEOU" 
	for(let ch of s){
		if(vowels.includes(ch)){
			count2++ 
		}
	}
	return count2;
}

// console.log(CountVowel("Adiiuguu"));


// You are given two strings S1 and S2 (containing both uppercase and lowercase letters), You need to retrun a string which is the 
// concatenation of both the given strings.  
// Note: You have to complete Concatenate_Strings function. No need to take any input.

function con(s1, s2){
	return s1+" "+s2
}

// console.log(con("abhi", "Tyagi"));

// You are given a string S, and your task is to return the length of the string S. 
// Note: You have to solve it without using length method. You have to complete findLength function. No need to take any input. 

function len(s){
	let l = 0 ;
	for(let ch of s){
		l++;
	}
	return l ;
}

// console.log(len("devloper"));

// You are given a string S consisting of two letters A and D,where each character represent the winner of N games played between Aditya 
// and Danish, where letter A represents the win of Aditya and letter D represents the win of Danish. You need to find out the that which 
// player wins the maximum number of games or there is a draw between them. 
// Note: You have to complete Game_Winner function. No need to take any input.

function winner(str){
	let a = 0 
	let d = 0 
	for(ch of str){
		if(ch == 'A'){
			a++ ;
		}
		else{
			d++ ;
		}
	}
	if(a == d) return "Draww"
	return (a > d ? 'A' : 'D')
}

// console.log(winner("AADDAADDD"));


// You are given two strings S and P, and your task is to concatenate them and return the concatenated string. 
// Note: You have to complete joinStrings function. No need to take any input.


function join(s1, s2){
	return s1+" "+s2
}

// // console.log(join("Dev","Tools"));

// You are given a string S, Your task is to check wether the given string is a Palindrome or not. 
// A Palindrome is a string, which turnout same when read in reverse direction. Example: "naman" is a Palindrome. String can contain 
// both upppercase lowercase letters. 
// Note: You have to complete Plain_Check function. No need to take any input.

function ispalin(s){
	let l = 0 ; 
	let h =  s.length - 1
	while(l <= h){		
		if(s[l] != s[h]){
			return false ;
		}
		l++;
		h--;
	}
	return true ;
}

// console.log(ispalin("naman"));

// You are given a string S, Your task is to Reverse the string. String can contain both upppercase lowercase letters. Note: You have to 
// complete Reverse_String function. No need to take any input.

function rev(str){
    return str.split('').reverse().join('');
}

// console.log(rev("hello"));


// You are given two strings S1 and S2, Your task is to print YES if both strings are same else print NO. 
// Note: You have to complete String_Match function. No need to take any input.

function eqchk(s1, s2){
	if(s1 == s2) return "Yes"
	else return "NO"
}

console.log(eqchk("ab", "ab"));

// You are given a string S, along with a pattern string and a text string. You need to repalce the pattern string in S to the text string. 
// Note: You have to complete Replace function. No need to take any input.
