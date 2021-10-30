const { setInterval } = require("timers/promises")

function getPi(){
  return 3.14
}

function suma(numberOne, numberTwo){
    return numberOne + numberTwo
}

function resta(numberOne, numberTwo){
    return numberOne - numberTwo
}

function multi(numberOne, numberTwo){
    return numberOne * numberTwo
}


function div(numberOne, numberTwo){
    return numberOne / numberTwo
}

/*
 module.exports = {
    suma, resta, multi, div, getPi
}
*/

setInterval(() => {
    
}, interval);
module.exports.suma=suma
module.exports.resta=resta
module.exports.multi=multi
module.exports.div=div
module.exports.getPi=getPi

