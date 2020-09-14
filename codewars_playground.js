// // Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. 

// const { default: Axios } = require("axios");

// //If the two numbers are equal return a or b.
// function getSum( a,b ){
//     var numbers = [];
//     if(b > a){
//         for(let i = a; i <= b; i++){
//             numbers.push(i);
//         }
//     }else{
//         for(let i = b; i <= a; i++){
//             numbers.push(i);
//         }
//     }
    
//     return numbers.reduce((x,y) => x + y, 0);
// }

// //or

// function getSum( a,b ){
// if(a === b){
//     return a;
// }else if(a < b){
//     return a + getSum(a+1, b);
// }else{
//     return a + getSum(a-1,b);
// }
// }

// //  console.log(getSum(0, -1));
 

//  //------------------------------------------------------
// //  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// //Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.


// function solution(number){
//     let arrayOfNumbers = [];
//     let valueNumbers = [];
//     for(let i = 0; i < number; i++){
//         arrayOfNumbers.push(i);
//     };
//     arrayOfNumbers.forEach(value =>{
//         if(value % 3 == 0 || value % 5 == 0){
//             valueNumbers.push(value);
//         }
//     });
    
//     return valueNumbers.reduce((x,y) => x + y, 0);
// }

// // console.log('solution :', solution(10));

//  //------------------------------------------------------
// //  A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. 
// //  In this Kata, we will restrict ourselves to decimal (base 10).

// function narcissistic(value) {
//     let numbers = value.toString().split("");
//     let exponencial_number = numbers.length;
//     let numbers_calc = [];
    
//     numbers.forEach(x => numbers_calc.push(Math.pow(x, exponencial_number)));
    
//     let result = numbers_calc.reduce((x,y) => x + y, 0);

//     return (value === result) ? true : false;
// }

// // console.log('narcissistic :', narcissistic(2345));

// //-------
// // There must be a function for each number from 0 ("zero") to 9 ("nine")
// // There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// // Each calculation consist of exactly one operation and two numbers
// // The most outer function represents the left operand, the most inner function represents the right operand
// // Divison should be integer division. For example, this should return 2, not 2.666666...:

// function theNumber(num, func){
//     if(func === undefined){
//       return num;
//     }else{
//       return func(num);
//     }
//   }
  
//   function zero(func) {return theNumber(0, func);}
//   function one(func) {return theNumber(1, func);}
//   function two(func) {return theNumber(2, func)}
//   function three(func) {return theNumber(3, func)}
//   function four(func) {return theNumber(4, func)}
//   function five(func) {return theNumber(5, func);}
//   function six(func) {return theNumber(6, func)}
//   function seven(func) {return theNumber(7, func)}
//   function eight(func) {return theNumber(8, func)}
//   function nine(func) {return theNumber(9, func)}
  
//   function plus(x) {
//     return function(y){
//       return y + x;
//       };
//       }
//   function minus(x) {
//     return function(y){
//       return y - x;
//       };
//       }
//   function times(x) {
//     return function(y){
//       return y * x;
//       };
//       }
//   function dividedBy(x) {
//     return function(y){
//       return Math.floor(y / x);
//       };
//       }
  
//   one(plus(five()));

// //--------------------------------
// //ROT13


// function rot13(str) {
//     var first_up = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//     var first_dwn = 'abcdefghijklmnopqrstuvwxyz';
//     var second_up = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
//     var second_dwn = 'nopqrstuvwxyzabcdefghijklm';
//     let str_split = str.split('');

//     for(var i = 0; i < str_split.length; i++){
//         if(first_up.indexOf(str_split[i]) != -1){
//             str_split[i] = second_up[first_up.indexOf(str_split[i])];
//         }else if(first_dwn.indexOf(str_split[i]) != -1){
//             str_split[i] = second_dwn[first_dwn.indexOf(str_split[i])];
//         }
//     }
    
//     return str_split.join("");
    
//     }
    
//     // console.log(rot13("EBG13 rknzcyr."));

//     //-------------------
//     //The Hashtag Generator

// //     " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// // "    Hello     World   "                  =>  "#HelloWorld"
// // ""                                        =>  false

// var test1 = "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
// var test2 = "";
// var test3 = " Hello there thanks for trying my Kata                           ";
// var test4 = "code" + " ".repeat(140) + "wars";
// var test5 = " ".repeat(200);
// var test6 = "Do We have A Hashtag";

