let tabla = parseInt (prompt("Ingrese número para aprender tabla de multiplicación"))
let cantidadNumeros = parseInt (prompt("Ingrese hasta que número quiere saber la multiplicación"))

for (let i=0; i<=cantidadNumeros; i++){
    multiplicacion = [i]*tabla
    console.log ("El valor de "+tabla+" X "+ [i]+" es igual a "+multiplicacion)
}