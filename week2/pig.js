let word = prompt("Enter a word to find the piglatin translation.");
let firstLetter = word.charAt(0);  
let secondLetter = word.charAt(1);
let vowels = "aeiouAEIOU" 
let consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
//console.log(firstLetter);
//console.log(secondLetter);

let newWord1 = word.slice(1);
let newWord2 = word.slice(2);
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
