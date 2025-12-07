let choiseUser = prompt("Scegliere pari o dispari").toLowerCase(); //Faccio scegliere all'utente tra pari o dispari
let numberUser = parseInt(prompt("Inserire un numero da 1 a 5"));  //Faccio inserire all'utente un numero tra 1 e 5

let numberPc = numberRandom(1 , 5);

const sumUserPc = numberUser + numberPc;
let sumEvenShots = "dispari ";

if ( isEven( sumUserPc)) {
    sumEvenShots = "pari"
}

console.log(choiseUser, numberUser , numberPc, sumUserPc, sumEvenShots);