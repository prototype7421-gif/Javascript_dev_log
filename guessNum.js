let guessNum = 25;
 let user =prompt("enter your guess");
for(let i =0;i<=100;i++ ){
    while(user != guessNum){
    user = prompt("enter number again");
   
    }
     if(user===guessNum){
       console.log("number guessed success");
}
   
}
