
/**
* Limpiar y procesar un objeto JSON eliminando valores no deseados.
* @param {Object} obj - Objeto JSON a limpiar y procesar.
* @returns {Object} - Objeto JSON limpio y procesado.
*/
function obtenerData(obj) {
  // Iterar sobre las claves del objeto
  Object.keys(obj).forEach((key) => {
    // Eliminar propiedades con valores no deseados ("N/A", "", "-")
    if (obj[key] === "N/A" || obj[key] === "" || obj[key] === "-") {
      delete obj[key];
    }
    // Procesar propiedades que son arrays
    else if (Array.isArray(obj[key])) {
      let n = obj[key].length;
      let arr = [];
      for (let i = 0; i < n; i++) {
        // Ignorar valores no deseados en el array ("", "-", "N/A")
        if (obj[key][i] === "" || obj[key][i] === "-" || obj[key][i] === "N/A")
          continue;
        let p = [obj[key][i]];
 
        // Si el valor es un objeto, procesarlo recursivamente
        if (typeof p[0] === "object") {
          p[0] = obtenerData(p[0]);
        }
 
        arr = arr.concat(p);
      }
      obj[key] = arr;
    }
    // Procesar propiedades que son objetos
    else if (typeof obj[key] === "object") {
      obj[key] = obtenerData(obj[key]);
    }
  });
 
  return obj;
 }
 const https = require('https');
 // Realizar una solicitud GET a la URL especificada
 https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {
  // Escuchar los datos de respuesta
  resp.on("data", (a) => {
    // Parsear los datos como JSON
    let obj = JSON.parse(a.toString());
 
    // Limpiar y procesar el objeto JSON
    obj = obtenerData(obj);
 
    // Imprimir el objeto JSON limpio
    console.log(JSON.stringify(obj));
  });
 });
