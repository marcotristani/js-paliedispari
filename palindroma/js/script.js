//Chiedere a utente parola di tipo stringa

//const wordUser = prompt("Inserire una parola:")
const ceckWordUserNegative = "ciao";  //Forzo sistema per provarlo con parola non palindroma
const ceckwordUserPositive = "Anna";  //Forzo sistema per provarlo con parola palindroma

//Creare funzione per verificare se la parola che gli forniamo è palindroma
function ceckPalindrome(word) {// Prendere la parola fornita 
    // Salvare la parola dell'utente in una variabile
    const wordOriginal = word.toLowerCase(); // Forzo tutti i valori minuscoli così nel caso in cui l'utente abbia inserito
                                             //   valori maiuscoli e minuscoli nella stessa stringa quando poi vado a confrontarli
                                             // non mi darà disugualianze dovute al maiuscolo o minuscolo
                                          
    // Salvare la parola invertita tramite ciclo for in una seconda variabili
    let wordReverse = "";
    for ( i = wordOriginal.length - 1; i >= 0; i--){
        wordReverse += wordOriginal[i];
    }
    console.log(wordOriginal, wordReverse);
    

}
   
   ceckPalindrome(ceckwordUserPositive);
 
   //Verificare se queste due variabili sono uguali
   // Se sono uguali allora la parola è palindroma altrimenti non è palindroma
   // Far ritornare fuori dala funzione il risultato( o direttamente con un output proprio alla funzione oppure con un return)
// Se risultato funzione torna con un return salvare questo valore in una variabile e stamparlo