//     function generateHashtag(str) {
//         let finalStr = [];
//         str = str.replace(/\s+/g, " ");
//         if(str.length < 1 || str.length >= 140 || !str.replace(/\s/g, '').length){
//             return false
//         }else{
//         let temp_str = str.trim().split(" ");
//         for(var i = 0; i < temp_str.length; i++){
//             finalStr.push(temp_str[i][0].toUpperCase()+temp_str[i].slice(1));
//         }
//         return "#" + finalStr.join("");
//     }
// }

// // console.log('generateHashtag(test1) :', generateHashtag(test1));
// // console.log('generateHashtag(test2) :', generateHashtag(test2));
// // console.log('generateHashtag(test3) :', generateHashtag(test3));
// // console.log('generateHashtag(test4) :', generateHashtag(test4));
// // console.log('generateHashtag(test5) :', generateHashtag(test5));
// // console.log('generateHashtag(test6) :', generateHashtag(test6));

 //-------------------------------------------------------------------------------------------
// Sum Strings as Numbers
// sumStrings('1','2') // => '3'

// function sumStrings(a,b) {
//     let n1 = [...a].reverse();
//     // console.log('n1 :', n1);
//     let n2 = [...b].reverse();
//     // console.log('n2 :', n2);
//     let nextV = 0;
//     let arr = [];
//     if(n1.length < n2.length){
//       for(let i = 0; i < n2.length; i++){
//         let sum = Number(n2[i]) + Number(n1[i]) + nextV;
//         if(sum.length > 1){
//           sum = sum.sumStrings()
//           }
//           console.log('sum :', sum);
//           console.log('nextV :', nextV);
//         arr.push(sum);
//       }
//       console.log(arr);
//     }else if(n1.length > n2.length){

//     }else{

//     }

    
// }

// console.log(sumStrings('123','4567')); //'579'
// console.log(sumStrings('712569312664357328695151392','8100824045303269669937')); //712577413488402631964821329
// console.log(Number.MAX_SAFE_INTEGER);
//ITS STILL NOT DONE!!!!

//  //-------------------------------------------------------------------------------------------


// //Next smaller number with the same digits
// // nextSmaller(21) == 12
// // nextSmaller(531) == 513
// // nextSmaller(2071) == 2017
// // nextSmaller(9) == -1
// // nextSmaller(111) == -1
// // nextSmaller(135) == -1
// // nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros

// function nextSmaller(n) {
//     let arrayOfNumbers = n.toString().split("");
//     // console.log('arrayOfNumbers :', arrayOfNumbers);
//     if(n.length > 1 || arrayOfNumbers.every(x => x === arrayOfNumbers[0]) == true){
//         return -1;
//     }else{
//         function combinations(numbers){
//                 let combinationOfNumbers = [];
//                 for (let i = 0; i < numbers.length; i++) {
//                 let rest = combinations(numbers.slice(0, i).concat(numbers.slice(i + 1)));
//                   if(!rest.length) {
//                     combinationOfNumbers.push([numbers[i]])
//                   } else {
//                     for(let j = 0; j < rest.length; j++) {
//                         combinationOfNumbers.push([numbers[i]].concat(rest[j]))
//                     }
//                   }
//                 }
//                 return combinationOfNumbers;
//         }

//         let allCombinations = combinations(arrayOfNumbers);
//         let finalCombinations = [];
//         allCombinations.forEach(x => finalCombinations.push(x.join("")));
//         // console.log('finalCombinations :', finalCombinations);
//         let lowestNumber = Math.min(...finalCombinations).toString();
//         // console.log('lowestNumber :', lowestNumber.length);
//         if(lowestNumber.length != n.toString().length){
//             return -1;
//         }else{
//             return Number(lowestNumber);
//         }
        
//     }
    
//   }

//   //ITS STILL NOT DONE!!!!
// //   console.log('21: ' + nextSmaller(21));
// //   console.log('123456798: ' + nextSmaller(123456798)); //123456789
// //   console.log('531: ' + nextSmaller(531));
// //   console.log('1027: ' + nextSmaller(1027));
// //   console.log('9: ' + nextSmaller(9));
// //   console.log('135: ' + nextSmaller(135));
// //   console.log('111: ' + nextSmaller(111));

//  //-------------------------------------------------------------------------------------------


