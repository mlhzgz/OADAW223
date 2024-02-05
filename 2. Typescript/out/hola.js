"use strict";
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
// Variable de tipo nulo (sólo puede tener un valor nulo)
var mensaje = null;
console.log(mensaje);
// Variable con unión de tipos: puede ser "string" o un array "number" de forma alternativa.
var variable;
function funcion(par1) {
    var _a, _b;
    // Gestión de valores nulos
    // ?. sirve para ejecutar el código sólo en caso de que la variable no sea nula
    // Si es nula, ?? permite asignar otro valor válido diferente (operador de coelescencia)
    // Si cualquier parte de la ejecución de la variable puede ser nula, se ejecutará
    // el operador de coalescencia
    var v1 = (_b = (_a = par1 === null || par1 === void 0 ? void 0 : par1.toString()) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 1;
    // Si estamos seguros de que la variable NO ES NULA, podemos usar la exclamación
    // Typescript no nos va a permitir ejecutar un valor nulo ya en tiempo de compilación
    //let v2 = par1!.toString();
    console.log(par1 === null || par1 === void 0 ? void 0 : par1.toString());
    // También podemos hacer las comprobaciones con IF
    switch (typeof par1) {
        case 'string': // distinguimos entre el tipo de dato que nos puede estar llegando
            break;
        case 'undefined':
            break;
        case 'number':
            break;
        case null:
            break;
        default:
            if (Array.isArray(par1)) {
                // El dato es un array
            }
    }
    return null;
}
// El parámetro puede ser nulo, así que podemos indicar el dato como "null"
funcion(null);
// Función de inicialización de página estándar de JQuery
$(document).ready(function () {
    console.log("carga 1");
});
// Versión con función anónima
$(function () {
    console.log("carga 2");
});
// Versión con lambda
$(function () {
    console.log("carga 3");
});
// Los eventos en JQuery funcionan apilados de forma consecutiva, independientemente de que se
// declaren en cualquier código del programa, en los distintos módulos que lo conforman
//# sourceMappingURL=hola.js.map