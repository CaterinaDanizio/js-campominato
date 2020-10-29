// CONSEGNA
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito

// VARIABILI GLOBALI
var numUser;
var score = 0;
var blackRandom = [];
var arrayUser = [];

// LOGICA
// Creare una funzione per generare 16 numeri random (e unici) da 1 a 100 e salvarli in un array
getNumRandom(100,1,16);

// Creare un prompt per chiedere all'utente un numero da 1 a 100 + check vari

var numUser = numberRequest(numUser, 84);


// FUNZIONI

  // Generazione numeri random

function getNumRandom(max, min, time){
  // blackRandom = [];
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
// var arrayUser = [];
var i = arrayUser;
while(arrayUser.length < time){
  var y = parseInt(prompt("Inserisci un numero da 1 a 100"));
  // Mettere come condizioni che il numero sia stato inserito solo una volta e non appartenga alla black list
    if (y <= 100 && arrayUser.includes(y) && blackRandom.indexOf(y) === -1) {
      console.log("Hai già inserito questo numero");
    }
    if(y <= 100 && arrayUser.indexOf(y) === -1 && blackRandom.indexOf(y) === -1  && score < time) {
    arrayUser.push(y);
    console.log("I numeri inseriti dall'utente sono ", arrayUser);


    // Per ogni numero corretto viene attribuito un punteggio
    score++;
    console.log("Il punteggio è ", score);
  }

  if (y > 100) {
    alert("Il numero è maggiore di 100. Riprova")
  }

  if (score < time) {
    var y = parseInt(prompt("Inserisci un numero da 1 a 100"));
  }

  else if (score = time) {
    alert("Complimenti HAI VINTO!");
  }


    // Verificare se il numero inserito si trova o no nella black list dei 16 numeri "bomba"
      // Se il numero è nella black list --> GAME OVER
    if (blackRandom.includes(y)) {
      console.log("Game over");
      return alert("Peccato, hai perso! Il tuo punteggio è " + score);
    }

    i++;
}
}
