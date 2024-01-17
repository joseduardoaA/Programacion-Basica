function aleatorio(min, max){
    return Math.floor( Math.random()* (max - min + 1)+min)
}
// JUGADOR
// Crea una funcion para las opciones que elija el jugador y la PC 
function eleccion(jugada) {
    let resultado = ""
    if (jugada == 1) {
        resultado = "Piedra 🪨"
    } 
    else if (jugada == 2) {
        resultado = "Papel 📄"
    }
    else if (jugada == 3) {
        resultado = "Tijera ✂️"
    } else {
        resultado = "MAL ELEGIDO"
        
    }
    return resultado
}

// 1 Es piedra, 2 es papel y 3 es tijera
let jugador = 0,
pc = 0,
triunfos = 0,
perdidas = 0;
while (triunfos < 3 && perdidas < 3) {
pc = aleatorio(1,3)
jugador = prompt("Elije: 1 para Piedra 2 para Papel y 3 para Tijera");
if(jugador>=4){
    alert("Numero incorrecto por favor ingresa un numero del 1 al 3")
}
alert("Tu eliges: " + eleccion(jugador))
alert("PC elige: " + eleccion(pc))

// BATALLA
if (jugador == pc) {
    alert("Empate")
    } else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
        alert("GANASTE")  
        triunfos = triunfos + 1      
} else {
    alert("PERDISTE")
    perdidas = perdidas + 1
}
}
alert(`Ganaste ${triunfos} veces Perdiste ${perdidas} veces`)


    // switch (jugada) {
    // case jugada == 1:
    //     resultado = "Piedra 🪨"
    // break
    // case jugada == 2:

    //     resultado = "Papel 📄"
    //     break
    // case jugada == 3:
    // resultado = "Tijera ✂️"
    // break
    // default:
    // resultado = "MAL ELEGIDO"
    // break
    // }
 