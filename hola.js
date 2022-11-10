var nombre = "fernando";

var array = nombre.split("");

array.forEach(function (elemento, indice, array) {
  if (indice === 0) {
   array.shift();
   array.unshift(elemento.toUpperCase()); 
  }
});

var resultado = array.join("");

console.log(resultado);