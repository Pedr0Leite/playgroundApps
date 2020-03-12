//edabit - Concatenate Variable Number of Input Arrays

function concat(...args) {
    var arr = [];
    var temp = [...args]
    // console.log('temp :', temp);
    for(let i = 0; i < temp.length; i++) {
        arr = arr.concat(temp[i]);
        // console.log('arr :', arr);
        // console.log('temp[i] :', temp[i]);
    }
    return arr;
}

// console.log('concat: ' + concat([1, 2, 3], [4, 5], [6, 7]));

//edabit - Find the Largest Number in an Array

function findLargestNum(arr) {
	return Math.max(...arr);
}

// console.log('findLargestNum: ' + findLargestNum([4, 5, 1, 3]));

//edabit - Make a Circle with OOP

class Rectangle {
    constructor(sideA,sideB){
      this.sideA = sideA;
      this.sideB = sideB;
    }
    getArea(){
        return this.sideA*this.sideB
    };
    getPerimeter(){
        return (this.sideA + this.sideB) *2 
    };
  }
//   class Circle {
//     //put code here
//   }
//   ​


var t = new Rectangle(2,2); 
console.log(t.getArea());






