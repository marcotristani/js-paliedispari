let choiseUser = prompt("Scegliere pari o dispari").toLowerCase(); //Faccio scegliere all'utente tra pari o dispari
let numberUser = parseInt(prompt("Inserire un numero da 1 a 5"));  //Faccio inserire all'utente un numero tra 1 e 5

let numberPc = numberRandom(1 , 5); //Faccio generare da pc un numero random tra 1 e 5

const sumUserPc = numberUser + numberPc; // sommo i numeri user e pc
let sumEvenShots = "dispari ";           //definisco per default la loro somma dispari

if ( isEven( sumUserPc)) {               // se la somma è pari allora cambio il valore di default in pari
    sumEvenShots = "pari"
}

messaggio = "Hai perso";                //imposto messaggio di default perdente
if (sumEvenShots === choiseUser){       // se la scelta dell'utente è uguale alla condizione pari o dispari della somma dei deu numeri allora il messaggio è vincente
    messaggio = "Hai vinto";
}
alert(`${messaggio}`);                 // stampo messaggio

console.log(choiseUser, numberUser , numberPc, sumUserPc, sumEvenShots);