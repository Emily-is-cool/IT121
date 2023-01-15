//Piglatin generator code by Emily Brune, January 14, 2023

let word = prompt("Enter a word to find the piglatin translation.");
//identify first and second letters
let firstLetter = word.charAt(0);  
let secondLetter = word.charAt(1);
let vowels = "aeiouAEIOU" 
let consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
//console.log(firstLetter);
//console.log(secondLetter);
//chop off the front of word types
let newWord1 = word.slice(1);
let newWord2 = word.slice(2);
//checks before output
//problem - somehow null value is in both vowels and consonants, length filter in place until I find a solution
if (word.length < 1) {
    console.log("Warning, no input detected!");
}

if ((vowels.includes(firstLetter)) && (word.length > 1)) {
   console.log(word + "way");
}
else if ((consonants.includes(firstLetter)) && (consonants.includes(secondLetter)) && (word.length > 1)) {
    console.log(word.slice(2) + firstLetter + secondLetter + "ay")
}
else if ((consonants.includes(firstLetter)) && (vowels.includes(secondLetter)) && (word.length > 1)) {
    console.log(word.slice(1) + firstLetter + "ay"); 
}
