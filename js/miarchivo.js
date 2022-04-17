alert("Bienvenido a tu fortuna semanal")
let fortuna;


do {
    fortuna = parseInt(prompt("Ingrese un número del 1 al 10, sino ponga: salir."));

    if (fortuna == 1) {
        alert("Hoy tu novi@ te dejará.")
    }else if(fortuna == 2){
        alert("Su jefe, te dirá que hiciste un gran trabajo.")
    }else if(fortuna == 3){
        alert("Jugale al quini 6.")
    }else if(fortuna == 4){
        alert("Te sorprenderan con un asado.")
    }else if(fortuna == 5){
        alert("Un amigo/a te flechará.")
    }else if(fortuna == 6){
        alert("Te sorprenderán.")
    }else if(fortuna == 7){
        alert("Mañana tendras una gran sorpresa.")
    }else if(fortuna == 8){
        alert("Alguien muy cercano te dira un secreto.")
    }else if(fortuna == 9){
        alert("Todas son sorpresa esta semana, Ten cuidado.")
    }else if(fortuna == 10){
        alert("No creas en estas cosas.")
    }else{
        alert("Tendrá mala suerte ya que puso cualquier cosa.")
    }

} while (fortuna)