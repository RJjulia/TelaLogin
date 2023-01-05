var peso = document.getElementById('peso');
var altura = document.getElementById('altura');
var IMC;

function validar(){
    if(peso < 0 && altura < 0){
        alert("Peso ou Altura invalidos\n Insira novamente");
    }
}

function calculo(){
    IMC = (peso/ (altura*altura));
}