
function contarLetras(letras) {
  var objeto = {}; 
  for(var i in letras){
      objeto[letras[i]] = ( objeto[letras[i]] || 0 ) + 1; // Incrementamos el valor si el elemento ya existe
  }
  console.log(objeto);
}

contarLetras("akjhrajshdsakjs");

// OTRO TEMA

var str = 'Me gusta tomar mucha agua';
var newArray = str.split(' ')
var resp = '';

for(var i = 0; i < newArray.length; i++){
resp += newArray[i].split('').reverse().join('');
}
console.log(resp);//eMatsugramotahcumauga

// OTRO

var str = 'Me gusta tomar mucha agua';
var newArray = str.split(' ')
var resp = [];

for(var i = 0; i < newArray.length; i++){
resp.push( newArray[i].split('').reverse().join(''));
}
console.log(resp.join(' '));