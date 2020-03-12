//HarckerRank - Day2 Loops

var word = "javascriptloops";

function vowelsAndConsonants(s) {
    let vowels = "aeiou";
    let consonats = "";
    let finalOrder = "";

    for(var i = 0; i < s.length; i++){
        if(vowels.includes(s[i])){
            finalOrder += s[i] + "\n";
        }else{
            consonats += s[i] + "\n";
        }
    }
    return finalOrder + consonats.trim()
}


// console.log('vowelsAndConsonants :', vowelsAndConsonants(word));

