const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none"


}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
                       
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }


    }

    return stringEncriptada
        
}

function btnDesncriptar(){
    const resultado = desencriptar(inputTexto.value)
    mensagem.value = resultado
    mensagem.style.backgroundImage="none"


}

function desencriptar(stringNormal) {
    let matrizCodigo = [["ai", "a"], ["enter","e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
    stringNormal = stringNormal.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringNormal.includes(matrizCodigo[i][0])){
            stringNormal=stringNormal.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }


    }

    return stringNormal
        
}

function copyToClipBoard() {

    var textoCopiado = document.getElementById('mensagemSaida');
        textoCopiado.select();
        textoCopiado.setSelectionRange(0,99999)
        

        document.execCommand('copy');

    alert("Copiado com Sucesso!");
    location.reload();
}




