//let choiseUser = prompt("Scegliere pari o dispari").toLowerCase(); //Faccio scegliere all'utente tra pari o dispari

// Faccio selezionare all'utente la scelta pari o dispari da due bottoni nell'html
const pari = document.getElementById("pari");
const dispari = document.getElementById("dispari");
pari.addEventListener("click", (event) => {
  elaborazione("pari");
}); //bottone pari eseguirà la funzione con la sua scelta impostata a pari
dispari.addEventListener("click", (event) => {
  elaborazione("dispari");
}); //bottone dispari eseguirà la funzione con la sua scelta impostata a dispari

//Inserisco tutte le operazioni da fare in una funzione da richiamare quando l'utente preme un bottone
function elaborazione(pariODispari) {
  let choiseUser = pariODispari;
  let numberUser = NaN; //Faccio inserire all'utente un numero tra 1 e 5

  let checkNumberUser = false;
  while (checkNumberUser === false) {
    numberUser = parseInt(prompt("Inserire un numero tra 1 e 5"));
    if (isNumber(numberUser)) {
      if (isIncludedRange(numberUser, 1, 5)) {
        checkNumberUser = true;
      }
    }
  }

  const numberPc = numberRandom(1, 5); //Faccio generare da pc un numero random tra 1 e 5

  const sumUserPc = numberUser + numberPc; // sommo i numeri user e pc
  let sumEvenShots = "dispari "; //definisco per default la loro somma dispari

  if (isEven(sumUserPc)) {
    // se la somma è pari allora cambio il valore di default in pari
    sumEvenShots = "pari";
  }

  messaggio = "Hai perso"; //imposto messaggio di default perdente
  if (sumEvenShots === choiseUser) {
    // se la scelta dell'utente è uguale alla condizione pari o dispari della somma dei deu numeri allora il messaggio è vincente
    messaggio = "Hai vinto";
  }
  alert(`${messaggio}`); // stampo messaggio

  console.log(
    "scelta utente:",
    choiseUser,
    "numero utente:",
    numberUser,
    "numero pc:",
    numberPc,
    "somma pc e utente:",
    sumUserPc,
    "=",
    sumEvenShots
  );
}
