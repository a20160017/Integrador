alert ("Bienvenidos al restaurant Coralitos")
var entrada=parseInt(prompt("Ingrese el precio de la entrada:"))
console.log("El precio de la entrada es", entrada)
var segundo=parseInt(prompt("Ingrese el precio de el segundo:"))
console.log("El precio de la entrada es", segundo)
var postre=parseInt(prompt("Ingrese el precio del postre:"))
console.log("El precio del postre es", postre)
var total=entrada+segundo+postre
console.log("La cuenta es de", total)
var igv=(total*18/100)+total
console.log("El cuanta total con IGV es", igv)