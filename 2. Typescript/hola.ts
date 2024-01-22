// Ficheros relevantes para un proyecto Typescript:
// tsconfig.json: fichero de configuración del compilador
// package.json: creado por NPM para el mantenimiento y actualización de paquetes
//
// Opcionalmente, si queremos que no se vean ficheros JS en nuestros proyectos, podemos usar
// el fichero .vscode/settings.json que hay en el repositorio con patrones de ocultación de ficheros

// Para la compilación, se puede ejecutar TSC de dos formas:
// tsc [fichero] -> compila el fichero indicado
// tsc -> compila TODOS los ficheros del proyecto (directorio actual)

// node_modules contiene las librerías y módulos instalados a través de NPM

// Mensaje sencillo que será compilado a JS
// Una vez compilado, se puede ejecutar con NodeJS: node hola.js
let mensaje : string = "hola";
console.log(mensaje);

// Función de inicialización de página estándar de JQuery
$(function() {

});