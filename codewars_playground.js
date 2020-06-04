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