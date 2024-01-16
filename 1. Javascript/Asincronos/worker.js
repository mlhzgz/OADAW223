// Si necestamos usar scripts dentro del worker, podemo emplear la función importScripts()
// importScripts('script1.js', 'script2.js', ...);

// Dentro de un worker, podemos establecer toda nuestra ejecución, variables, clases, etc...
let x = 0;

setInterval(function(){
    x++;
    // postMessage envía información al contexto que ha llamado al worker
    postMessage(x);
}, 1000);

// Evento que recibe los datos enviados por el contexto que llama al worker
onmessage = function(e) {
    x = e.data; // atributo data devuelve los datos enviados por el otro contexto
}

// Si queremos cerrar un worker desde dentro, usamos
// self.close();