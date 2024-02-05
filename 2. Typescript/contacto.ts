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

$(()=>{
    /*
        JQuery devuelve siempre un conjunto de elementos con los que podemos interactuar
        usando las funciones JQuery, como css(), attr(), val(), etc...

        $.each() devuelve cada uno de los elementos de la colección JQuery pero en forma
        de HTMLElement. Para convertir un elemento HTML a JQuery simplemente usamos la 
        función JQuery $().

        Cuando se usa cualquier función JQuery, dicha función se ejecuta en todos los posibles
        elementos devueltos por la función JQuery (o por cualquier función JQuery), con lo que
        en la práctica, la librería nos permite usos masivos de funcionalidades en una sola 
        instrucción.
    */
    // $("input").each(function() {
    //     const item  = $(this);
    //     item.css("border-color", "red");
    // });
    // $("input")
    //     .css("border-color", "blue")
    //     .css("background-color", "yellow");

    // $(".col-2").css("color", "blue");

    // Modificamos el placeholder de todos los input de la página
    // $("input").attr("placeholder", "Escribe tu nombre");

    // Capturamos un input cuyo name sea 'txtNombre'
    // $("input[name='txtNombre']")

    // Localizamos elementos dentro de la capa, y a su vez, localizamos los que nos pueden interesar
    // $("#capa1 input[type=radio]").find(".col-2");

    // Podemos asignar un evento a todos los objeto devueltos por JQuery en una instrucción
    // $(".col-2").on("click", ()=> {
    //     alert("hola");
    // });

    // Las lambdas no permiten usar this para acceder al elemento que ha lanzado el evento
    // $("#btnEnviar").on("click", ()=>{
    //     const boton = $("#btnEnviar");
    // });

    // Podemo usar la enumeraciones con variables
    const dia = DiasSemana.Domingo;
    console.log(dia);

    // Podemos usar una enumeración con valores constantes o variables
    const _dia = "Domingo";
    if (_dia == DiasSemana.Domingo) {}

    // Capturamos el evento click de un botón para procesar los datos
    $("#btnEnviar").on("click", function () {
        //const boton = $(this);

        // Capturamos los objetos JQuery (recomendable)
        const txtNombre = $("#txtNombre");
        const txtApellidos = $("#txtApellidos");
        const txtDireccion = $("#txtDireccion");
        const txtTelefono = $("#txtTelefono");
        const txtCumpleaños = $("#txtCumpleaños");
        const listTipo = $("#listTipo");

        if (txtNombre.val() == ""){
            txtNombre.css("border-color", "red");
            txtNombre.attr("placeholder", "DEBES INDICAR UN NOMBRE");
        }

        // DESPUES PODEMOS ENVIAR DATOS
    });

    // Podemos capturar el envío de un formulario, procesar la validación y permitir o no el envío
    $("form").on("submit", function(){
        return true;
        return false;
    });
});
