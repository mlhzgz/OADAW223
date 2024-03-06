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

    constructor();
    constructor(nombre: string);
    constructor(nombre: string, apellidos: string);
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
            txtNombre.css("background-color", "red");
            txtNombre.focus();
            contacto = null;
        }
        else {
            contacto!.nombre = txtNombre.val() as string;
            txtNombre.css("background-color", "white");
        }

        if (contacto != null && (txtApellidos.val() as string).length == 0) {
            txtApellidos.css("background-color", "red");
            txtApellidos.focus();
            contacto = null;
        }
        else if (contacto != null) {
            contacto!.apellidos = txtApellidos.val() as string;
            txtApellidos.css("background-color", "white");
        }

        if (contacto != null && (txtDireccion.val() as string).length == 0) {
            txtDireccion.css("background-color", "red");
            txtDireccion.focus();
            contacto = null;
        }
        else if (contacto != null) {
            contacto!.direccion = txtDireccion.val() as string;
            txtDireccion.css("background-color", "white");
        }

        if (contacto != null && (txtTelefono.val() as string).length == 0) {
            txtTelefono.css("background-color", "red");
            txtTelefono.focus();
            contacto = null;
        }
        else if (contacto != null) {
            contacto!.telefono = txtTelefono.val() as string;
            txtTelefono.css("background-color", "white");
        }

        if (contacto != null && (txtCumpleaños.val() as string).length == 0) {
            txtCumpleaños.css("background-color", "red");
            txtCumpleaños.focus();
            contacto = null;
        }
        else if (contacto != null) {
            contacto!.cumpleaños = txtCumpleaños.val() as string;
            txtCumpleaños.css("background-color", "white");
        }

        if (contacto != null)
            contacto!.tipo = <TipoContacto>listTipo.val();

        btnEnviar.show("slow");

        return contacto;
    }

    public enviar() : void {
        $.post("...", this).done(()=>{
            alert("datos enviados");
        });
    }
}

class ListaContactos {
    [telefono: string]: Contacto;
}

$(function () {
    $("#btnFormulario").on("click", function () {
        //$("#formulario").toggle("fast");
        $("#formulario").animate({
            width:"100px"
        });
    });

    $("#btnEnviar").on("click", function () {
        const contacto = Contacto.validarFormulario();

        if (contacto != null) {
            alert("Formulario enviado con éxito");

            $.get("URL_servidor?parametros", function (data) {

            });

            $.get("URL_servidor?parametros");

            $.get("URL_servidor?parametros").done(function(data){

            }).fail((error)=>{})
            .always(()=>{});

            $.ajax({});

            $.getJSON("url", "fjdlsjfkdsl", function(){});
            $.getScript("url script");

            $.post("url", contacto, function(data) {

            });

        }

    });
});