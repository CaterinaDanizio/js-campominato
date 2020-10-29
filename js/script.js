// CONSEGNA
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito

// LOGICA
// Creare una funzione per generare 16 numeri random (e unici) da 1 a 100 e salvarli in un array

getNumRandom(100,1,16);

// Creare un prompt per chiedere all'utente un numero da 1 a 100 + check vari

var numUser = numberRequest(numUser, 84);


// FUNZIONI

  // Generazione numeri random

function getNumRandom(max, min, time){
  blackRandom = [];
  var i = blackRandom;
while(blackRandom.length < time){
    var n = Math.floor(Math.random() * max) + min;
    if(blackRandom.indexOf(n) === -1) blackRandom.push(n);

    i++;
}
console.log("I numeri bomba sono ", blackRandom);

}

// Richiesta numero utente

function numberRequest(y, time){
var arrayUser = [];
var i = arrayUser;
while(arrayUser.length < time){
  var y = parseInt(prompt("Inserisci un numero da 1 a 100"));
  // Mettere come condizioni che il numero sia stato inserito solo una volta e non appartenga alla black list
    if (arrayUser.includes(y) && blackRandom.indexOf(y) === -1) {
      console.log("Hai già inserito questo numero");
    }
    if(arrayUser.indexOf(y) === -1 && blackRandom.indexOf(y) === -1) {
      arrayUser.push(y);
      console.log("I numeri inseriti dall'utente sono ", arrayUser);
    }
    // Verificare se il numero inserito si trova o no nella black list dei 16 numeri "bomba"
      // Se il numero è nella black list --> GAME OVER
    if (blackRandom.includes(y)) {
      return console.log("Game over");
    }

    i++;
}
}

// Per ogni numero corretto viene attribuito un punteggio

// Comunicare a fine partita il punteggio ottenuto
