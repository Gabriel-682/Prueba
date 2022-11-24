var array = ["hola", "como", "estas", "hola", "estas", "hola"];
var resultado = {};
array.map((elemento) =>
resultado[elemento] ? resultado[elemento]++ : resultado[elemento] = 1);

console.log(resultado);

