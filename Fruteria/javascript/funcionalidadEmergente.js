window.onload=()=>{
    //listener para botones
    document.getElementById("terminar").addEventListener("click",terminarPedido,false);
    document.getElementById("volver").addEventListener("click",volver,false);

    var vent= window.opener;
    let divTicket = document.getElementById("Ticket");
    
    //divTicket.innerHTML+=vent.mostrarTicket();
    var obtenerFecha = new Date();

    let zonaHora = document.createElement("p");
    zonaHora.innerHTML="Fecha: " + obtenerFecha;
    divTicket.appendChild(zonaHora);
    let arrayfrutas=vent.frutasInverso;
    
    for(i=0; i< arrayfrutas.length;i++){
        
        if (arrayfrutas[i].kg > 0){
            console.log("Hola");
            let precioFruta=(arrayfrutas[i].precio)*(arrayfrutas[i].kg);
            console.log(precioFruta);
            let linea = document.createElement("p");
            linea.innerHTML =  arrayfrutas[i].nombre+" ---- "+arrayfrutas[i].kg+"kg ---"+arrayfrutas[i].precio + "€ -- "+ precioFruta+"€";
            divTicket.appendChild(linea);

        }

    }

    let zonaFinal = document.createElement("p");
    zonaFinal.innerHTML="Precio Total: " + vent.total() +"€ <br> "+ " Precio Medio: "+vent.precioMedio()+"€";
    divTicket.appendChild(zonaFinal);
}

function terminarPedido(){
    window.close();
}

function volver(){
    window.opener.document.getElementById("form").submit();
    window.close();
    window.opener.reset();
        
}