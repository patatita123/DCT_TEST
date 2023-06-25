/**
* Encuentra la palabra más larga en una cadena de texto.
* @param {string} sen - Cadena de texto a analizar.
* @returns {string|undefined} - La palabra más larga encontrada.
*/
function LongestWord(sen) {
    // Dividir la cadena en un array de palabras
    sen = sen.split(" ");
   
    // Inicializar la variable para almacenar la palabra más larga
    var longst = sen[0];
   
    // Iterar sobre cada palabra en el array
    for (i = 0; i < sen.length; i++) {
      
      
      // Si la longitud de la palabra actual es mayor  a la longitud de la siguiente palabra,
      // actualizar la palabra más larga actual
      if (sen[i].length > longst.length) {
        longst = sen[i];
      }
    
    }
    // retornar la palabra más larga 
    return longst;
   }
   
   // Ejemplo de uso:
   console.log(LongestWord("un parangaricutirimicuaro de tangamandapio come un tamarindo con su esternocleidomastoideo"));