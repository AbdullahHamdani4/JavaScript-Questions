
// let mobilePkg= {
//     basic : {
//         price : 200,
//         duration :"monthly",
//         data : "2GB"

//     },
//     professional :{
//          price : 2000,
//         duration :"monthly",
//         data : "200GB"
//     },
//     ultimate : {
//          price : 5000,
//         duration :"monthly",
//         data : "200GB",
//         sharing:"5 Person"
//     }
// }
// console.log(mobilePkg.basic);
// console.log(delete mobilePkg.basic.data);
// console.log("data" in mobilePkg.ultimate);

//Problem 1 
var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }
];
console.log( "The Total bill will be",
    parseInt(itemsArray[0].price) * itemsArray[0].quantity +
    parseInt(itemsArray[1].price) * itemsArray[1].quantity +
    parseInt(itemsArray[2].price) * itemsArray[2].quantity +
    parseInt(itemsArray[3].price) * itemsArray[3].quantity
);

//Problem 2
let data = {
    name: "Abdullah",
    email: "abdullah.hamdani87@gmail.com",
    password: "hello123",
    age: 16,
    gender: "Male",
    city: "Karachi",
    country: "Pakistan",
};
console.log("Does data have age property ?", "age" in data);
console.log("Does data have country property ?", "country" in data);
console.log("Does data have lastname property ?", "firstname" in data);
console.log("Does data have lastname property ?", "lastname" in data);

//Problem 3
function constructor(name,email,password) {
    return {
        name:name,
        

    }
}

