let word = prompt("Enter a word to find the piglatin translation.");
let firstLetter = word.slice(0, 1);  
let secondLetter = word.charAt(1);
let vowels = "aeiouAEIOU" 
let consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
//console.log(firstLetter);
//console.log(secondLetter);

let newWord1 = word.slice(1);
let newWord2 = word.slice(2);
console.log(newWord1)
console.log(newWord2);

if (vowels.includes(firstLetter)) {
   console.log(word + "way");
}
else if ((consonants.includes(firstLetter)) && (consonants.includes(secondLetter))) {
    console.log(word.slice(2) + firstLetter + secondLetter + "ay")
}
else if ((consonants.includes(firstLetter)) && (vowels.includes(secondLetter))) {
    console.log(word.slice(1) + firstLetter + "ay"); 
}

