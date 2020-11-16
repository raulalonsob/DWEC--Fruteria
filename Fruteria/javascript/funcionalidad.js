/**Arrays donde se guardaran los datos*/
/**var frutas=["melon","manzana","pera","frambuesa","pitaya","arandano","platano","papaya","fresa","melocoton"];
var precios=[0.74, 1.69, 1.59, 12.74, 7.54,7.15, 2.15,5.35,5.74,1.40];
var kilos=[0,0,0,0,0,0,0,0,0,0];
 */


 /**
  * Clase principal de Fruta
  */
 class Fruta {
    constructor(nombre, kg, precio) {
        this.nombre = nombre;
        this.kg = kg;
        this.precio = precio;
    }


}
/**
 * Clase hija de la clase Fruta que añade los atributos de verano
 */
class FrutaVerano extends Fruta {
    constructor(nombre, kg, precio, proximidad, region) {
        super(nombre, kg, precio);
        this.proximidad = proximidad;
        this.region = region;
    }
}


/**
 * Clase hija de la clase Fruta que añade los atributos de invierno
 */
class FrutaInvierno extends Fruta {
    constructor(nombre, kg, precio, conservar) {
        super(nombre, kg, precio);
        this.conservar = conservar;
    }

}

/**
 * Objetos donde se almacena la información de cada fruta
 */
var melon =new FrutaVerano("melon",0,0.74,"es de proximidad","Cáceres");
var manzana = new FrutaInvierno("manzana",0,1.69,"se recomienda");
var pera = new FrutaInvierno("pera",0,1.59,"no se recomienda");
var frambuesa = new FrutaVerano("frambuesa",0,1.59,"no es de proximidad","Huelva");
var pitaya = new FrutaInvierno("pitaya",0,7.54,"se recomienda");
var arandano = new FrutaVerano("arandano",0,7.15,"no es de proximidad","Huelva");
var platano = new FrutaInvierno("platano",0,2.15,"no se recomienda");
var papaya = new FrutaVerano("papaya",0,5.35,"no es de proximidad","Islas Canarias");
var fresa = new FrutaVerano("fresa",0,5.74,"no es de proximidad","Malaga");
var melocoton= new FrutaVerano("melocoton",0,1.40,"no es de proximidad","Murcia");




/**
 * Suma de los kg y recogida de peso y kg totales
 */
function sumarFruta(fruta){
    switch(fruta){
        case 'melones':


            break;
        case 'manzanas':


            break;
        case 'peras':


            break;
        case 'frambuesas':


        break;
        case 'pitayas':


            break;
        case 'arandanos':


            break;
        case 'platanos':


            break;
        case 'papayas':


            break;
        case 'fresas':


            break;      
            
            case 'melocotones':


                break;   
    }

}

 function sumarMelones(){
    let id = 0;
    let recogido = document.getElementById(frutas[id].nombre).value;
    let kg = Number(recogido);
    melon.kg= melon.kg + kg;

    anadeLateral(id,kg);
    
 }

 function sumarManzanas(){
    let id = 1;
    let recogido = document.getElementById(frutas[id].nombre).value;
    let kg = Number(recogido);
    manzana.kg= manzana.kg + kg;

    anadeLateral(id,kg);
}

function sumarPeras(){
    let id = 2;
    let recogido = document.getElementById(frutas[id].nombre).value;
    let kg = Number(recogido);
    pera.kg= pera.kg + kg;

    anadeLateral(id,kg);
}

function sumarFrambuesas(){
    let id = 3;
    let recogido = document.getElementById(frutas[id].nombre).value;
    let kg = Number(recogido);
    frambuesa.kg= frambuesa.kg + kg;

    anadeLateral(id,kg);
}

function sumarPitayas(){
    let id = 4;
    let recogido = document.getElementById(frutas[id].nombre).value;
    let kg = Number(recogido);
    pitaya.kg= pitaya.kg + kg;

    anadeLateral(id,kg);
}

