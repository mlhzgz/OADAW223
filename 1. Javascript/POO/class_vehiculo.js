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

    static llenarDatosDesdeFormulario() {
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

    crearFilaDatos() {
        const fila = document.createElement("tr");
        
        let col = document.createElement("td");
        col.innerText = this.fabricante;
        fila.appendChild(col);

        col = document.createElement("td");
        col.innerText = this.modelo;
        fila.appendChild(col);

        col = document.createElement("td");
        //col.innerText = this.matricula;

        const enlace = document.createElement("a");
        enlace.href = "";
        enlace.innerText = this.matricula;
        col.appendChild(enlace);

        col.style.textAlign = "center";
        fila.appendChild(col);

        col = document.createElement("td");
        col.innerText = this.tipo;
        col.style.textAlign = "center";
        fila.appendChild(col);

        col = document.createElement("td");
        col.innerText = this.año;
        col.style.textAlign = "center";
        fila.appendChild(col);

        return fila;
    }

    static validarDatos() {
        const vehiculo = Vehiculo.llenarDatosDesdeFormulario();

        document.getElementById("lblErrorModelo").style.display = "none";
        document.getElementById("lblErrorFabricante").style.display = "none";
        document.getElementById("lblErrorTipo").style.display = "none";

        if (vehiculo.modelo.trim() == "") {
            document.getElementById("lblErrorModelo").style.display = "inline";
            return false;
        }

        if (vehiculo.fabricante.trim() == "") {
            document.getElementById("lblErrorFabricante").style.display = "inline";
            return false;
        }

        const lblErrorMatricula = document.getElementById("lblErrorMatricula");
        lblErrorMatricula.style.display = "none";

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
        lblErrorAño.style.display = "none";

        if (vehiculo.año.trim() == "") {
            lblErrorAño.innerText = "Debe indicarse el año de fabricación";
            lblErrorAño.style.display = "inline";
            return false;
        }

        if (!/[0-9]{4}/.test(vehiculo.año.trim())) {
            lblErrorAño.innerText = "El año de fabricación es incorrecto";
            lblErrorAño.style.display = "inline";
            return false;
        }

        return true;
    }
}
