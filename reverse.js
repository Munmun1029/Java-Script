const names = "Farhana Yeasmin";

let reverse = ""
for (const letter of names) {
    reverse = letter + reverse;
}
// console.log(reverse)    
let rev = ""
for (let i = 0; i < names.length; i++) {
    const letter = names[i];
    rev = letter+rev;
   
}
console.log(rev)