const inputMensaje = document.querySelector("mensaje");
const inputResultado = document.querySelector("Resultado");

const btnEncriptar = document.querySelector("encriptar");
const btnDesencriptar = document.querySelector("desencriptar");
const btnCopiar = document.querySelector("copiar");


/*
llaves de encriptación que utilizaremos son las siguientes:
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function encriptar(){
    var mensaje = document.getElementById("InputText").value.toLowerCase();

    if(mensaje == ""){
        alert("No hay mensaje para encriptar");
        document.getElementById("ImgDer").style.display = "";
        resultado(no);
    }

    var mensajeEncriptado = mensaje
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("a","ai")
    .replaceAll("o","ober")
    .replaceAll("u","ufat");

    document.getElementById("ImgDer").style.display = "none";
    document.getElementById("T1").style.display = "none";
    document.getElementById("T2").style.display = "none";
    document.getElementById("Text_2").innerHTML = mensajeEncriptado;
    document.getElementById("Text_2").style.display = "show";
    document.getElementById("Text_2").style.display = "inline";
    document.getElementById("btn3").style.display = "show";
    document.getElementById("btn3").style.display = "inline";

    document.getElementById("InputText").value = "";

}

function desencriptar(){
    var mensaje = document.getElementById("InputText").value.toLowerCase();

    if(mensaje == ""){
        alert("No hay mensaje para encriptar");
        resultado(no);
    }

    var mensajeEncriptado = mensaje
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");

    document.getElementById("ImgDer").style.display = "none";
    document.getElementById("T1").style.display = "none";
    document.getElementById("T2").style.display = "none";
    document.getElementById("Text_2").innerHTML = mensajeEncriptado;
    document.getElementById("btn3").style.display = "show";
    document.getElementById("btn3").style.display = "inline";

}

function copiar(){
    /*Text_2.select();
    navigator.clipboard.writeText(Text_2.value);
    Text_2.value = "";
    alert("Se copio el codigo con exito")*/


    var copiar = document.querySelector("#Text_2");
    copiar.select();
    document.execCommand("copy");
    alert("Se copio el codigo con exito");

}
