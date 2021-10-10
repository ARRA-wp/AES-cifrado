//cargar estatico el mensaje y la llave

var mensaje = "habia una vez un patito que decia miau miau y queria mimir";

var password = document.getElementById("clave").value;

//Deben de ser 16

/////////////////////////////////////

function Cifrar() {


    var text = document.getElementById("text-val").value;

    //parte importante
    
    var cifrado = CryptoJS.AES.encrypt(text, password);

    //document.getElementById("demo0").innerHTML = text;
    document.getElementById("demo1").innerHTML = cifrado;



}

function Descifrar() {

    //Descifrar

    var cifrado = document.getElementById("text-val").value;
    var descifrado = CryptoJS.AES.decrypt(cifrado, password);

    document.getElementById("demo2").innerHTML = descifrado;

    //Esto es para darle formato al cifrado
    document.getElementById("demo3").innerHTML = descifrado.toString(CryptoJS.enc.Utf8);

}

///////////////////////////////////////

//Esto es para leer el archivo txt
function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    var lector = new FileReader();
    lector.onload = function (e) {
        var contenido = e.target.result;
        mostrarContenido(contenido);
    };
    lector.readAsText(archivo);
}
//Metodo para mostrar el contenido

function mostrarContenido(contenido) {
    var elemento = document.getElementById('contenido-archivo');
    var elemento2 = document.getElementById('text-val');
    elemento.innerHTML = contenido;
    elemento2.innerHTML = contenido;
}

document.getElementById('file-input')
    .addEventListener('change', leerArchivo, false);

////////////////////////////////////////////////////
//Para descargra nuestro archivo cifrado
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Comenzar descarga del archivo
document.getElementById("dwn-btn").addEventListener("click", function () {
    // Generar archvio
    var text = document.getElementById("demo1").value;
    var filename = "Cifrado.txt";

    download(filename, text);
}, false);
