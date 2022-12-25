let variedad
let litroBarril
let cantidadLata
const precio1 = 350
const precio2 = 250
const precio3 = 240

alert("Bienvenido/a, eligue tu producto.")
inicio()

function inicio(){
    let producto = Number(prompt("Elije (colocar numero de opcion):\n" + "1-Barril\n" + "2-Lata" ))
    if ((producto == 1) || (producto == 2)) {
        switch (producto){
            case 1:
                alert ("Su eleccion fue Barril")
                estilo()
                barril()
                calcularBarril()
                alert("Gracias por elegirnos")
            /*break;*/
            case 2:
                alert("Su eleccion fue Lata")
                estilo()
                lata()
                calcularLata()
                alert("Gracias por elegirnos")
           /* break;*/
        } 
    } 
    else{
        alert("Ingrese un valor valido")
        inicio()
    }
}

function estilo(){
    variedad = Number(prompt("Elige numero de opcion:\n"+ "1- APA\n" + "2-Golden\n" + "3-Irish Red"))
    return variedad
}

function barril(){
    litroBarril = Number(prompt("Ingrese litraje: 50LT, 30LT, 20LT"))
    if ((litroBarril == 50) || (litroBarril == 30) || (litroBarril == 20)) {
        alert ("Usted eligió: " + litroBarril)
        return litroBarril
    }
    else{
        alert("Valor incorrecto")
        barril ()
    }
}

function lata(){
    cantidadLata = prompt("Ingrese cantidad de latas que quiere")
        if ((cantidadLata == 0) || (isNaN(cantidadLata) == true)) {
            alert("vuelva a elegir un valor")
            lata()
        }
        else{
            alert("Usted eligio: " + cantidadLata)
            return Number(cantidadLata)
        }
}

function calcularBarril(){
    switch (variedad){
        case 1:
            alert ("Usted eligió APA de " + litroBarril+ " litros " + "con un costo de $" + litroBarril * precio1 )
        break;
        case 2:
            alert ("Usted eligió Golden de " + litroBarril+ " litros " + "con un costo de $" + litroBarril * precio2 )
        break;litroBarril
        case 3:
            alert ("Usted eligió Irish Red de " + litroBarril + " litros " + "con un costo de $" + litroBarril * precio3 )
        break;
    }
}

function calcularLata(){
    switch (variedad){
        case 1:
            alert ("Usted eligió APA por una cantidad de " + cantidadLata + " latas " + "con un costo de $" + cantidadLata * precio1 / 2)
        break;
        case 2:
            alert ("Usted eligió Golden por una cantidad de " + cantidadLata+ " latas " + "con un costo de $" + cantidadLata * precio2 / 2)
        break;
        case 3:
            alert ("Usted eligió Irish Red por una cantidad de " + cantidadLata + " latas " + "con un costo de $" + cantidadLata* precio3 / 2)
        break;
    }
}
