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
setTimeout(() => {
  divNumbers.innerHTML = ' ';
},5000);

//Genero i prompt per l'utente
  const numberiUtente = [];
  for (let i = 1; i <= 5; i++) {
    const numberoUtente = parseInt(prompt(`Inserisci il numero ${i}`))

    numberiUtente.push(numberoUtente);
  }

  //Verico se corrispondono ai numeri Random

