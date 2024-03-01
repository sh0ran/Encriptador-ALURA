const inputTexto = document.querySelector("#campo-texto");
const inputMensaje = document.querySelector("#campo-mensaje");
const botonCopiar = document.querySelector("#boton-copiar");

botonCopiar.addEventListener("click", function() {
    copiarAlPortapapeles();
});

const matrizVocales = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function cifrarTexto() {
    const textoCifrado = aplicarCifrado(inputTexto.value, true);
    inputMensaje.value = textoCifrado;
}

function descifrarTexto() {
    const textoDescifrado = aplicarCifrado(inputTexto.value, false);
    inputMensaje.value = textoDescifrado;
}

function copiarAlPortapapeles() {
    // Copiar el texto cifrado o descifrado al portapapeles
    inputMensaje.select();
    document.execCommand("copy");

    // Pegar el texto en el área de texto original y eliminarlo del área de mensaje
    inputTexto.value = inputMensaje.value;
    inputMensaje.value = '';

    // Deseleccionar el texto
    window.getSelection().removeAllRanges();
}

function aplicarCifrado(texto, cifrar) {
    for (const [vocalOriginal, vocalReemplazo] of matrizVocales) {
        const vocal = cifrar ? vocalOriginal : vocalReemplazo;
        const vocalReemplazada = cifrar ? vocalReemplazo : vocalOriginal;
        const regex = new RegExp(`(?<=\\b|[^aeiou])${vocal}(?=[^aeiou]|\\b)`, 'g');
        texto = texto.replace(regex, vocalReemplazada);
    }
    return texto;
}

inputTexto.addEventListener("input", function() {
    const valorActual = inputTexto.value;
    const caracteresProhibidos = /[A-Záéíóúüñ¡¿?.,:;+-]/g;

    if (caracteresProhibidos.test(valorActual)) {
        alert("Por favor, ingrese solo letras minúsculas y sin caracteres especiales.");
        // Puedes agregar más lógica, como limpiar el campo o deshacer la última entrada no permitida
        inputTexto.value = valorActual.replace(caracteresProhibidos, '');
    }
});
