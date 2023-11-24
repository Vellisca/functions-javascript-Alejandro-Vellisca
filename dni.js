const sc = require("prompt-sync")({ sigint: true });
let dni = sc("Escribe tu DNI sin la letra ->")
let letra = sc("Escribe la letra del DNI ->")
let division = dni % 23
let sudoletra = 'P'
if (Number(dni) && dni.length == 8) {
    if (!Number(letra) && letra.length==1) {
        console.log("Tu dni es " + dni + letra)
        switch (division) {
            case 0:
                sudoletra = 'T'
                break;
            case 1:
                sudoletra = 'R'
                break;
            case 2:
                sudoletra = 'W'
                break;
            case 3:
                sudoletra = 'A'
                break;
            case 4:
                sudoletra = 'G'
                break;
            case 5:
                sudoletra = 'M'
                break;
            case 6:
                sudoletra = 'Y'
                break;
            case 7:
                sudoletra = 'F'
                break;
            case 8:
                sudoletra = 'P'
                break;
            case 9:
                sudoletra = 'D'
                break;
            case 10:
                sudoletra = 'X'
                break;
            case 11:
                sudoletra = 'B'
                break;
            case 12:
                sudoletra = 'N'
                break;
            case 13:
                sudoletra = 'J'
                break;
            case 14:
                sudoletra = 'Z'
                break;
            case 15:
                sudoletra = 'S'
                break;
            case 16:
                sudoletra = 'Q'
                break;
            case 17:
                sudoletra = 'V'
                break;
            case 18:
                sudoletra = 'H'
                break;
            case 19:
                sudoletra = 'L'
                break;
            case 20:
                sudoletra = 'C'
                break;
            case 21:
                sudoletra = 'K'
                break;
            case 22:
                sudoletra = 'E'
                break;
            default:
                console.log("Algo has hecho mal")
                break;
        }
        if (sudoletra == letra) {
            console.log("Tu dni es válido ")
        }
        else {
            console.log("Tu DNI no existe")
        }
    }
    else {
        console.log("Tienes que escribir la letra del DNI")
    }
}
else {
    console.log("Tienes que escribir el numero del DNI")
}
