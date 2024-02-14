// En las funciones, es posible generar parámetros compuestos:
// pueden generarse parámetros estructurados (que pueden ser opcionales con "?", indefinido)
function printPunto(punto:{x:number, y?:number}) : void {
    console.log(punto.x);
    console.log(punto.y);
}

// Si se define un objeto con la misma estructura, se puede usar como parámetro compuesto
const punto = {
    x: 10,
    y: 100
};

// Llamada directa con un parámetro compuesto parcial (falta uno de los parámetros)
printPunto({x:10});

// Llamada con una variable que tiene la misma estructura
printPunto(punto);

// ALIAS de tipo: permite crear un tipo usable en cualquier contexto (variable, parámetro, función)
type Punto = {
    x: number,
    y: number
};

const punto2 : Punto = {
    x:10,
    y:10
};

printPunto(punto2);

function printPunto2(punto:Punto) : void {
    console.log(punto.x);
    // ...
}

// Devolución de un parámetro modificado
function escalarPunto(punto:Punto, escala:number) : Punto {
    punto.x += escala;
    punto.y += escala;
    return punto;
}

let punto3 = escalarPunto(punto, 10);

// UNIONES: con el operador "|" se pueden crear tipos uniendo varios tipos diferentes
type TipoFecha = string | Date;

// Se pueden crear alias de un tipo concreto para darle otro nombre
type Texto = string;

///////////////////////////

// Enumeraciones: conjunto de valores con nombre (pueden ser valores enteros empezando desde cero o textos)
enum TipoFigura { Triangulo, Cuadrado, Pentágono }; // Triangulo vale 0

// Enumeración de días de la semana
// Es un tipo de dato que podemos asignar a variables, parámetros, métodos, etc...
// Si no indicamos una etiqueta de texto, los valores automáticos son numéricos desde 0
enum DiasSemana {
    Lunes = "Lunes",
    Martes = "Martes",
    Miércoles = "Miércoles",
    Jueves = "Jueves",
    Viernes = "Viernes",
    Sábado = "Sábado",
    Domingo = "Domingo"
};

// Podemos usar la enumeraciones con variables
const diaSemana = DiasSemana.Domingo;
console.log(diaSemana);

// Podemos usar una enumeración con valores constantes o variables
const _dia = "Domingo";
if (_dia == DiasSemana.Domingo) {}


// Una interfaz permite crear un tipo estructurado que se peude usar para crear variables, parámetros o funciones
interface Figura {
    punto? : Punto;
    tipo? : TipoFigura;
}

const figura : Figura = {
    punto : {
        x:10,
        y:10
    },
    tipo : TipoFigura.Cuadrado
};

// Esta variable está vacía porque los elementos de Figura son todos opcionales
const figura2 : Figura = {};
figura2.punto = {
    x:10,
    y:100
}

function dibujaFigura(figura:Figura) {
    //figura.punto.x
    //figura.tipo
}

/////////////////////

interface TPunto {
    x : number;
    y : number;
}

// Las interefaces pueden "heredar" otras interfaces
interface TFigura extends TPunto {
    tipo : TipoFigura;
    longitud : number;
}

const _figura : TFigura = {
    x : 0,
    y : 0,
    tipo : TipoFigura.Pentágono,
    longitud : 10
};

///////

const dato : string | number = "";

// Pueden convertirse variables a otros tipos SIEMPRE que la variable contenga un tipo compatible
const dato2 = <string>dato;
const dato3 = dato as string;

// Valores acotados (sólo puede tener esos valores concretos)
const numeros : 1 | 2 | 3 = 1;
const dia : "lunes" | "martes" | "miercoles" = "lunes";

// Se puede crear un tipo a partir de valores concretos
type Dias = "lunes" | "martes" | "miercoles";

const dia2 : Dias = "lunes";
