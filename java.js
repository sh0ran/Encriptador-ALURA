const inputTexto = document.querySelector("#campo-texto");
const inputMensaje = document.querySelector("#campo-mensaje");
const botonCopiar = document.querySelector("#boton-copiar");

botonCopiar.addEventListener("click", function() {
    copiarAlPortapapeles();
});

function cifrarTexto() {
    const textoCifrado = aplicarCifrado(inputTexto.value);
    inputMensaje.value = textoCifrado;
}

function descifrarTexto() {
    const textoDescifrado = aplicarDescifrado(inputTexto.value);
    inputMensaje.value = textoDescifrado;
}

function aplicarCifrado(texto) {
    const reemplazoEn = {'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat'};
    const textoCifrado = texto.split('').map(caracter => reemplazoEn[caracter] || caracter).join('');
    
    return textoCifrado;
}

function aplicarDescifrado(texto) {
    const reemplazoInverso = {'ai': 'a', 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ufat': 'u'};
    const textoDescifrado = texto.split(/(ai|enter|imes|ober|ufat)/).map(subcadena => reemplazoInverso[subcadena] || subcadena).join('');
    
    return textoDescifrado;
}

function copiarAlPortapapeles() {
    inputMensaje.select();
    document.execCommand("copy");
    inputTexto.value = inputMensaje.value;
    inputMensaje.value = '';
    window.getSelection().removeAllRanges();
}

inputTexto.addEventListener("input", function() {
    const valorActual = inputTexto.value;
    const caracteresProhibidos = /[A-Z0-9áéíóúüñ¡!*Ç´`¨ªº'_^<>¿?.,:;+-]/g;
    if (caracteresProhibidos.test(valorActual)) {
        alert("Por favor, ingrese solo letras minúsculas y sin caracteres especiales.");
        inputTexto.value = valorActual.replace(caracteresProhibidos, '');
    }
});
