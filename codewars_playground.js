// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. 
//If the two numbers are equal return a or b.
function getSum( a,b ){
    var numbers = [];
    if(b > a){
        for(let i = a; i <= b; i++){
            numbers.push(i);
        }
    }else{
        for(let i = b; i <= a; i++){
            numbers.push(i);
        }
    }
    
    return numbers.reduce((x,y) => x + y, 0);
}

//or

function getSum( a,b ){
if(a === b){
    return a;
}else if(a < b){
    return a + getSum(a+1, b);
}else{
    return a + getSum(a-1,b);
}
}

//  console.log(getSum(0, -1));
 

 //------------------------------------------------------
//  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.


function solution(number){
    let arrayOfNumbers = [];
    let valueNumbers = [];
    for(let i = 0; i < number; i++){
        arrayOfNumbers.push(i);
    };
    arrayOfNumbers.forEach(value =>{
        if(value % 3 == 0 || value % 5 == 0){
            valueNumbers.push(value);
        }
    });
    
    return valueNumbers.reduce((x,y) => x + y, 0);
}

// console.log('solution :', solution(10));

 //------------------------------------------------------
//  A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. 
//  In this Kata, we will restrict ourselves to decimal (base 10).

function narcissistic(value) {
    let numbers = value.toString().split("");
    let exponencial_number = numbers.length;
    let numbers_calc = [];
    
    numbers.forEach(x => numbers_calc.push(Math.pow(x, exponencial_number)));
    
    let result = numbers_calc.reduce((x,y) => x + y, 0);

    return (value === result) ? true : false;
}

// console.log('narcissistic :', narcissistic(2345));

//-------
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division. For example, this should return 2, not 2.666666...:

function theNumber(num, func){
    if(func === undefined){
      return num;
    }else{
      return func(num);
    }
  }
  
  function zero(func) {return theNumber(0, func);}
  function one(func) {return theNumber(1, func);}
  function two(func) {return theNumber(2, func)}
  function three(func) {return theNumber(3, func)}
  function four(func) {return theNumber(4, func)}
  function five(func) {return theNumber(5, func);}
  function six(func) {return theNumber(6, func)}
  function seven(func) {return theNumber(7, func)}
  function eight(func) {return theNumber(8, func)}
  function nine(func) {return theNumber(9, func)}
  
  function plus(x) {
    return function(y){
      return y + x;
      };
      }
  function minus(x) {
    return function(y){
      return y - x;
      };
      }
  function times(x) {
    return function(y){
      return y * x;
      };
      }
  function dividedBy(x) {
    return function(y){
      return Math.floor(y / x);
      };
      }
  
  one(plus(five()));

//--------------------------------
//ROT13


function rot13(str) {
    var first_up = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var first_dwn = 'abcdefghijklmnopqrstuvwxyz';
    var second_up = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
    var second_dwn = 'nopqrstuvwxyzabcdefghijklm';
    let str_split = str.split('');

    for(var i = 0; i < str_split.length; i++){
        if(first_up.indexOf(str_split[i]) != -1){
            str_split[i] = second_up[first_up.indexOf(str_split[i])];
        }else if(first_dwn.indexOf(str_split[i]) != -1){
            str_split[i] = second_dwn[first_dwn.indexOf(str_split[i])];
        }
    }
    
    return str_split.join("");
    
    }
    
    // console.log(rot13("EBG13 rknzcyr."));

    //-------------------
    //The Hashtag Generator

//     " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

var test1 = "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
var test2 = "";
var test3 = " Hello there thanks for trying my Kata                           ";
var test4 = "code" + " ".repeat(140) + "wars";
var test5 = " ".repeat(200);
var test6 = "Do We have A Hashtag";

    function generateHashtag(str) {
        let finalStr = [];
        str = str.replace(/\s+/g, " ");
        if(str.length < 1 || str.length >= 140 || !str.replace(/\s/g, '').length){
            return false
        }else{
        let temp_str = str.trim().split(" ");
        for(var i = 0; i < temp_str.length; i++){
            finalStr.push(temp_str[i][0].toUpperCase()+temp_str[i].slice(1));
        }
        return "#" + finalStr.join("");
    }
}

// console.log('generateHashtag(test1) :', generateHashtag(test1));
// console.log('generateHashtag(test2) :', generateHashtag(test2));
// console.log('generateHashtag(test3) :', generateHashtag(test3));
// console.log('generateHashtag(test4) :', generateHashtag(test4));
// console.log('generateHashtag(test5) :', generateHashtag(test5));
// console.log('generateHashtag(test6) :', generateHashtag(test6));

 //-------------------------------------------------------------------------------------------
//Sum Strings as Numbers
// sumStrings('1','2') // => '3'

function sumStrings(a,b) {
    let numberOne = Number(a);
    let numberTwo = Number(b); 
    let sum_of_numbers = (numberOne + numberTwo);
    console.log('sum_of_numbers :', BigInt(sum_of_numbers));
    return sum_of_numbers.toString();
}

