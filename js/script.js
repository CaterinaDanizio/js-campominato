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
var blackRandom = [];
var arrayUser = [];

// LOGICA

  // Generazione numeri random
  var i = 0;
  while(blackRandom.length < 16) {
    var n = Math.floor(Math.random() * 100) + 1;
    if(blackRandom.indexOf(n) === -1) {blackRandom.push(n);
    i++;
    }
  }
console.log("I numeri bomba sono ", blackRandom);



// Richiesta numero utente
var minaTrovata = false;
var i = 0;
while(arrayUser.length < 84 && minaTrovata == false){
  var numeroUser = parseInt(prompt("Inserisci un numero da 1 a 100"));
  // Mettere come condizioni che il numero sia stato inserito solo una volta e non appartenga alla black list
    if (numeroUser <= 100 && arrayUser.includes(numeroUser) && blackRandom.indexOf(numeroUser) === -1) {
      alert("Hai già inserito questo numero");
    }
    if(numeroUser <= 100 && arrayUser.indexOf(numeroUser) === -1 && blackRandom.indexOf(numeroUser) === -1) {
    arrayUser.push(numeroUser);
    // debug
    console.log("I numeri inseriti dall'utente sono ", arrayUser);


    // Per ogni numero corretto viene attribuito un punteggio
    // debug
    console.log("Il punteggio è ", arrayUser.length);
  }

  // Se il numero è maggiore di 100

  if (numeroUser > 100) {
    alert("Il numero è maggiore di 100. Riprova")
  }

  // Se il giocatore totalizza 84 punti
  if (arrayUser.length === 84) {
    alert("Complimenti HAI VINTO!");
  }


  // Verificare se il numero inserito si trova o no nella black list dei 16 numeri "bomba"
    // Se il numero è nella black list --> GAME OVER
    if (blackRandom.includes(numeroUser)) {
      console.log("Game over");
      alert("Peccato, hai perso! Il tuo punteggio è " + arrayUser.length);
      minaTrovata == true;
    }

  i++;
 }
// }
