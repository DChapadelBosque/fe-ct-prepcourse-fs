function viajar(destino) {
    if (destino === "Brasil") {
        console.log("Gire a la Izquierda");
    } else if(destino === "Argentina") {
    console.log("Gire a la Derecha");
    } else {
        console.log("Nos Perdimos");
    }
}

viajar("Prueba");

function puedeManejar(edad) {
    if (edad >= 18) {
        console.log( true );
    }
    console.log( false );
}
puedeManejar(17);