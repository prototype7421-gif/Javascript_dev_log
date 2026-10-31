//print
console.log("hello");
//initializing variables
 let age =24;
console.log(age);
 const Fullame = "krish";
 //datatypes
 //primitive type
 price =24;
 //string
 let name="siuu";
//object
const student = {
     name : "aayush",
     age : 24,
    class : CSE,
};
student ["age"] + 1 // to change any value in object (suppose age)
student["name"] = "Krish";
//operators
2+3;
let a =2;
let b =4;
let c = a + b;
a++;
console.log(c);
//loops
arr[4,2,3,5,6,6];
let i =0;
let j =arr.length -1;
while(i<j){
    arr[i]=temp;
    arr[j]=arr[i];
    temp = arr[j];
    i++;
    j++;
}
console.log(arr);
//strict equal to 
let d=3;//number
let e = "3";//string
console.log(d===e);//false
//loops
let g=33;
if(g===2){
  console.log("good");
}
//question
let num = prompt("enter a number");
if(num % 5 ==0){
    console.log("number is divisible by 5",num)
}else{
    console.log("invalid")
}
let score = prompt("enter marks");
if(score >=90){
    console.log("A");
}else if(score >=80){
    console.log("B");
}