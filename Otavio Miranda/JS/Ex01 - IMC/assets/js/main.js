
const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inp)
});

function criaP () {
  const p = document.createElement('p');
  return p
}

function setResultado (msg) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP():
} 

function calcIMC() {
  const peso = document.querySelector('#peso');
  const altura = document.querySelector('#altura');
  const imc = peso / (altura * altura);
  console.log(imc);
}




/*
let peso = document.getElementById("peso") // em Kg
let altura = document.getElementById("altura") // em m
let imc = peso / altura
let resultado = ''

function imc (peso = null, altura = null) {

  if (imc < 18.5) {
    resultado = 'abaixo do peso'
  } else if (imc < 24.9){
    resultado = 'saudavel'
  } else if (imc < 29,9) {
    resultado = 'sobrepeso'
  } else if (imc < 34,9) {
    resultado = 'obesidade'
  } else if (imc < 39.9) {
    resultado = 'obesidade grave'
  } else {
    resultado = 'obesidade severa'
  }

}

function test() {
    
  alert("AAAAAAAAAAAAAAA");

}

*/