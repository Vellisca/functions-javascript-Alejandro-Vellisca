const sc = require("prompt-sync")({ sigint: true });
let num = sc("Escribe un número y diré si es par o no, escribe salir para cerrar el programa ->")
let par = 'Nan'

while (num!='salir') {
    if (Number(num)) {
       Espar()
       console.log('El numero '+num+' es '+par) 
    }
    else{
        console.log('No es un número')
    }
    num = sc("Escribe un número y diré si es par o no, escribe salir para cerrar el programa ->")

}
function Espar() {
    if ((Number(num))%2===0) {
        par = 'par'
    }
    else {
        par = 'impar'
    }
}
console.log('Adios...')