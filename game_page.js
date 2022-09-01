var primeiroNumero;
var segundoNumero;

function Enviar() {

    primeiroNumero = pegarObjeto("primera").value;
    segundoNumero = pegarObjeto("segunda").value;

    pegarObjeto("resultado").style.display = "none";

    pegarObjeto("output").style.display = "inline-block";
    pegarObjeto("conta").innerHTML = primeiroNumero + " X " + segundoNumero;
}

function Verificar() {

    pegarObjeto("output").style.display = "none";
    
    var resultadoDIV = pegarObjeto("resultado");
    resultadoDIV.style.display = "inline-block";

    var respondendo = pegarObjeto("respondendo");    
    var resultadoVerdadeiro = primeiroNumero * segundoNumero;
    
    if (respondendo.value == resultadoVerdadeiro) {
        resultadoDIV.innerHTML = "Você acertou";
    } else {
        resultadoDIV.innerHTML = "Você errou";
    }

    respondendo.value = "";

}

function pegarObjeto(nome) {
    return document.getElementById(nome);
}
