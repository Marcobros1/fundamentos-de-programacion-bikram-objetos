//1. objeto Coche con las propiedades marca, modelo y matricula
const Coche = {
    marca: "opel",
    modelo: "corsa",
    matricula: "1234 ABC"
};
//console.log("1. Coche =", Coche);

//2. objeto Casa con las propiedades codPostal, calle, portal y piso
const Casa = {
    codPostal: 12345,
    calle: "puerta del Sol",
    portal: 1,
    piso: 1
};
//console.log("2. Casa =", Casa);

//3. objeto FullStackDeveloper con los arrays lenguajes y proyectos
const FullStackDeveloper = {
    lenguajes: ["Javascript", "Python", "Java", "PHP"],
    proyectos: ["Calculadora Web", "E-commerce", "Blog Personal"]
};
//console.log("3. FullStackDeveloper =", FullStackDeveloper);

//4. objeto Perro con nombre, raza, color, edad y las funciones ladrar y popo
const Perro = {
    nombre: "Toby",
    raza: "Pastor alemán",
    color: "Negro",
    edad: 3,
    ladrar: function () {
        console.log("Woof!");
    },
    popo: function () {
        return Math.random() * 3;
    }
};
//console.log("4. Perro =", Perro);

//5. leer Portatil.marca con . y guardarlo en la variable marcaPortatil
const marcaPortatil = Portatil.marca;
//console.log("5. marcaPortatil =", marcaPortatil);

//6. leer Portatil["marca"] con corchetes y guardarlo en la variable marcaPortatil2
const marcaPortatil2 = Portatil["marca"];
//console.log("6. marcaPortatil2 =", marcaPortatil2);

//7. leer Concierto.grupos y guardarlo en la variable grupos
const grupos = Concierto.grupos;
//console.log("7. grupos =", grupos);

//8. array RGB con los valores Led.rojo, Led.verde y Led.azul
const RGB = [Led.rojo, Led.verde, Led.azul];
//console.log("8. RGB =", RGB);

//9. modificar Portatil.modelo por el valor "P345"
Portatil.modelo = "P345";
//console.log("9. Portatil.modelo =", Portatil.modelo);

//10. añadir "Guns N' Roses" a la propiedad cartelera de Concierto
Concierto.cartelera.push("Guns N' Roses");
//console.log("10. Concierto.cartelera =", Concierto.cartelera);

//11. modificar Concierto.fecha por un objeto new Date()
Concierto.fecha = new Date();
//console.log("11. Concierto.fecha =", Concierto.fecha);

//12. modificar Impresora.imprimiendo por un objeto con nombreArchivo, copias y numPaginas
Impresora.imprimiendo = {
    nombreArchivo: "imprimir.pdf",
    copias: 1,
    numPaginas: 1
};
//console.log("12. Impresora.imprimiendo =", Impresora.imprimiendo);

//13. objeto Noticia con las propiedades titular y cuerpo
const Noticia = {
    titular: "Brasil vuelve a ganar el mundial",
    cuerpo: "Efectivamente, lo ha vuelto a hacer"
};
//console.log("13. Noticia =", Noticia);

//14. objeto Persona con las propiedades nombre, apellidos y edad
const Persona = {
    nombre: "John",
    apellidos: "Wilson Smith",
    edad: 30
};
//console.log("14. Persona =", Persona);

//15. objeto Avion con numPasajeros y las funciones despegar, volar y aterrizar
const Avion = {
    numPasajeros: 100,
    despegar: function () {
        console.log("despegando");
    },
    volar: function () {
        console.log("llegando al destino");
    },
    aterrizar: function () {
        console.log("aterrizando");
    }
};
//console.log("15. Avion =", Avion);

//16. objeto Paquete con la propiedad contenido (array con los objetos del paquete)
const Paquete = {
    contenido: ["ropa", "cepillo de dientes", "libro", "carpeta"]
};
//console.log("16. Paquete.contenido =", Paquete.contenido);

//17. objeto Pais con numHabitantes, continente y gentilicio
const Pais = {
    numHabitantes: 48000000,
    continente: "Europa",
    gentilicio: "Español"
};
//console.log("17. Pais =", Pais);

//18. leer O_Error.codigo y guardarlo en la variable codError
const codError = O_Error.codigo;
//console.log("18. codError =", codError);

//19. leer Grupo.integrantes y guardarlo en la variable integrantes
const integrantes = Grupo.integrantes;
//console.log("19. integrantes =", integrantes);

//20. leer Impresora.tinta y guardarlo en la variable nivelesTinta
const nivelesTinta = Impresora.tinta;
//console.log("20. nivelesTinta =", nivelesTinta);

//21. leer Pantalla.pixeles y guardarlo en la variable pixeles
const pixeles = Pantalla.pixeles;
//console.log("21. pixeles =", pixeles);

//22. leer Movil["especificaciones"] y guardarlo en la variable especificaciones
const especificaciones = Movil["especificaciones"];
//console.log("22. especificaciones =", especificaciones);

//23. modificar Grupo.numIntegrantes por el valor 5
Grupo.numIntegrantes = 5;
//console.log("23. Grupo.numIntegrantes =", Grupo.numIntegrantes);

//24. modificar Pantalla.dimensiones por el valor "1920x1080"
Pantalla.dimensiones = "1920x1080";
//console.log("24. Pantalla.dimensiones =", Pantalla.dimensiones);

//25. invertir Led.encendido: si vale true pasa a false y si vale false a true
if (Led.encendido) {
    Led.encendido = false;
} else {
    Led.encendido = true;
}
//console.log("25. Led.encendido =", Led.encendido);

//26. modificar Movil.temperatura por el valor "20º"
Movil.temperatura = "20º";
//console.log("26. Movil.temperatura =", Movil.temperatura);
