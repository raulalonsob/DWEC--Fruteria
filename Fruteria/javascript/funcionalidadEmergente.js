window.onload=()=>{
    let divTicket = document.getElementById("Ticket");
    
    //generar la hora
    var obtenerFecha = new Date();

    let zonaHora = document.createElement("p");
    zonaHora.innerHTML="Fecha: " + obtenerFecha;
    divTicket.appendChild(zonaHora);
    
    //generar lista fruta

    
    for(i=0; i< frutasInverso.length;i++){

        if (frutasInverso[i].kg > 0){
            
            let precioFruta=(frutasInverso[i].precio)*(frutasInverso[i].kg);
            console.log(precioFruta);
            let linea = document.createElement("p");
            linea.innerHTML =  frutasInverso[i].nombre+" ---- "+frutasInverso[i].kg+"kg ---"+frutasInverso[i].precio + "€ -- "+ precioFruta+"€";
            divTicket.appendChild(linea);

        }else alert("error aqui")

    }

    //generar conclusion
    let zonaFinal = document.createElement("p");
    zonaFinal.innerHTML="Precio Total: " + total() +"€ <br> "+ " Precio Medio: "+precioMedio()+"€";
    divTicket.appendChild(zonaFinal);
   
}