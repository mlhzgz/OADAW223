"use strict";
var DiasSemana;
(function (DiasSemana) {
    DiasSemana["Lunes"] = "Lunes";
    DiasSemana["Martes"] = "Martes";
    DiasSemana["Mi\u00E9rcoles"] = "Mi\u00E9rcoles";
    DiasSemana["Jueves"] = "Jueves";
    DiasSemana["Viernes"] = "Viernes";
    DiasSemana["S\u00E1bado"] = "S\u00E1bado";
    DiasSemana["Domingo"] = "Domingo";
})(DiasSemana || (DiasSemana = {}));
;
$(function () {
    // $("input").each(function() {
    //     const item  = $(this);
    //     item.css("border-color", "red");
    // });
    // $("input")
    //     .css("border-color", "blue")
    //     .css("background-color", "yellow");
    // $(".col-2").css("color", "blue");
    // $("input").attr("placeholder", "Escribe tu nombre");
    // $("input[name='txtNombre']")
    // $("#capa1 input[type=radio]").find(".col-2");
    // $(".col-2").on("click", ()=> {
    //     alert("hola");
    // });
    // $("#btnEnviar").on("click", ()=>{
    //     const boton = $("#btnEnviar");
    // });
    var dia = DiasSemana.Domingo;
    console.log(dia);
    $("#btnEnviar").on("click", function () {
        //const boton = $(this);
        var txtNombre = $("#txtNombre");
        var txtApellidos = $("#txtApellidos");
        var txtDireccion = $("#txtDireccion");
        var txtTelefono = $("#txtTelefono");
        var txtCumpleaños = $("#txtCumpleaños");
        var listTipo = $("#listTipo");
        if (txtNombre.val() == "") {
            txtNombre.css("border-color", "red");
            txtNombre.attr("placeholder", "DEBES INDICAR UN NOMBRE");
        }
        // DESPUES PODEMOS ENVIAR DATOS
    });
    $("form").on("submit", function () {
        return true;
        return false;
    });
});
//# sourceMappingURL=contacto.js.map