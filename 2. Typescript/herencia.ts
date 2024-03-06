// Construcción de una clase usando atributos en los parámetros del constructor
class Persona {
    // atributos
    //ciudad:string = ""

    constructor(private nombre:string, private apellidos:string) {
        // Los atributos se crean inmediatamente al construirse el objeto
    }

    get getNombre() {
        return this.nombre;
    }

    get getApellidos() {
        return this.apellidos;
    }

    public describir() : string {
        return `${this.nombre} ${this.apellidos}`; // Texto con interpolación
    }
}

// Se pueden intercalar parámetros con atributos creados en el constructor
// Se heredan los constructores, métodos y atributos protegidos y públicos
class Cliente extends Persona {
    constructor(nombre:string, apellidos:string, private nif:string) {
        super(nombre, apellidos);
    }

    get getNif() {
        return this.nif;
    }

    public describir(): string {
        return super.describir() + ` con el NIF ${this.nif}`;
    }
}

const persona = new Persona("pepe", "ruiz");
console.log(persona.describir());
const cliente = new Cliente("antonio", "hernandez", "123213123");
console.log(cliente.describir());

// Si declaramos una variable y definimos un objeto de un tipo derivado, es compatible
let cliente2:Persona = new Cliente("luis", "ramirez", "234234324");

// Pero si declaramos una variable de un tipo derivado y queremos definirle un objeto
// de un tipo superior, debemos realizar una conversión para poder hacerlo
let cliente3:Cliente = <Cliente>new Persona("ana", "romero");
let cliente4:Cliente = <Cliente>cliente2;

// Incluso si accedemos a un objeto de un tipo derivado por medio de su clase base
// se sigue ejecutando la implementación de la clase derivada
(<Persona>cliente2).describir();

// Podemos definir una función que permita usar polimorfismo por herencia
// Cualquier objeto que herede 'Persona' (o un tipo derivado de 'Persona')
// puede pasarse como parámetro
function mostrarPersona(persona:Persona) : void {
    console.log(persona.describir());
}

mostrarPersona(cliente2);
mostrarPersona(cliente3);
mostrarPersona(cliente4);

// Polimorfmismo por implementación de interfaces
interface EventoClick {
    click():void;
    dispose(): void;
}

// Pueden implementarse varias interfaces a la vez
class Control implements EventoClick/*, TFigura*/ {
    // tipo: TipoFigura;
    // longitud: number;
    // x: number;
    // y: number;
    click(): void {
        console.log("Has pulsado el control");
    }

    dispose(): void {
        
    }
}

class Etiqueta extends Control {
    click(): void {
        console.log("Has pulsado una etiqueta");
    }
}

// Una función puede recibir objetos que implementen un tipo de interfaz
function hacerClick(control:EventoClick) {
    control.click();
}

const control = new Control();
const etiqueta = new Etiqueta();

hacerClick(control);
hacerClick(etiqueta);

// Extensión de tipos en Typescript
type Point = {
    x:number;
    y:number;
}

// Añadimos un tipo anterior a otro nuevo
type Figure = Point & {
    sides:number;
}

// Podemos definir atributos opcionales en una estructura
type Triangle = Figure & {
    sideSize?:number;
}

const triangulo : Triangle = {
    x:0,
    y:0,
    sides:3,
};
