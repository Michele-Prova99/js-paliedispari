// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// 1) Chiedo all'utente di scrivere una parola con un prompt

var parolaUtente = prompt("Scrivi una parola");

// 2) Creo un funzione e ci inserisco l'argomento

palindroma(parolaUtente);

function palindroma (parola){

 // 3) Creo una varibile vuota per leggere la parola all'inverso

 var inverso = "";

 // 4) Creo un ciclo for per leggere la parola inserita dall'utente al contrario

 for (i = parola.length - 1; i >= 0; i--) {

   inverso += parola[i];
 }

 // 5) Impongo la prima condizione: stampare "Parola palindroma" in caso la parola si potesse leggere anche al contrario

 if (inverso == parola) {
    document.getElementById("text").innerHTML = "Parola palindroma";
 }

 // 6) Impongo la seconda condizione: stampare "Parola non palindroma" in caso la parola non si potesse leggere anche al contrario

 else {
    document.getElementById("text").innerHTML = "Parola non palindroma";
 }
}
