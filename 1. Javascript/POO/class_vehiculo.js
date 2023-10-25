const vehiculos = [];
let vehiculoActual = null;

class Vehiculo {
    constructor() {
        this.modelo = "";
        this.fabricante = "";
        this.matricula = "";
        this.tipo = "";
        this.año = "";
    }                

    static llenarDatos() {
        const obj = new Vehiculo();

        obj.modelo = document.getElementById("txtModelo").value;
        obj.fabricante = document.getElementById("txtFabricante").value;
        obj.matricula = document.getElementById("txtMatricula").value;
        obj.tipo = document.getElementById("lstTipos").value;
        obj.año = document.getElementById("txtAño").value;

        return obj;
    }

    datosAFormulario() {
        document.getElementById("txtModelo").value = this.modelo;
        document.getElementById("txtFabricante").value = this.fabricante;
        document.getElementById("txtMatricula").value = this.matricula;
        document.getElementById("lstTipos").value = this.tipo;
        document.getElementById("txtAño").value = this.año;
    }

    static validarDatos() {
        const vehiculo = Vehiculo.llenarDatos();

        if (vehiculo.modelo.trim() == "") {
            document.getElementById("lblErrorModelo").style.display = "inline";
            return false;
        }

        if (vehiculo.fabricante.trim() == "") {
            document.getElementById("lblErrorFabricante").style.display = "inline";
            return false;
        }

        const lblErrorMatricula = document.getElementById("lblErrorMatricula");

        if (vehiculo.matricula.trim() == "") {
            lblErrorMatricula.innerText = "Debes indicar una matrícula";
            lblErrorMatricula.style.display = "inline";
            return false;
        }

        if (!/^[0-9]{4} [A-Z]{3}$/.test(vehiculo.matricula)) {
            lblErrorMatricula.innerText = "El formato de la matrícula es incorrecto";
            lblErrorMatricula.style.display = "inline";
            return false;
        }

        if (vehiculo.tipo == "") {
            document.getElementById("lblErrorTipo").style.display = "inline";
            return false;
        }

        const lblErrorAño = document.getElementById("lblErrorAño");

        if (vehiculo.año.trim() == "") {
            lblErrorAño.innerText = "Debe indicarse el año de fabricación";
            lblErrorAño.style.display = "inline";
            return false;
        }

        if (/[0-9]{4}/.test(vehiculo.año.trim())) {
            lblErrorAño.innerText = "El año de fabricación es incorrecto";
            lblErrorAño.style.display = "inline";
            return false;
        }

        return true;
    }
}
