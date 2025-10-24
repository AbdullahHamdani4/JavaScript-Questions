// Guess the Number
let number=7;
let user_number=+prompt("Guess the number between 1-10");
if(user_number == number){
    console.log("Congratulations You guessed right");
}else if( user_number == number - 1 || user_number == number + 1){
  console.log("Bas ek step dor");
}else if(user_number==  number - 2 || user_number == number + 2){
  console.log("Thoda sa or behtar guess kro");
}else if(user_number==  number - 3 || user_number == number + 3){
  console.log("Qareeb horahe ho kooshis krte raho mittar");
}else if(user_number==  number - 4 || user_number == number + 4){
  console.log("Kooshis krte raho");
}else{
  console.log("Tumse na hopaiga");
}



