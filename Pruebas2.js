  // Devolver un objeto con los pares clave-valor intercambiados.
  // Ej: intercambio({ nombre: "Fulano", apellido: "Rodriguez" }); devuelve => { Fulano: "nombre", Rodriguez: "apellido" }
  // NOTA: No utilizar métodos de Object (values, keys, entries);
  //
  // Tu código:
 var objeto = {nombre: "Fulano", apellido: "Rodriguez", invitado: true};
  // devuelve => { Fulano: "nombre", Rodriguez: "apellido" }

  // objeto[objeto.nombre] = "nombre";
  // delete objeto.nombre;
  // objeto[objeto.apellido] = "apellido";
  // delete objeto.apellido;

// function intercambio(objeto) {
//   objeto[objeto.nombre] = "nombre";
//   delete objeto.nombre;
//   objeto[objeto.apellido] = "apellido";
//   delete objeto.apellido;
//   return objeto;
// };

for (var prop in objeto) {
  objeto[objeto[prop]] = prop;
  console.log(objeto);
  delete objeto[prop];
  console.log(objeto);
}

console.log(objeto + "de nada.");
