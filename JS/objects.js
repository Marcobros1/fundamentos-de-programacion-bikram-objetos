//Objetos para el alumno
let Portatil = {"marca": "Asus", "modelo": "A33"};
let O_Error = {"codigo": 404};
let Concierto = {"grupos": ["Twenty One Pilots", "AC/DC", "Queen"], "cartelera": ["Queen"], "fecha": null};
let Grupo = {"integrantes": ["Pedro", "Paula", "Soledad"], "numIntegrantes": 3};
let Impresora = {"tinta": {"rojo": 75, "verde": 33, "azul": 2}, imprimiendo: null};
let Pantalla = {"pixeles": [["#333", "#123", "#9AF"], ["#777", "#444", "#444"], ["#333", "#444", "#7A7F9D"]], "dimensiones": "1080X720"};
let Movil = {"especificaciones": { "ancho": 1920, "altura": 1080 }, "temperatura": "50º"};
let powered = (Math.round(Math.random()) ? true : false)
let Led = {"rojo": "FF", "verde": "00", "azul": "00", "encendido": powered};

// Export condicional: solo existe al ejecutar con Node (node index.js).
// En el navegador este bloque no se ejecuta y todo sigue funcionando igual.
if (typeof module !== "undefined") {
    module.exports = { Portatil, O_Error, Concierto, Grupo, Impresora, Pantalla, Movil, powered, Led };
}