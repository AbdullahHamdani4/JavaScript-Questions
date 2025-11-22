
//Table Genetor using function
function tableGenerator(userNumber = 5) {
 for (let i = 1; i <= 10; i++) {
        document.writeln(`<p>${userNumber}x${i} =${userNumber * i}</p>`);
    }
}
tableGenerator(10)

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