// // Number of trailing zeros of N!
// // zeros(6) = 1
// // # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

// // zeros(12) = 2
// // # 12! = 479001600 --> 2 trailing zeros

// function zeros (n) {
//     let allNumbers = [...Array(n+1).keys()];
//     allNumbers.shift();
//     // console.log('allNumbers :', allNumbers);
//     const reducerFunc = (acc,number) => acc * number;
//     let finalNumber = allNumbers.reduce(reducerFunc).toString();
//     console.log('finalNumber :', BigInt(Number(finalNumber)));
//     // for(var i = 0; i < finalNumber.length; i++){
//         // while(finalNumber.length > 0 && finalNumber[finalNumber.length - 1] == "0"){
//             //https://brilliant.org/wiki/trailing-number-of-zeros/
//             let count = 0;
//         if(finalNumber[finalNumber.length - 1] == "0"){
//             count++
//             finalNumber = finalNumber.slice(-1);
//         }
//         // console.log('something: ' + finalNumber[i])
//         //finalNumber.slice(-1)
//     // }
//     return count;
//   }

// //   console.log('zeros(0) :', zeros(0));
// //   console.log('zeros(5) :', zeros(5));
// //   console.log('zeros(6) :',  zeros(6));
// //   console.log('zeros(30) :', zeros(30));
//-------------------------------------------------------------------------
// // PaginationHelper


// function PaginationHelper(collection, itemsPerPage){
//     this.collection = collection;
//     this.itemsPerPage = itemsPerPage;
//   }
  
//   // returns the number of items within the entire collection
//   PaginationHelper.prototype.itemCount = function() {
//     return this.collection.length;
//   }
  
//   // returns the number of pages
//   PaginationHelper.prototype.pageCount = function() {
//     return Math.ceil(this.collection.length / this.itemsPerPage);
//   }
  
//   // returns the number of items on the current page. page_index is zero based.
//   // this method should return -1 for pageIndex values that are out of range
//   PaginationHelper.prototype.pageItemCount = function(p) {
//     if(p < this.pageCount() && (typeof p == 'number') && (p > 0)){
//      let temp = (Math.min(this.itemsPerPage, this.collection.length - p * this.itemsPerPage));
//       return temp;
//     }else{
//       return -1;
//     }
//   }
  
//   // determines what page an item is on. Zero based indexes
//   // this method should return -1 for itemIndex values that are out of range
//   PaginationHelper.prototype.pageIndex = function(itemIndex) { 
//     let arrCollection = this.collection;
//     let arrIndex = this.collection[itemIndex];
//     let itemsPerPage = this.itemsPerPage;
//   try{
//     var numberOfPage = (itemIndex <= this.itemCount() && itemIndex >= 0 && arrCollection != "") ?
//      (function getIndex(){
//     function split(array, n) {
//   let [...arr]  = array;
//   var res = [];
//     while (arr.length) {
//       res.push(arr.splice(0, n));
//     }
//     return res;
//   }
//   var tempValue = arrIndex;
//   var temp = split(arrCollection, itemsPerPage);
//   //get index
//   const reduceMethod = temp.reduce((acc, arr, index)=>{
//   if(arr.includes(tempValue)){
//     return acc + index
//   }else{
//     return acc
//   }
//   }, 0)
//   return reduceMethod;
//   })()
//      : -1;
//     return numberOfPage;
//   }catch(e){
//     console.log('ERROR: ' + e);
//   }
  
//   }  
  
//   var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
  // console.log('pageCount: ' + helper.pageCount()); //should == 2
  // console.log('ItemCount: ' + helper.itemCount()); //should == 6
//   console.log('pageItemCount: ' + helper.pageItemCount(-1));
//   console.log('pageItemCount: ' + helper.pageItemCount(0)); //should == 4
//   console.log('pageItemCount: ' + helper.pageItemCount(1)); // last page - should == 2
//   console.log('pageItemCount: ' + helper.pageItemCount(2)); // should == -1 since the page is invalid
//   console.log('pageItemCount: ' + helper.pageItemCount(true));
//   console.log('pageItemCount: ' + helper.pageItemCount("a"));
  
  // // pageIndex takes an item index and returns the page that it belongs on
  // console.log("pageIndex: " + helper.pageIndex(5)); //should == 1 (zero based index)
  // console.log("pageIndex: " + helper.pageIndex(2)); //should == 0
  // console.log("pageIndex: " + helper.pageIndex(20)); //should == -1
  // console.log("pageIndex: " + helper.pageIndex(-10)); //should == -1
  //-------------------------------------------------------------------------
  //Vector Class
