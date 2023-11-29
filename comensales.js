const sc = require("prompt-sync")({ sigint: true });
let comensales = 0;
let numcebolla = 0;
let numsincebolla = 0;
const gramosper = 200;
const huevoscom = 1
const cebollacom = 60;
comensales = sc("Cuántos comensales van a comer? -> ");
cebolla();

function cebolla() {
    if (Number(comensales)) {
        numcebolla = sc("Cuántos de ellos comen tortilla con cebolla? -> ")
        numsincebolla = sc("Cuántos de ellos comen tortilla sin cebolla? -> ")
        if (Number(numcebolla) && Number(numcebolla) < comensales && Number(numsincebolla) < comensales && (Number(numcebolla) + Number(numsincebolla)) == comensales) {
            let vino = Math.floor(comensales / 2)
            let gramos = gramosper * comensales;
            let huevos = huevoscom * comensales;
            let cebolla = cebollacom * numcebolla;
            console.log("Para la receta de "+ comensales+" con " + numcebolla +" tortillas con cebolla y "+ numsincebolla + " tortillas sin cebolla necesitarás:")
            console.log("Serán " + gramos + " gramos de patatas")
            console.log("Serán " + vino + " botellas de vino")
            console.log("Serán " + huevos + " huevos")
            console.log("Serán " + cebolla + " gramos de cebollas")
        }
        else {
            console.log("No puede haber ese número de pedidos")
        }
    }
    else {
        console.log("Los comensales tienen que ser un número ")
    }

}