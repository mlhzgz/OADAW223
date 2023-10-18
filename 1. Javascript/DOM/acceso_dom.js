// funciones de acceso a elementos DOM

// accedemos a un elemento concreto del DOM por su ID
document.getElementById("id_objeto")

// accedemos a una lista de elementos o nodos por nombres de clases
document.getElementsByClassName("nombreclase1 nombreclase2 nombreclase3") 

// accedemos a una lista de elementos o nodos por el nombre de una etiqueta
document.getElementsByTagName("etiqueta")

// accedemos a una lista de elementos o nodos por el NAME o ID
document.getElementsByName("nombre_de_elemento")

// accedemos a un elemento por medio de un selector css
document.querySelector("selector css")

// accedemos a una lista de elementos o nodos por medio de un selector css
document.querySelectorAll("selector css")

// Escribimos el código HTML dentro de un elemento
document.getElementById("id").innerHTML = "<a href='hola.html' style=''>hola</a>";

// Escribimos sólo texto dentro de un elemento
document.getElementById("id").innerText = "<a href='hola.html'>hola</a>";