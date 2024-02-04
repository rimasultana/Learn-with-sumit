const vowels = ["a","e","i","o","u","A","E","I","O","U"];

function constVowels(sentence){
    let count = 0;
    const letters = Array.from(sentence);
    letters.forEach(function(value){
        if(vowels.forEach(value)){
            count++;
        }
    });
    return count;
}
console.log(countVowels("I love Bangladesh"));