function sumarArandanos(){
    let id = 5;
    let recogido = document.getElementById(frutas[id].nombre).value;
    let kg = Number(recogido);
    arandano.kg= arandano.kg + kg;

    anadeLateral(id,kg);
}

function sumarPlatanos(){
    let id = 6;
    let recogido = document.getElementById(frutas[id].nombre).value;
    let kg = Number(recogido);
    platano.kg= platano.kg + kg;

    anadeLateral(id,kg);
}

function sumarPapayas(){
    let id = 7;
    let recogido = document.getElementById(frutas[id].nombre).value;
    let kg = Number(recogido);
    papaya.kg= papaya.kg + kg;

    anadeLateral(id,kg);
}

function sumarFresas(){
    let id = 8;
    let recogido = document.getElementById(frutas[id].nombre).value;
    let kg = Number(recogido);
    fresa.kg= fresa.kg + kg;

    anadeLateral(id,kg);

}

function sumarMelocotones(){
    let id = 9;
    let recogido = document.getElementById(frutas[id].nombre).value;
    let kg = Number(recogido);
    melocoton.kg= melocoton.kg + kg;
    anadeLateral(id,kg);
}

/**
 * Funcion que irá añadiendo los kg y la fruta al lateral
 */

function anadeLateral (i,kgs) {
    if (kgs>0){
        let divLateral = document.getElementById("lateral");
        let linea = document.createElement("p");
        linea.innerHTML =  frutas[i].nombre+" ---- "+ kgs+"kg"
        divLateral.appendChild(linea);

    }
    else{
      alert("tienes introducir un numero de kg");
    }
}


//Creo el siguiente array donde se recogeran todas las frutas para operar con el más tarde

var frutas = [melon, manzana, pera, frambuesa, pitaya, arandano, platano, papaya, fresa, melocoton];


//Ordeno el array de frutas de forma alfabetica inversa para mas tarde mostrar las frutas en este orden

var frutasInverso= frutas.sort(((a, b) => b.nombre > a.nombre));


/**
 * Función que recogera todos los precios para calcular el precio total
 */
 

 function total(){
     let precioTotal=0;
     for(i=0; i<frutas.length; i++){
         precioTotal= precioTotal+((frutas[i].kg)*(frutas[i].precio))
     }

     return precioTotal;
 }

/**
 * Funcion que calcula el precio medio
 */

 function precioMedio(){ 
    let pesoTotal=0;
    for (i=0; i<frutas.length; i++){
        pesoTotal= pesoTotal+(frutas[i].kg);
    }
    let medio = 0;
    console.log(pesoTotal);
    console.log (total());
    medio = (total()/pesoTotal);

    return medio;
}


/**
 * Funcion monstrar ventanas emergentes
 */





/***
 * Funcion que mostrara las ventanas emergentes y el resultado final
 */

function finalizarPedido(){

    let divTicket = document.getElementById("Ticket");
    
    //generar la hora
    
    var obtenerFecha = new Date();

    let zonaHora = document.createElement("p");
    zonaHora.innerHTML="Fecha: " + obtenerFecha;
    divTicket.appendChild(zonaHora);
    
    //generar lista fruta
    let zonaFruta = document.createElement("p");
    
    for(i=0; i< frutasInverso.length;i++){

        if (frutasInverso[i].kg > 0){
            
            let precioFruta=(frutasInverso[i].precio)*(frutasInverso[i].kg);

            let linea = document.createElement("p");
            linea.innerHTML =  frutasInverso[i].nombre+" ---- "+frutasInverso[i].kg+"kg ---"+frutasInverso[i].precio + "€ -- "+ precioFruta+"€";
            divTicket.appendChild(linea);

        }

    }

    //generar conclusion
    let zonaFinal = document.createElement("p");
    zonaFinal.innerHTML="Precio Total: " + total() +"€ <br> "+ " Precio Medio: "+precioMedio()+"€";
    divTicket.appendChild(zonaFinal);
   

}

