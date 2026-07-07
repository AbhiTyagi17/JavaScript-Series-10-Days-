// Q1: Find the number of digits
function Find_Digits(N) {
  return String(Math.abs(N)).length;
}

// Q2: Find the Fives
function Find_Five(N) {
  return String(N).split("").filter(d => d === "5").length;
}

// Q3: Find Sum of even integers from 1 to N (inclusive)
function findSum(N) {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) sum += i;
  }
  return sum;
}

// Q4: Find the sum of digits of a given number
function Number_Sum(N) {
  return String(N).split("").reduce((sum, d) => sum + Number(d), 0);
}

// Q5: Print the Odds (print 2 first, then odd numbers between 2 and N)
function Print_Odd(N) {
  let result = "2";
  for (let i = 3; i <= N; i++) {
    if (i % 2 !== 0) result += " " + i;
  }
  console.log(result);
}

// Q6: Print the Pattern (asterisk triangle)
function Print_pattern(N) {
  for (let i = 1; i <= N; i++) {
    console.log("*".repeat(i));
  }
}

// Q7: Check whether a number is prime or not
function Prime_Check(N) {
  if (N < 2) return "NO";
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) return "NO";
  }
  return "YES";
}

// Q8: Print Numbers from 1 to N
function printNumbers(N) {
  let result = "";
  for (let i = 1; i <= N; i++) {
    result += (i === 1 ? "" : " ") + i;
  }
  console.log(result);
}

// Q9: Print the multiplication table of N (1 to 10)
function Print_Table(N) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${N}*${i}=${N * i}`);
  }
}



console.log("Q1:", Find_Digits(1234));       
console.log("Q2:", Find_Five(345654));       
console.log("Q3:", findSum(6));              
console.log("Q4:", Number_Sum(1234));        
console.log("Q5:"); Print_Odd(10);           
console.log("Q6:"); Print_pattern(5);       
console.log("Q7:", Prime_Check(7));          
console.log("Q7:", Prime_Check(4));          
console.log("Q8:"); printNumbers(4);         
console.log("Q9:"); Print_Table(3);          