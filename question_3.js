/**
* Encuentra la subcadena de ventana mínima que contiene todos los caracteres de la cadena objetivo.
* @param {string[]} strArr - Un array que contiene la cadena de entrada y la cadena objetivo.
* @returns {string|null} - La subcadena de ventana mínima que contiene todos los caracteres de la cadena objetivo, o null si no se encuentra ninguna subcadena válida.
*/
function MinWindowSubstring(strArr) {
    // Inicializar la variable para almacenar la subcadena de ventana mínima
    var min = null;
   
    // Obtener la cadena de entrada y la cadena objetivo del array
    var n = strArr[0];
    var k = strArr[1];
   
    // Iterar sobre todas las posibles subcadenas de la cadena de entrada
    for (var i = 0; i < n.length; i++) {
      for (var j = i + 1; j <= n.length; j++) {
        // Obtener la subcadena actual
        var sub = n.slice(i, j);
   
        // Verificar si la subcadena contiene todos los caracteres de la cadena objetivo
        if (checkK(sub, k)) {
          // Si es así, actualizar la subcadena de ventana mínima si es la más corta encontrada hasta ahora
          if (min === null || sub.length < min.length) {
            min = sub;
          }
        }
      }
    }
   
    // Retornar la subcadena de ventana mínima
    return min;
   }
   
   /**
   * Verifica si una subcadena contiene todos los caracteres de la cadena objetivo.
   * @param {string} sub - La subcadena a verificar.
   * @param {string} k - La cadena objetivo.
   * @returns {boolean} - True si la subcadena contiene todos los caracteres de la cadena objetivo, False en caso contrario.
   */
   function checkK(sub, k) {
    // Convertir la cadena objetivo en un array de caracteres
    var h = k.split('');
   
    // Iterar sobre cada carácter en la subcadena
    for (var i = 0; i < sub.length; i++) {
      var char = sub[i];
      var index = h.indexOf(char);
      // Si el carácter está presente en la cadena objetivo, eliminarlo del array
      if (index > -1) {
        h.splice(index, 1);
      }
    }
   
    // Verificar si se eliminaron todos los caracteres de la cadena objetivo
    if (h.length === 0) {
      return true;
    } else {
      return false;
    }
   }
   
   // Ejemplo de uso:
   console.log(MinWindowSubstring(["aaabaaddae", "aaaae"]));