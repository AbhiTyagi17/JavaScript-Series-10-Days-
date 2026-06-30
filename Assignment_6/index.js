// Q1: Find the Smaller Angle between hour and minute hands
function Minimal_Angle(h, m) {
  const hourAngle = (h % 12) * 30 + m * 0.5; // hour hand moves 0.5° per minute
  const minuteAngle = m * 6;                  // minute hand moves 6° per minute
  const diff = Math.abs(hourAngle - minuteAngle);
  return Math.min(diff, 360 - diff);
}

// Q2: Check whether the year is a Leap Year or not
function Check_Leap(N) {
  if ((N % 4 === 0 && N % 100 !== 0) || N % 400 === 0) {
    return "Leap Year";
  }
  return "Non Leap Year";
}

// Q3: Perfect Number Check
// A perfect number equals the sum of its divisors (excluding itself)
function Perfect_Check(N) {
  if (N < 2) return "YES"; 
  let sum = 1; 
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      sum += i;
      if (i !== N / i) sum += N / i;
    }
  }
  return sum === N ? "YES" : "NO";
}

// Q4: Reverse a Number (leading zeros are dropped automatically)
function Reverse_Number(N) {
  return parseInt(String(N).split("").reverse().join(""), 10);
}

// Q5: Substring Check — is S1 a substring of S2?
function Substring_Check(S1, S2) {
  return S2.includes(S1) ? "YES" : "NO";
}



console.log("Q1:", Minimal_Angle(5, 30));   
console.log("Q1:", Minimal_Angle(6, 0));    

console.log("Q2:", Check_Leap(1900));       
console.log("Q2:", Check_Leap(2012));      

console.log("Q3:", Perfect_Check(1));       
console.log("Q3:", Perfect_Check(6));       
console.log("Q3:", Perfect_Check(28));      
console.log("Q3:", Perfect_Check(96345));   

console.log("Q4:", Reverse_Number(1900));   
console.log("Q4:", Reverse_Number(2012));   

console.log("Q5:", Substring_Check("Hii this is Prepbuddy", "Prepbuddy"));   
console.log("Q5:", Substring_Check("Hii this is Prepbuddy", "Prepbytes"));   