//  class Vector {
//     constructor(components) {
//       this.components = components;
//     }

//     get length(){
//       return this.components.length
//     }

//     add(vector){
//       const addFunction = (elements, i) => elements + vector.components[i];
//       const components = this.mapVectorElements(vector, addFunction);
//       return new Vector(components);
//     }
  
//     subtract(vector){
//       const subtractFunction = (elements, i) => elements - vector.components[i];
//       const components = this.mapVectorElements(vector, subtractFunction);
//       return new Vector(components);
//     }
  
//     dot(vector){
//       const multiplyFunction = (elements, i) => elements * vector.components[i];
//       const components = this.mapVectorElements(vector, multiplyFunction);
//       return components.reduce((components, acc) => components + acc);
//     }
  
//     norm(){
//       return Math.sqrt(this.components.reduce((sum, element) =>{
//         return sum + element * element;
//       }, 0))
//     }

//     equals(vector){
//       return this.components.every((element, i) => element === vector.components[i]);
//     }
  
//     toString() {
//       return `(${this.components})`;
//     }

//     mapVectorElements(vector, func){
//       if(vector.length != this.length){
//         throw new Error('Vectors must have the same length');
//       }
//       const elements = this.components.map(func);
//       return elements;
//     }
//   };
  
  
  // var a = new Vector([1, 2, 3]);
  // var b = new Vector([3, 4, 5]);
  // var c = new Vector([5, 6, 7, 8]);
  
  // console.log('Add b: ' + a.add(b));      // should return a new Vector([4, 6, 8])
  // console.log('Subtract: ' + a.subtract(b)); // should return a new Vector([-2, -2, -2])
  // console.log('Dot: ' + a.dot(b));      // should return 1*3 + 2*4 + 3*5 = 26
  // console.log('Norm: ' + a.norm());      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
  // // console.log('Add c: ' + a.add(c));      // throws an error
  // console.log('Every: ' + a.add(b).equals(new Vector([4,6])));

//-------------------------------------------------------------------------
  //Luck check
//   In some countries of former Soviet Union there was a belief about lucky tickets. 
//   A transport ticket of any sort was believed to posess luck if sum of digits on the left half of its number was equal to the sum of digits on the right half. 
//   Here are examples of such numbers:

//   003111    #             3 = 1 + 1 + 1
// 813372    #     8 + 1 + 3 = 3 + 7 + 2
// 17935     #         1 + 7 = 3 + 5  // if the length is odd, you should ignore the middle number when adding the halves.
// 56328116  # 5 + 6 + 3 + 2 = 8 + 1 + 1 + 6

// function luckCheck(ticket){
//   let value = ticket.toString();
//   let ticketLength = value.length;
//   let first = [...value.slice(0, Math.floor(ticketLength / 2))].reduce((a,b)=> Number(a) + Number(b), 0);
//   let second = [...value.slice(Math.ceil(ticketLength / 2))].reduce((a,b)=> Number(a) + Number(b), 0);
//   return first == second ? true : false;
// }

// console.log(luckCheck(8139372));
//-------------------------------------------------------------------------
//Sort Numbers

// function solution(nums){
//   if(nums == null || nums == ""){
//     return []
//     }else{
//     return nums.sort((a,b) => {return a -b})
//   }
//     }

//     console.log(solution([1, 2, 10, 50, 5])); // should return [1,2,5,10,50]
//     console.log(solution(null)); // should return []

//-------------------------------------------------------------------------
//Berlin Clock

//Top Light = ON == Odd || OFF == Even seconds
//First Row: 4 blocks, 5 full hours (Full is all turned off == 20h)
//Second Row: 4 blocks, 1 full hour (Full is all turned off == 5h)
//Third Row: 11 blocks, 5 min each(Full is all turned off == 60min) (the red ones also denoting 15, 30 and 45 minutes past)
//Forth Row: 4 blocks: 1min each (Full is all turned off == 5min)
//"O" == Light off
//"R" == Red light
//"Y" == Yellow light

// Example Test Case:
// Input String:
// 12:56:01

// Output String:
// O
// RROO
// RROO
// YYRYYRYYRYY
// YOOO

