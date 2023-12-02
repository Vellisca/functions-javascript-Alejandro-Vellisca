const sc = require("prompt-sync")({ sigint: true });
let textouser=sc("Escribe un texto, te diré las vocales que tiene ")
let vocales = "aeiou"
textouser= textouser.toLowerCase();
let CuentaVocales = 0;
for (let i = 0; i < textouser.length; i++) {
    for (let n = 0; n < vocales.length; n++) {
        //console.log(textouser.charAt(i))
        //console.log(vocales.charAt(n))
        if (textouser.charAt(i)===vocales.charAt(n)) { 
            //charAt saca las letras por posicion de un string
            CuentaVocales++
        }
    }
}
if (CuentaVocales==0) {
    console.log("El texto introducido no tiene vocales.")    
}
else{
console.log("Tiene "+CuentaVocales+" vocales el texto introducido");
}
console.log("Saliendo...")