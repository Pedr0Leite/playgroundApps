// var values = [
//     null, // false 1
//     NaN, // false 1
//     Infinity, // true 1
//     -Infinity, // false 0 -> True
//     undefined, // false 1
//     Number.MAX_VALUE, // true 1
//     Number.MIN_VALUE, // true 1
//     0, // true 0 -> False
//     -0, // false 1
//     -1, // true 1
//     "0", // true 1
//     0n, //false 1
//     new Number(0), // true 1
//     0.00000, //true 0 -> False
//     "0.00000", //true 1
//     0.000001, //true 1
//     `${1-1}`, //true 1
//     `${""}`, //true 0 -> False
//     ``, //false 1
//     "", //false 1
//     "false", //true 1
//     [], //true 1
//     {}, //true 1
//     [0].length, //true 1
//     [0][0], //false 0 -> True
//     [][0], //false 1
//     [][1] //false 1
//    ]
//     .map(function(value) {
//         return {
//               value: value,
//               result: trueOrFalse(value),
//           };
//     }); 
    
//   function trueOrFalse(value) {
//       return value ? "Truthy" : "Falsy";
//   }
// //   console.log(values);



/*The Challenge (from the internet):
Write a function, FindIntersection, that reads an array of strings which will contain two elements: 
the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). 
Your goal is to return a string of numbers that occur in both elements of the input array in sorted order. If there is no intersection, return the string "false".*/
var inputArray = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];

var FindIntersection = function (array) {
    const values1 = array[0].split(", ");
    const values2 = array[1].split(", ");
    let values3 = [];

    values1.forEach(x => {
        const number = parseInt(x);
        values2.forEach(y => {
            const number2 = parseInt(y); 
            if(number === number2){
                values3.push(number);
            }
        })      
    }
        );

    return values3;
}

console.log(FindIntersection(inputArray));


