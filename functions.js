//functions- it can be defined a block of function that can be invoked anywhere.it has a defined work.
function print(){
    console.log("called print");
}
//call function
print();
//functions protect us from redundancy.
function call(msg){
  console.log(msg);
}
call("hello  function");
//----------------------------------------
function add(a,b){
     a = prompt("enter number a");
     b = prompt("enter number b");
     s =a + b;
    console.log(s);
}
add();
//----------------------------------------
const multiply = (a,b) => {
return a*b;
}
//----------------------------------------
const returnVowel= (str) =>{
    let result = "";
 for(let s of str){
    if(s === "a" || s==="e" || s==="i" ){
        result += str.charAt(s);
       console.log(result);
   }
 }
}  
returnVowel("hellaoiou");
//methods
arr =[1,2,4,5];
arr.forEach (function printValue(val){
console.log(val);
});
//or
arr.forEach((val) =>{
console.log("hello");
});