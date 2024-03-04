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
    inputMensaje.select();
    document.execCommand("copy");
    inputTexto.value = inputMensaje.value;
    inputMensaje.value = '';
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
    const caracteresProhibidos = /[A-Z0-9áéíóúüñ¡!*Ç´`¨ªº'_^<>¿?.,:;+-]/g;

    if (caracteresProhibidos.test(valorActual)) {
        alert("Por favor, ingrese solo letras minúsculas y sin caracteres especiales.");
        inputTexto.value = valorActual.replace(caracteresProhibidos, '');
    }
});
