// Chapter 21-25

//Problem 1
let firstName=prompt("Enter your first name");
let lastName=prompt("Enter your last name");
let fullName=firstName.concat(" ",lastName);
console.log(fullName);

//Problem 2
let userFavMobileBrand=prompt("Enter your favourite mobile model");
console.log(userFavMobileBrand.length);

//Problem 3
let string="Pakistan";
console.log("String ==> ",string);
console.log("Index of 'n': ",string.indexOf("n"));

//Problem 4
let lastIndexString="Hello World";
console.log("String ==> ",lastIndexString);
console.log("Last Index of 'l': ",lastIndexString.lastIndexOf("l"));

//Problem 5
let indexNumberOfString="Pakistan";
console.log("String ==> ",indexNumberOfString);
console.log("Character at index 3:",indexNumberOfString[3]);

//Problem 6
// Already done with concat method

//Problem 7
let city="Hyderabad";
let indexR=city.indexOf("r")
let ending=city.slice(indexR + 1);
let newCity="Islam" + ending;
console.log(newCity);

//Problem 8
let paragraph="Ali and Sami are best friends. They play cricket and football together."
for (let i=0; i<paragraph.length; i++){
   if (paragraph.slice(i,i+3) == "and") {
       console.log(i ,paragraph[i]);
    paragraph= paragraph.slice(0,i) + "&" + paragraph.slice(i + 3);
     
   }    
}
console.log(paragraph);

//Problem 9
let numberString="472";
console.log("Value ==>",numberString);
console.log("Type ==>",typeof numberString);
let convertedNumber=+numberString;
console.log("Value ==>",convertedNumber);
console.log("Type ==>",typeof convertedNumber);

//Problem 10
let userInput="peanuts";
console.log(userInput.toUpperCase());

//Problem 11
let titleCase="javascript";
let newName= titleCase[0].toUpperCase() + titleCase.slice(1);
console.log(newName);

//Problem 12
let num=35.36;
let indexNum=num.toString().replace(".","");
console.log(indexNum);

//Problem 13
let userName=prompt("Enter your name");
for (let i = 0; i<userName.length;i++) {
 if(userName.charAt(i) == "!" || userName.charAt(i) == "," || userName.charAt(i) == "." || userName.charAt(i) == "@")
     {
        console.log("invalid");
        break
 }
 else {console.log("good")
    break
 };
 
 }

//Problem 14 
let flag = false;
let bakeryitems = ["cake", "apple pie", "cookie", "chips", "patties"];
let searchuser = prompt("Enter your desired bakery item!").toLowerCase();
for (let i = 0; i < bakeryitems.length; i++) {
    if (searchuser == bakeryitems[i]) {
        console.log("Available in the bakery!");
        flag = true;
         
    };
}
if (flag == false) {
    console.log("Not Available in the bakery!");
};

//Problem 15
let nam=prompt("Enter a password").toUpperCase();
let alphabet=false;
let number=false;
let length=false;
let first=true;
// console.log(nam);

for(let i=0; i<nam.length; i++){
   if (nam.charCodeAt(i) >=65 && nam.charCodeAt(i) <=90) {
       alphabet=true
   }  
       if (nam.charCodeAt(i) >=48 && nam.charCodeAt(i) <=57) {
          number=true
       } 
        
       if (nam.length >=6) {
         length=true
       }  
       if (nam.charCodeAt(0) >=48 && nam.charCodeAt(0) <=57) {
         first=false
       } 
       if (alphabet && number && length && first) {
         console.log("Your password is correct and fulfills all the conditios");
         break
       }
       else{
         console.log("Incorrect");
         console.log(alphabet,number,length,first);
         
         break
       }
} 

//Problem 16
let str="University of Karachi";
let strArray=str.split([""]);
for(let i=0; i<=strArray.length; i++){
console.log(strArray[i]);
};

//Problem 17
let country="Pakistan";
console.log("The last character of the word is ==>",country[country.length - 1]);

//Problem 18
let paragraph2="The quick brown fox jumps over the lazy dog";
let count=0;
for(let i=0; i<paragraph2.length; i++){
   if(paragraph2.slice(i,i+3) == "the" || paragraph2.slice(i,i+3) == "The"){
      console.log(paragraph2.slice(i,i+3));
      count=count + 1;
   }
}
console.log("Text ==>",paragraph2);
console.log(`There are ${count} occurence of the word the`);

 




 

 


