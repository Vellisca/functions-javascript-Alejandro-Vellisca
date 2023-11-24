const random = Math.floor(Math.random() * 101);
const sc = require("prompt-sync")({ sigint: true });
let adivinar = sc("Intenta acertar el número entre 1 y 100 --> ")
EsNum(adivinar)

if (EsNum(adivinar)) {
    while (random !== Number(adivinar)) {
        console.log('No, vuelve a intentar')
        if (Number(adivinar) < random) {
            console.log('Más alto')
        }
        if (Number(adivinar) > random) {
            console.log('Más bajo')
        }
        adivinar = sc("Intenta acertar el número entre 1 y 100 --> ")
    }
}
else{
    console.log('Eso no es número, prueba otra vez')
    adivinar = sc("Intenta acertar el número entre 1 y 100 --> ")
}
console.log('Has acertado')

//Funciones 
function EsNum(incognita) {
    if (Number(incognita)) {
        return true
    }
    else {
        return false
    }
}