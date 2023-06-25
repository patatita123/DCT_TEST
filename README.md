# DCT_TEST
 1. Código 1: JSON Cleaning
• Este código realiza una limpieza de un objeto JSON.
• Utiliza una función llamada obtenerData que recorre el objeto JSON y elimina las propiedades que tienen valores "N/A", "", o "-".
• La función también maneja casos de propiedades que son arreglos o subobjetos, realizando una limpieza recursiva en ellos.
• El código hace una solicitud HTTPS a una API para obtener un objeto JSON, y luego aplica la función obtenerData al objeto y muestra el resultado limpio en la consola.
2. Código 2: Longest Word
• Este código encuentra la palabra más larga en una cadena de texto.
• Utiliza la función LongestWord que recibe la cadena de texto como argumento.
• La cadena se divide en palabras utilizando el espacio como delimitador.
• Se inicializa una variable longst como la primera palabra de la cadena.
• Se itera sobre todas las palabras y se compara la longitud de cada palabra con la longitud de la siguiente palabra.
• La palabra más larga se asigna a la variable longst.
• Al final, se devuelve la palabra más larga.
3.Código 3: Min Window Substring
• Este código encuentra la subcadena de ventana mínima que contiene todos los caracteres de una cadena objetivo en una cadena de entrada.
• El algoritmo se implementa en la función MinWindowSubstring.
• Se utilizan bucles anidados para iterar sobre todas las posibles subcadenas de la cadena de entrada.
• Para cada subcadena, se verifica si contiene todos los caracteres de la cadena objetivo llamando a la función checkK.
• La función checkK verifica si una subcadena contiene todos los caracteres de la cadena objetivo.
• Si una subcadena cumple con los requisitos, se compara con la subcadena de ventana mínima actual y se actualiza si es más corta.
• Al final, se devuelve la subcadena de ventana mínima.

Estos tres códigos abordan diferentes problemas. El primero se enfoca en la limpieza de datos JSON, el segundo encuentra la palabra más larga en una cadena de texto, y el tercero encuentra la subcadena de ventana mínima que cumple con ciertas condiciones. Cada código tiene su función principal y utiliza algoritmos específicos para lograr su objetivo.
