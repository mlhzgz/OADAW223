enum TipoContacto {
    Amistad = "Amistad",
    Trabajo = "Trabajo",
    Familia = "Familia",
    Vecino = "Vecino"
}

class Contacto {
    private _nombre: string;
    private _apellidos: string;
    private _direccion: string = "";
    private _telefono: string = "";
    private _cumpleaños: string = "";
    private _tipo: TipoContacto = TipoContacto.Amistad;

    constructor(nombre?: string, apellidos: string = "") {
        this._nombre = nombre ?? "";
        this._apellidos = apellidos;
    }

    public get nombre() {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

    public get apellidos(): string {
        return this._apellidos;
    }

    public set apellidos(value: string) {
        this._apellidos = value;
    }

    public get direccion(): string {
        return this._direccion;
    }

    public set direccion(value: string) {
        this._direccion = value;
    }

    public get telefono(): string {
        return this._telefono;
    }

    public set telefono(value: string) {
        this._telefono = value;
    }

    public get cumpleaños(): string {
        return this._cumpleaños;
    }

    public set cumpleaños(value: string) {
        this._cumpleaños = value;
    }

    public get tipo(): TipoContacto {
        return this._tipo;
    }

    public set tipo(value: TipoContacto) {
        this._tipo = value;
    }

    public static validarFormulario(): Contacto | null {
        let contacto: Contacto | null = new Contacto();

        const txtNombre = $("#txtNombre");
        const txtApellidos = $("#txtApellidos");
        const txtDireccion = $("#txtDireccion");
        const txtTelefono = $("#txtTelefono");
        const txtCumpleaños = $("#txtCumpleaños");
        const listTipo = $("#listTipo");
        const btnEnviar = $("#btnEnviar");

        //btnEnviar.prop("disabled", true);
        //btnEnviar.attr("disabled", "disabled");

        btnEnviar.hide();
        //btnEnviar.css("visibility", "hidden");


        //btnEnviar.fadeToggle("slow");


        if ((<string>txtNombre.val()).trim() == "") {
            alert("nombre incorrecto");
            txtNombre.focus();
            contacto = null;
        }
        else {
            contacto!.nombre = txtNombre.val() as string;
        }

        if (contacto != null && (txtApellidos.val() as string).length == 0) {
            alert("apellidos incorrectos");
            txtApellidos.focus();
            contacto = null;
        }
        else {
            contacto!.apellidos = txtApellidos.val() as string;
        }

        if (contacto != null && (txtDireccion.val() as string).length == 0) {
            alert("dirección incorrecta");
            txtDireccion.focus();
            contacto = null;
        }
        else {
            contacto!.direccion = txtDireccion.val() as string;
        }

        if (contacto != null && (txtTelefono.val() as string).length == 0) {
            alert("telefóno incorrecto");
            txtTelefono.focus();
            contacto = null;
        }
        else {
            contacto!.telefono = txtTelefono.val() as string;
        }

        if (contacto != null && (txtCumpleaños.val() as string).length == 0) {
            alert("cumpleaños incorrecto");
            txtCumpleaños.focus();
            contacto = null;
        }
        else {
            contacto!.cumpleaños = txtCumpleaños.val() as string;
        }

        btnEnviar.show("slow");

        return contacto;
    }
}

class ListaContactos {
    [telefono: string]: Contacto;
}

$(function() {
    $("#btnEnviar").on("click", function() {

    });
});