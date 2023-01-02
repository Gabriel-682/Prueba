  var array = [1, 2, 3, 4, 20, 25, 30];
  var array2 = [1, 1, 1, 1, 1];
  var array3 = ["hola", "cómo", "andás?", "andrea"]
  var numero = 9801;
  var texto = "fernando"
  var cont = 0;

  var objeto1 = {
    nombre : "Fer",
    email : "@nada",
    premium : false
  };
 
  var objeto2 = {
    nombre : "Fer",
    email : "@nada"
  };

 array.sort((a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
 });


  console.log(array[array.length - 1] - array[0]);