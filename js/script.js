//  ^ Dati due numeri randomici, voglio mostrare in pagina quale dei due sia piu grande


//  ^ due numeri randomici 
// * scelgo un numero minimo ( da 1 a 6 )
const minNumber = 1;
const maxNumber = 6;
const numberOfDices = 2;

const apiUrl = `https://flynn.boolean.careers/exercises/api/array/integers?min=${minNumber}&max=${maxNumber}&items=${numberOfDices}`;

const output = document.getElementById("output");
const primoDado = document.getElementById("primo-dado");
const secondoDado = document.getElementById("secondo-dado");


//  % vince il primo, vince il secondo, sono uguali

//  & chiamata axios 
axios.get(apiUrl)
.then( response => {
  console.log(response.data.response);
  const [primoNumero, secondoNumero] = response.data.response;

  console.log(secondoNumero);
  console.log(secondoNumero);

  let result = "Ha vinto il/la primo/a player!";

  if ( secondoNumero > primoNumero ){
    result = "Ha vinto il/la secondo/a player!";
  } else if (primoNumero === secondoNumero) {
    result = "Il risultato e' in parita'!";
  }

  primoDado.textContent = primoNumero;
  secondoDado.textContent = secondoNumero;

  output.textContent = result;

});
// & fine chiamata axios