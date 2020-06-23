// Convert hex to base64

var theString = '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d'; // this hex needs to be separated

// Should reproduce =  SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t

// function decodeStr(string){
//     let buffer = Buffer.from(string, 'base64');
//     // let hex = buffer.toString('hex').replace(/(.)(.)/g, '$1$2 ');
//     let dividedElements = buffer.toString('hex').replace(/(.)(.)/g, '$1$2 ');
//     console.log('dividedElements :', dividedElements);
    
// }

// console.log(decodeStr(theString));

function decodeStr(string){
    // let dividedElements = string.split(/[A-Za-z](?<=\[A-Za-z])/g);
    let dividedElements = [];
    for(var i = 0; i < string.length; i+=2){
        dividedElements.push(string.substring(i, i + 2));
    }
    return dividedElements;
}
console.log('decodeStr :', decodeStr(theString));