// function berlinClock(time) {
//   let timeArr = time.split(":"); //timeArr : [ '12', '56', '01' ]
//   let n1 = Number(timeArr[0]);
//   let tempNumH1 = Math.floor((n1 - Number(timeArr[0][1])) / 4);
//   let tempNumH2 = Math.floor((Number(timeArr[0][1])));
//   let n2 = Number(timeArr[1]);
//   let n3 = Number(timeArr[2]);
//   //Seconds
//   let seconds = ((n3/2 % 0) || (n3 != 0)) ? 'O' : 'Y';
//   //Hours
//   let hoursR1 = "R".repeat(tempNumH1 < 5 ? tempNumH1 : tempNumH1 - 1);
//   if(hoursR1.length < 4)
//   hoursR1 = hoursR1 + "O".repeat(4 - hoursR1.length);
//   let hoursR2 = "R".repeat(tempNumH2 < 5 ? tempNumH2 : tempNumH2 - 1);
//   if(hoursR2.length < 4)
//   hoursR2 = hoursR2 + "O".repeat(4 - hoursR2.length);
//   //Minutes
//   let tempMinutes = "Y".repeat(Math.floor(n2 / 5));
//   tempMinutes = tempMinutes + "O".repeat(11 - tempMinutes.length);
//   let minutesArr = [...tempMinutes];
//   for (let i = -1; i < minutesArr.length; i+=3) {
//     if(minutesArr[i] == "Y"){
//       minutesArr[i] = "R";
//     }
//   }
//   let minutesR1 = minutesArr.join("");
//   let minutesR2 = (timeArr[1][1] < 5) ? ("Y".repeat(timeArr[1][1])) : ("Y".repeat(timeArr[1][1] - 5));
//   minutesR2 = minutesR2 + "O".repeat(4 - minutesR2.length);

//   return `${seconds}\n${hoursR1}\n${hoursR2}\n${minutesR1}\n${minutesR2}`;
// }


// console.log("first: " , berlinClock("12:56:01"));
// // "O\nRROO\nRROO\nYYRYYRYYRYY\nYOOO")

// console.log("Second: " , berlinClock("00:00:00"));
// // "Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO")

// console.log("third: " + berlinClock("22:32:45")); 
// "O\nRRRR\nRROO\nYYRYYROOOOO\nYYOO")

// console.log(berlinClock("19:53:03")); 

//-------------------------------------------------------------------------

// Find the safest places in town
// Implement the function advice(agents, n) where

// agents is an array of agent coordinates.
// n defines the size of the city that Bassi needs to hide in, in other words the side length of the square grid.
// The function should return a list of coordinates that are the furthest away (by Manhattan distance) from all agents.

// Edge cases:

// If there is an agent on every grid cell, there is no safe space, so return an empty list.
// If there are no agents, then every cell is a safe spaces, so return all coordinates.
// if n is 0, return an empty list.
// If agent coordinates are outside of the map, they are simply not considered.
// There are no duplicate agents on the same square.
// var testArr = [[2,5], [3,6], [5,6], [1,1]];

// function advice(agents, n) {
//   if(n === 0 || agents.length === n*n) return [];
//   const allCoords = buildCoordinates(n);
//   if(agents.length === 0 ) return buildCoordinates(n);
//   let test  = distanceBetweenAgents(agents)
//   return test;

// }

// function distanceBetweenAgents(agents){
//   let distance = [];
//   agents.forEach((a, index) =>{
//     for(var i = index + 1; i < agents.length; i++){
//       distance.push((Math.abs(a[0] - agents[i][0]) +
//       Math.abs(a[1] - agents[i][1])));
//      }
//   })
//   return distance;
// }



// function buildCoordinates(n){
//   let array = [];
//   for(var x = 0; x < n; x++){
//     for(var y = 0; y < n; y++){
//       array.push([x,y]);
//     }
//   }
//   return array;
// }

// console.log(advice(testArr, 8));

//-------------------------------------------------------------------------
// 16+18=214 - DO IT WITH LESS THAN 21 lines
// For this Kata you will have to forget how to add two numbers together.

// The best explanation on what to do for this kata is this meme:

function add(num1, num2) {
  let x = [...num1.toString()];
  let y = [...num2.toString()];
  console.log(`${x} and ${y}`);
}

console.log(add(1222, 30277));