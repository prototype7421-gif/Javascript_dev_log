//ques1
let marks= [23,32,44,22,66];
console.log(marks[0]);
let sum=0;
for(let i =0;i<marks.length;i++){
 sum = sum + marks[i];  
}
 console.log(sum);
 let average = sum/marks.length;
  console.log("the average of the marks is", average);
//ques2
let price = [300,400,500];
for(let z =0;z<price.length;z++){
    let sale = price[z]/100 *10;
    price[z]=price[z]-sale;
}
console.log( " the offer is = " ,price);
//ques3
let veg =["tomato","ginger","lichhi"];
veg.push("potato");
console.log(veg);
console.log(veg.toString);
console.log(veg.concat("pizza"));
