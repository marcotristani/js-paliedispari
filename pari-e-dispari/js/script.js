let choiseUser = prompt("Scegliere pari o dispari").toLowerCase(); //Faccio scegliere all'utente tra pari o dispari
let numberUser = parseInt(prompt("Inserire un numero da 1 a 5"));  //Faccio inserire all'utente un numero tra 1 e 5

let numberpc = numberRandom(1 , 5);

console.log(choiseUser, numberUser , numberpc);