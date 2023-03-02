/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   nombreMayus = "";
   letra = nombre[0].toUpperCase();
   sinInicial = []
   for (i = 1; i < nombre.length; i++) {
      sinInicial.push(nombre.charAt(i))
   };
   aber = sinInicial.join("");
   nombreMayus = letra + aber;
   return nombreMayus
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes retornar nada.
   // Tu código:
   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   cb(num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   res = arrayOfNumbers.reduce((acc, item) => {
      return acc = acc + item
   })
   cb(res);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   for (i = 0; i < array.length; i++) {
      cb(array[i])
   };
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como argumento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   newArray = []
   for (i = 0; i < array.length; i++) {
      element = cb(array[i]);
      newArray.push(element)
   }
   return newArray
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos del arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   tieneA = [];
   for (i = 0; i < arrayOfStrings.length; i++) {
      if (arrayOfStrings[i].charAt(0) === "a") {
         tieneA.push(arrayOfStrings[i])
      } else {
         continue;
      }
   }
   return tieneA
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
