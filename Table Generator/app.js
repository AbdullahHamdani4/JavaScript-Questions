
//Dice roller using switch statements
let dice=Math.ceil(Math.random() * 7)
switch (dice) {
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    case 4:
        console.log("four");
        break;
    case 5:
        console.log("five");
        break;
    case 6:
        console.log("six");
        break;

    default:
        console.log("Enter valid dice number");
        break;
}