console.log(sumStrings('123','456')); //'579'
console.log(sumStrings('712569312664357328695151392','8100824045303269669937')); //712577413488402631964821329
// console.log(Number.MAX_SAFE_INTEGER);
//ITS STILL NOT DONE!!!!

 //-------------------------------------------------------------------------------------------


//Next smaller number with the same digits
// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017
// nextSmaller(9) == -1
// nextSmaller(111) == -1
// nextSmaller(135) == -1
// nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros

function nextSmaller(n) {
    let arrayOfNumbers = n.toString().split("");
    // console.log('arrayOfNumbers :', arrayOfNumbers);
    if(n.length > 1 || arrayOfNumbers.every(x => x === arrayOfNumbers[0]) == true){
        return -1;
    }else{
        function combinations(numbers){
                let combinationOfNumbers = [];
                for (let i = 0; i < numbers.length; i++) {
                let rest = combinations(numbers.slice(0, i).concat(numbers.slice(i + 1)));
                  if(!rest.length) {
                    combinationOfNumbers.push([numbers[i]])
                  } else {
                    for(let j = 0; j < rest.length; j++) {
                        combinationOfNumbers.push([numbers[i]].concat(rest[j]))
                    }
                  }
                }
                return combinationOfNumbers;
        }

        let allCombinations = combinations(arrayOfNumbers);
        let finalCombinations = [];
        allCombinations.forEach(x => finalCombinations.push(x.join("")));
        // console.log('finalCombinations :', finalCombinations);
        let lowestNumber = Math.min(...finalCombinations).toString();
        // console.log('lowestNumber :', lowestNumber.length);
        if(lowestNumber.length != n.toString().length){
            return -1;
        }else{
            return Number(lowestNumber);
        }
        
    }
    
  }

  //ITS STILL NOT DONE!!!!
//   console.log('21: ' + nextSmaller(21));
//   console.log('123456798: ' + nextSmaller(123456798)); //123456789
//   console.log('531: ' + nextSmaller(531));
//   console.log('1027: ' + nextSmaller(1027));
//   console.log('9: ' + nextSmaller(9));
//   console.log('135: ' + nextSmaller(135));
//   console.log('111: ' + nextSmaller(111));

 //-------------------------------------------------------------------------------------------


// Number of trailing zeros of N!
// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros

function zeros (n) {
    let allNumbers = [...Array(n+1).keys()];
    allNumbers.shift();
    // console.log('allNumbers :', allNumbers);
    const reducerFunc = (acc,number) => acc * number;
    let finalNumber = allNumbers.reduce(reducerFunc).toString();
    console.log('finalNumber :', BigInt(Number(finalNumber)));
    // for(var i = 0; i < finalNumber.length; i++){
        // while(finalNumber.length > 0 && finalNumber[finalNumber.length - 1] == "0"){
            //https://brilliant.org/wiki/trailing-number-of-zeros/
            let count = 0;
        if(finalNumber[finalNumber.length - 1] == "0"){
            count++
            finalNumber = finalNumber.slice(-1);
        }
        // console.log('something: ' + finalNumber[i])
        //finalNumber.slice(-1)
    // }
    return count;
  }

//   console.log('zeros(0) :', zeros(0));
//   console.log('zeros(5) :', zeros(5));
//   console.log('zeros(6) :',  zeros(6));
//   console.log('zeros(30) :', zeros(30));

// PaginationHelper


function PaginationHelper(collection, itemsPerPage){
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  
  // returns the number of items within the entire collection
  PaginationHelper.prototype.itemCount = function() {
    return this.collection.length;
  }
  
  // returns the number of pages
  PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }
  
  // returns the number of items on the current page. page_index is zero based.
  // this method should return -1 for pageIndex values that are out of range
  PaginationHelper.prototype.pageItemCount = function(p) {
    if(p < this.pageCount() && (typeof p == 'number') && (p > 0)){
     let temp = (Math.min(this.itemsPerPage, this.collection.length - p * this.itemsPerPage));
      return temp;
    }else{
      return -1;
    }
  }
  
  // determines what page an item is on. Zero based indexes
  // this method should return -1 for itemIndex values that are out of range
  PaginationHelper.prototype.pageIndex = function(itemIndex) { 
    let arrCollection = this.collection;
    let arrIndex = this.collection[itemIndex];
    let itemsPerPage = this.itemsPerPage;
  try{
    var numberOfPage = (itemIndex <= this.itemCount() && itemIndex >= 0 && arrCollection != "") ?
     (function getIndex(){
    function split(array, n) {
  let [...arr]  = array;
  var res = [];
    while (arr.length) {
      res.push(arr.splice(0, n));
    }
    return res;
  }
  var tempValue = arrIndex;
  var temp = split(arrCollection, itemsPerPage);
  //get index
  const reduceMethod = temp.reduce((acc, arr, index)=>{
  if(arr.includes(tempValue)){
    return acc + index
  }else{
    return acc
  }
  }, 0)
  return reduceMethod;
  })()
     : -1;
    return numberOfPage;
  }catch(e){
    console.log('ERROR: ' + e);
  }
  
  }  
  
  var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
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
  