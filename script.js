//ELEMENTS
  const numbers = [];

//Generiamo i 5 numeri random
while (numbers.length < 5) {
  const num = Math.floor(Math.random() * 100) + 1;
  if (!numbers.includes(num)){
    numbers.push(num)
  }

}
//Inserisco i numbers in HTML
  const divNumbers = document.getElementById('numbers');

//E siccome sono numeri in una array utilizzo join che mi restituisce una stringa
  divNumbers.innerHTML = numbers.join(' ');

//Genero il time con setTimeOut 
  setTimeout(function() {
    divNumbers.innerHTML = ' ';
  },4000);

setTimeout(() => {
  const numeriUtente = [];
  for (let i = 1; i <= 5; i++) {
    const numeroUtente = parseInt(prompt(`Inserisci il numero ${i}`))
    numeriUtente.push(numeroUtente);
  }

  //Verifico se corrispondono ai numeri Random
  const equalNumbers = [];
  for (const numeroUtente of numeriUtente) {
    if (numbers.includes(numeroUtente)) {
      equalNumbers.push(numeroUtente);
    }
  }

  //Stampo il risultato
if (equalNumbers.length === 0) {
  document.getElementById('message2').textContent = ('Mi dispiace, i numeri inseriti non corrispondono. Riprova!');
} else {
  document.getElementById('message1').textContent = (`Complimenti! Hai trovato 
  ${equalNumbers.length} numeri: ${equalNumbers.join(' - ')}`);
}
},5000);












