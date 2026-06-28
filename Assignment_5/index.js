		// Assignment 5

// Complete the function in the editor. In which you are given one object as a parameter, in that object, there is a data member 
// named name. Your task is to create a method inside this object named setter, such that this method will print the value of the 
// data member named as name.

let obj = {
	name : "Abhi",
	setter : function (){
		return this.name
	}
}

console.log(obj.setter());

let obj2 = {
	name : "Abhi",
	rollno : 21
}

function deleteroll(obj){
	delete obj.rollno
	return obj
}

console.log(deleteroll(obj2));


// Complete the function in the editor. In which you are given an object as a parameter. In that object, there is one property named as salary 
// if the salary is maximum than 5 lakh then return "Dream" otherwise return "NotDream".

let obj3 = {
	salary : 5000001
}

function max(obj){
	if(obj.salary > 500000) return "Dream"
	else return "NotDream"
}

console.log(max(obj3));


// Complete the function in the editor. In which you are given an object as a parameter. You have to return "false" if there is no 
// parameter in the object otherwise return "true". 

function check(obj){
	for(let key in obj){
		return true 
	}
	return false 
}

console.log(check({}));

// Complete the function in the editor. In which you are given two objects as a parameter.In which you have to merge two 
// objects and return a single object. 

let obj4 = {
	name : "Abhi"
}

let obj5 = {
	roll : 21
}

function merge(obj1, obj2){
	return {...obj1,...obj2}
}

console.log(merge(obj4, obj5));

// Complete the function in the editor. In which you are given an object and a digit N as a parameter.In the object there are two 
// variable id and houseno are defined as a data member. You have to multiply both the data members with a given digit N. 


let obj6 = {
	id1 : 21,
	id2 : 2
}

function mul(n, obj){
	obj.id1*=n
	obj.id2*=n
	return obj
}

console.log(mul(2,obj6));

// You are given a function Check which takes an object Obj as a parameter. Your taks is to find out the sum of the three data 
// members of the object. The data members are named as p1, p2, p3. 
// Note: You have to complete Check function. No need to take any input. 

let obj7={
	p1 : 1,
	p2 : 5,
	p3 : 54
}

function sum(obj){
	return obj.p1 + obj.p2 + obj.p3
}

console.log(sum(obj7));

// Complete the function in the editor. In which you are given an object as a parameter. That object contains two variables 
// name and id. Your task is to compare the object name and id to the new_name and new_id given there as a parameter. 
// Return "true" if new_name and id are same as objects name and id otherwise return "false".

let obj8 = {
	name: "Abhi",
	id: 21
}

function comp(name,id,obj){
	return name == obj.name && id == obj.id
}

console.log(comp("Abhi", 21, obj8));


